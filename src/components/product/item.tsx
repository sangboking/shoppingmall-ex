import { Link } from "react-router-dom";
import { Product } from "../../graphql/prodcuts";

const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createAt
} : Product) => {
  return (
  <li className="products-item">
    <Link to={`/products/${id}`}>
      <p className="products-item__title">{title}</p> 
      <img src={imageUrl} className="products-item__image"/>
      <span className="products-item__price">{price}</span>
    </Link>
  </li>
)};

export default ProductItem;