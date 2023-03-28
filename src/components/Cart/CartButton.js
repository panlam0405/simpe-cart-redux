import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../components/store/index";

const CartButton = (props) => {
	const dispatch = useDispatch();
	const productsInCart = useSelector((state) => state.cart.cart);

	const prods = productsInCart.reduce((acc, cur) => {
		return acc + cur.quantity;
	}, 0);
	const onShowCartHandler = () => {
		dispatch(toggleCart());
	};

	return (
		<button className={classes.button} onClick={onShowCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{prods}</span>
		</button>
	);
};

export default CartButton;
