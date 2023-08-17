import classes from './CartButton.module.css';
import { uiActions } from '../../store/UiSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {

 const dispatch = useDispatch();
  const toggleCartHandler =()=>{
        dispatch(uiActions.toggle());
  }

  const cartQuantity= useSelector(state => state.cart.totalQuantity)
  return (
    <button className={classes.button}
    onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
