import { useNavigate } from "react-router-dom";
import ProductCardProps from "./product-card.props";
import { AppRoute } from "../../consts";

export default function ProductCard({product}: ProductCardProps): JSX.Element {
    const navigate = useNavigate()
    return(
        <div className="card">
        <div className="title-2">{product.name}</div>
        <img className = "card-image" src = {product.image}></img>
        <div>Цена: {product.price}₽</div>
        <button className="btn" onClick={()=>navigate(`/${AppRoute.Product}/${product.id}`)}>Перейти</button>
        </div>
    )
}