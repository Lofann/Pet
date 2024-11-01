import { useNavigate, useParams } from "react-router-dom"
import { AppRoute } from "../../consts"
import { Product } from "../../types/product"
import { useEffect, useState } from "react"
import axios from "axios"
import { UUID } from "crypto"




export default function ProductPage(): JSX.Element {
  const navigate = useNavigate()
  const id = useParams().id
  const apiUrl = `http://127.0.0.1:8000/api/products/${id}`;
  
const [data, setData] = useState<Product>();
  
useEffect(() => {
  axios.get(apiUrl).then((resp) => {
    setData(resp.data);
  });}, [setData]);

  const deleteProduct = () =>{
    axios.delete(apiUrl)
    navigate(`/${AppRoute.Product}`)
  }


  return (
    <>



      <main className="main">

        <div className="align-center font-16-px">

          <h1>{data?.name}</h1>
          <div className="product-page">
            <div className="col">
              <img className='product-image' src={data?.image}></img>
            </div>
            <div className="product-about col">
              <p><b>Цена: </b>{data?.price} руб.</p>
              <p><b>Количество: </b>{data?.count} </p>
              <p className="discription">{data?.description}</p>
              <p><b>Продавец: </b>{data?.saler} </p>
              <button onClick={() => deleteProduct()} className="btn delete">Delete</button>
              <button onClick={() => navigate(`/${AppRoute.CreateProduct}`)} className="btn">Изменить</button>
            </div>

          </div>

        </div>
      </main>

    </>
  )
}