from sqlalchemy import Column, String, Integer, Date
from sqlalchemy.orm import declarative_base
import datetime as dt

Base = declarative_base()

class Order(Base):

    __tablename__ = "Orders"

    id = Column("id", Integer, primary_key=True, autoincrement=True)
    customer_name = Column("customer_name", String, nullable=False)
    order = Column("order", String, nullable=False)
    date_created = Column("date_created", Date,nullable=False, default=dt.datetime.utcnow)
    
    def toJSON(self):
        return {"id”": self.id,
                "customer_name": self.customer_name,
                "orders" : self.orders,
                "date_created" : self.date_created}