import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/cartSlice";

export default function Cart() {
  let items = useSelector((state) => state.cart);
  console.log(items);

  const dispatch = useDispatch();

  let handleRemoveFromCart = (objId)=>{
    dispatch(remove(objId))
  }

  return (
    <div className="cartWrapper">
        {items.map((obj) => (
          <div key={obj.id} className="cartCard">
            <img src={obj.image}></img>
            <h6>{obj.title}</h6>
            <h5>Price : ${obj.price}</h5>
            <button
              className="remove-btn"
              onClick={() => {
                handleRemoveFromCart(obj.id);
              }}
            >
              Remove Item
            </button>
          </div>
        ))}
    </div>
  );
}
