import { Link } from "react-router-dom";
import { Product } from "../../types";

const ProductItem = ({
  category,
  image,
  price,
  rating,
  title,
  id
} : Product) => (
  <li className="products-item">
    <Link to={`/products/${id}`}>
      <p className="products-item__category">{category}</p>
      <p className="products-item__title">{title}</p> 
      <img src={image} className="products-item__image"/>
      <span className="products-item__price">${price}</span>
      <span className="products-item__rating">{rating.rate}</span>
    </Link>
  </li>
);

export default ProductItem;