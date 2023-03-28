import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	const cartItems = useSelector((state) => state.cart.cart);
	console.log(cartItems);

	let cartContent;
	if (cartItems.length > 0) {
		cartContent = cartItems.map(({ title, quantity, price }) => {
			const total = quantity * price;
			return <CartItem item={{ title, quantity, total, price }} />;
		});
	}
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartItems.length > 0 ? (
					cartContent
				) : (
					<li>There is no Products in your cart!</li>
				)}
			</ul>
		</Card>
	);
};

export default Cart;
