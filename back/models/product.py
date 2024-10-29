from sqlalchemy import  Column, Integer, String, UUID, Text
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

class Product(Base):
    __tablename__ = "product"

    id = Column(UUID, primary_key=True, index=True)
    name = Column(Text)
    description  = Column(Text)
    count  = Column(Integer)
    price = Column(Integer)
    saler = Column(UUID)
