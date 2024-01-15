import React, { useState, useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    // Handle the click for the selected size
    console.log(`Selected size: ${size}`);
    
    // Update the state to track the selected size
    setSelectedSize(size);
  };

  //console.log('Product:', product);
  if (!product || !product.image) {
    return <div>Loading...</div>; // or some default behavior
  }
//   const handleSizeClick = (size) => {
//     // Handle the click for the selected size
//     console.log(`Selected size: ${size}`);
//   };
return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              ₹{product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              ₹{product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
            A lightweight, usually knitted, pullover shirt, close-fitting and with
            a round neckline and short sleeves, worn as an undershirt or outer
            garment.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <button className={`size-button ${selectedSize === "S" ? "selected" : ""}`} onClick={() => handleSizeClick("S")}>
                S
                </button>
                <button className={`size-button ${selectedSize === "M" ? "selected" : ""}`} onClick={() => handleSizeClick("M")}>
                M
                </button>
                <button className={`size-button ${selectedSize === "L" ? "selected" : ""}`} onClick={() => handleSizeClick("L")}>
                L
                </button>
                <button className={`size-button ${selectedSize === "XL" ? "selected" : ""}`} onClick={() => handleSizeClick("XL")}>
                XL
                </button>
                <button className={`size-button ${ selectedSize === "XXL" ? "selected" : "" }`} onClick={() => handleSizeClick("XXL")}
                >
                XXL
                </button>
            {/* <button className="size-button" onClick={() => handleSizeClick('S')}>S</button>
            <button className="size-button" onClick={() => handleSizeClick('M')}>M</button>
            <button className="size-button" onClick={() => handleSizeClick('L')}>L</button>
            <button className="size-button" onClick={() => handleSizeClick('XL')}>XL</button>
            <button className="size-button" onClick={() => handleSizeClick('XXL')}>XXL</button> */}
            </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category : </span>Women, T-shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};
export default ProductDisplay;
