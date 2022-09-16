import { Product } from "../../graphql/prodcuts";

const ProductDetail = ({
  item : {
    imageUrl,
    price,
    title,
    description
  },
} : {
    item: Product
}) => {
  return (
    <div className="products-detail">
      <p className="products-detail__title">{title}</p> 
      <img src={imageUrl} className="products-detail__image"/>
      <p className="products-detail__description">{description}</p>
      <span className="products-detail__price">{price}</span>
    </div> 
)}

export default ProductDetail;