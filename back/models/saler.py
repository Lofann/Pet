from sqlalchemy import  Column, Integer, String, UUID, Text
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

class Saler(Base):
    __tablename__ = 'saler'
    id = Column(UUID, primary_key=True, index=True)
    name = Column(Text)
    description  = Column(Text)