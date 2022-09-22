import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { Product } from "../../graphql/prodcuts";
import { cartItemSelector } from "../../recoils/cart";

const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createAt
} : Product) => {
  const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
  const addToCart = () => setCartAmount(prev => (prev || 0) + 1)

  return (
  <li className="products-item">
    <Link to={`/products/${id}`}>
      <p className="products-item__title">{title}</p> 
      <img src={imageUrl} className="products-item__image"/>
      <span className="products-item__price">{price}</span>
    </Link>
    <button className=""product-item__add-cart onClick={addToCart}>담기</button>
    <span>{cartAmount || 0}</span>
  </li>
)};

export default ProductItem;