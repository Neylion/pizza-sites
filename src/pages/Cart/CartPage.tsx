import CartModal from '../../components/CartModal/CartModal';
import Pizzas from '../../components/Pizza/Pizzas';
import { useCartContext } from '../../contexts/CartContext';
import brandData from '../../../tempDatabase/brandData';

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
  const { cart, addOrUpdateCartItem } = useCartContext();
  return (
    <div className="bg-secondary-100 h-full w-full pb-4">
      <p className="flex flex-col text-center p-4 border-b-2">Unfortunately we do not take online orders at this time, please phone in your order! Tel: {brandData.phone}</p>
      <table className="mx-auto border-b-2 text-center" style={{ borderSpacing: '1rem 1rem', borderCollapse: 'separate' }}>
        <tr className="text-xs">
          <th>#</th>
          <th>Name</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
        {Object.values(cart.items).map((item, index) => (
          <tr key={`${index}-${item.id}`}>
            <td>{item.number}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <CartModal count={item.count} updateCartEntry={(count: number) => addOrUpdateCartItem(item, count)} />
            </td>
            <td>{item.totalPrice}</td>
          </tr>
        ))}
      </table>
      <h2 className="flex flex-col text-center font-bold pt-4 border-t-2">Total</h2>
      <div className="flex flex-col justify-center text-center">{cart.totalCount} items - {cart.totalPrice}:-</div>
    </div>
  );
};

export default CartPage;
