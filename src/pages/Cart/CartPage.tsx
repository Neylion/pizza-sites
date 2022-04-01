import Pizzas from '../../components/Pizza/Pizzas';
import { useCartContext } from '../../contexts/CartContext';

const CartPage = () => {
  return (
    <>
      <CartSummary />
      <Pizzas searchQuery={null} cartMode />
    </>
  );
};

const CartSummary = () => {
  const { cart } = useCartContext();
  return (
    <div className="my-4">
      <div className="flex flex-col text-white justify-center text-center my-2">{cart.totalCount} - {cart.totalPrice}</div>
      {Object.values(cart.items).map((item, index) => (
        <div key={`${index}-${item.id}`} className="flex flex-col text-white justify-center text-center my-2">{item.count} - {item.name}</div>
      ))}
    </div>
  );
};

export default CartPage;
