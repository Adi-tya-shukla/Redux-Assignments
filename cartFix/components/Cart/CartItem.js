import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartAction } from '../../store/CartSlice';


const CartItem = (props) => {
  const { title, quantity, total, price, id} = props.item;

  const dispatch = useDispatch()
  const increaseItem =()=>{
    dispatch(cartAction.addItemToCart({
      id,
      title,
      price,
    }))

  }
  const decreaseItem=()=>{
    dispatch(cartAction.removeFromCart(id))
  }
    return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          Rs.{total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(Rs.{price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={increaseItem}>+</button>
          <button  onClick={decreaseItem}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
