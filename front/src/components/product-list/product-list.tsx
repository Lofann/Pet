import {useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card";
import ProductCardsListProps from "./product-list.props";
import { AppRoute } from "../../consts";

export default function ProductCardsList({products}: ProductCardsListProps): JSX.Element {
    const navigate = useNavigate()
    return (
      <div className="product-cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
        <button className="card add-btn" 
        onClick={()=> navigate(`/${AppRoute.CreateProduct}`)}>+</button>
      </div>
    )
  }