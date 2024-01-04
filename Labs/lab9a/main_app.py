from flask import Flask, redirect, url_for, render_template, request, abort

app = Flask(__name__)

@app.route("/")
def default():
    return render_template("main.html")

@app.route("/mrs_doubt_fire/")
def mrs_doubt_fire():
    return render_template("mrs_doubt_fire.html")

@app.route("/buy_tickets/mrs_doubt_fire/",methods=["POST"])
def buy_tickets():
    return render_template("buy_tickets.html")

@app.route("/transaction_page/mrs_doubt_fire/",methods=["POST"])
def transaction_page():
    ticket_info = {}
    ticket_info["show"] = "Mrs.Doubtfire"
    ticket_info["price"] = "$XYZ.00"
    ticket_info["zone"] = request.form["zone"]
    ticket_info["sector"] = request.form["sector"]
    ticket_info["name"] = request.form["name"]
    ticket_info["dateAndTime"] = request.form["dateAndTime"]
    return render_template("transaction_page.html",ticket_info=ticket_info)

if __name__ == "__main__":
    app.run()