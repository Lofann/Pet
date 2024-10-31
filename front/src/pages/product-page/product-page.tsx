import { Product } from "../../types/product"


const product:Product = {
    id: '95c4430b-c5f7-4f99-8bd8-17c428704dca',
    count: 10,
    descripion: 'The most pretty apple',
    image: 'https://st24.stpulscen.ru/images/product/217/941/930_original.jpg',
    name: 'Green Apple',
    price: 10,
    saler:'95c4430b-c5f7-4f99-8bd8-17c428704dca'

}

export default function ProductPage(): JSX.Element {
    return (
      <>
  
  

            <main className="main">

              <div className="align-center font-16-px">
                
                <h1>{product.name}</h1>
                <div className="product-page">
                    <div className="col">
                        <img className = 'product-image' src = {product.image}></img>
                    </div>
                    <div className="product-about col"> 
                        <p><b>Цена: </b>{product.price} руб.</p>
                        <p><b>Количество: </b>{product.count} </p>
                        <p className="discription">{product.descripion}</p>
                        <p><b>Продавец: </b>{product.saler} </p>
                        <button className="btn-delete">Delete</button>
                    </div>

                </div>
              
              </div>
            </main>

      </>
    )
  }