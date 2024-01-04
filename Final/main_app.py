from flask import Flask, redirect, url_for, render_template, request, abort, session
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from order_model import Base, Order

app = Flask(__name__)

engine = create_engine("sqlite:///mydb.db", echo=True)
Base.metadata.create_all(bind=engine)
Session = sessionmaker(bind=engine)
session = Session()

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/order_summary",methods=["POST"])
def order_summary():

    order_summary = {}
    order_summary["name"] = request.form["name"]
    order_summary["order"] = request.form["order"]
    new_order = Order(order=order_summary["order"],customer_name=order_summary["name"])
    try:
        session.add(new_order)
        session.commit()
        return render_template("order_summary.html",order_summary=order_summary)
    except:
        return 'There was an issue adding your task'
    
@app.route("/kitchen/")
def kitchen():
    orders = session.query(Order).order_by(Order.date_created).all()
    return render_template("kitchen.html",orders=orders)

@app.route("/delete/<int:id>")
def delete(id):
	order_to_delete = session.query(Order).get(id)
	if order_to_delete is None:
		abort(404)
	try:
		session.delete(order_to_delete)
		session.commit()
		return redirect("/kitchen/")
	except:
		return 'There was a problem deleting that task'

if __name__ == "__main__":
    app.run(debug=True)