import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { Status, fetchProducts } from "../Store/productSlice";

export default function Product() {
        
  // let [products, setProducts] = useState([]);

  let {data,status} = useSelector((state)=>state.products);
  
  let dispatch = useDispatch();

  let handleAddToCart = (obj)=>{
    dispatch(add(obj))
  }
  
  useEffect(() => {

    // axios.get("https://fakestoreapi.com/products")
    // .then((res) => {
    //   setProducts(res.data);
    // });
    const getProducts = async () => {
      dispatch(fetchProducts());
    }
    getProducts();

  },[]);

  if(status == Status.Error){
    return <h2>Something went Wrong!</h2>
  }

  if(status == Status.Loading){
    return <h2>......Loading</h2>
  }




  return (
    <>
      <div className="productsWrapper">
        {data.map((obj) => {
          return (
            <div key={obj.id} className="card">
              <img src={obj.image}></img>
              <h6>{obj.title}</h6>
              <h5>${obj.price}</h5>
              <button className="btn" onClick={()=>{handleAddToCart(obj)}}>Add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
