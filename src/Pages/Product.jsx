import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
 
  const {all_product} = useContext(ShopContext);
const {arr_products}= Object.values(all_product);
const {productID}=useParams();
const productId = Number(productID)
const product=arr_products.find(e => e.id === productId);
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
    </div>
  )
}
export default Product;
