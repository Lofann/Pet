from fastapi import Depends, FastAPI, Body
from fastapi.responses import JSONResponse
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session 
import uvicorn 
import uuid

from models.saler import Saler
from models.product import Product
from engine import * 

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/hello")
async def hello():
    return {"message": "Hello World"}

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/api/products")
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()


@app.get("/api/products/{id}")
def get_product_by_id(id, db: Session = Depends(get_db)):

    product = db.query(Product).filter(Product.id == id).first()

    if product == None:
        return JSONResponse( status_code=404, content={ "message": "Продукт не найден"})

    return product

@app.post("/api/products")
def create_product(data  = Body(), db: Session = Depends(get_db)):

    product = Product(id = uuid.uuid4(),
                     name=data["name"],
                     description=data["description"],
                     count  = data['count'],
                     price = data['price'],
                     saler = data["saler"],
                     image = data["image"],

    )   

    db.add(product)
    db.commit()
    db.refresh(product)
    return product

@app.put("/api/products")
def edit_product(data  = Body(), db: Session = Depends(get_db)):

    product = db.query(Product).filter(Product.id == data["id"]).first()
    if product == None: 
        return JSONResponse(status_code=404, content={ "message": "Продукт не найден"})

    product.name = data["name"]
    db.commit() 
    db.refresh(product)
    return product

@app.delete("/api/products/{id}")
def delete_product(id, db: Session = Depends(get_db)):

    product = db.query(Product).filter(Product.id == id).first()

    if product == None:
        return JSONResponse( status_code=404, content={ "message": "Продукт не найден"})

    db.delete(product) 
    db.commit()   
    return product




        
if __name__ == '__main__':
    uvicorn.run(app)


