import useFetch from "use-http";
import ProductCardsList from "../../components/product-list/product-list";
import { ProductCards } from "../../types/product-cards";
import { useEffect, useState } from "react";
import { randomUUID } from "crypto";
import { error } from "console";
import axios from "axios";



export default function AllProductPage(): JSX.Element {
 

const [data, setData] = useState<ProductCards>();
  
useEffect(() => {
  const apiUrl = 'http://127.0.0.1:8000/api/products';
  axios.get(apiUrl).then((resp) => {

    setData(resp.data);
  });
}, [setData]);

      console.log(data)
    return (
      <>
            <main className="main">

                <h1>ALL PAGE</h1>

                <ProductCardsList products={data}/>

            </main>

      </>
    )
  }