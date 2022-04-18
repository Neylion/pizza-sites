import Pizzas from '../../components/Pizza/Pizzas';
import { useCartContext } from '../../contexts/CartContext';

const CartPage = () => {
  return (
    <div className="inline-grid grid-cols-1 xl:grid-cols-3 mx-auto py-4 w-11/12 md:w-10/12">
      <div className="col-span-1 w-full pb-1 xl:pr-1">
        <CartSummary />
      </div>
      <div className="col-span-2 w-full">
        <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-[0.2rem] mx-auto w-full">
          <Pizzas searchQuery={null} cartMode />
        </div>
      </div>
    </div>
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
