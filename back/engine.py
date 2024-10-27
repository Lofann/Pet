from config import DB_PASSWORD, DB_LOGIN,DB_DATABASE,DB_HOST,DB_PORT
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models.product import Product


SQLALCHEMY_DATABASE_URL = f"postgresql://{DB_LOGIN}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_DATABASE}"

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autoflush=False, bind=engine)


