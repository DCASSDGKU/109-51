import React, { useState, useContext } from "react";
import QuantityPicker from "./quantityPicker";
import "./styles/product.css";
import DataContext from "../state/dataContext";

function Product(props){   
    const [quantity, setQuantity] = useState(1);

    let globaladdToCart = useContext(DataContext).addToCart;

    function add(){
        let prodForCart = {...props.data, quantity:quantity};
        globaladdToCart(prodForCart);

        
    }

    function handleQuantity(qty){
        setQuantity(qty);
    }

    function getTotal(){
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return(
        <div className="product">
            <img src={"./img/"+props.data.image} alt=""></img>
            
            <h3>{props.data.title}</h3>

            

            <div className="product-price">
                <label className="total">${getTotal()}</label>
                <label className="price">${props.data.price.toFixed(2)}</label>
            </div>

            <div className="controls">
                <QuantityPicker onChange={handleQuantity}></QuantityPicker>                
                <button className="btn btn-sm btn-success" onClick={add}>Add</button>            
            </div>

        </div>
    );
}

export default Product;


