from sqlalchemy import  Column, Integer, String, UUID, Text
from base import Base 

class Saler(Base):
    __table__ = 'saler'
    id = Column(UUID, primary_key=True, index=True)
    name = Column(Text)
    description  = Column(Text)