import { IMenuItem } from '../../../lib/types';
import CartModal from '../CartModal/CartModal';

interface Props extends IMenuItem {
  count: number,
  updateCartEntry: (newCount: number) => void,
  image: string,
}
const MenuItem = ({ image, number, name, ingredients, price, count, updateCartEntry }: Props) => {
  return (
    <div className="flex min-h-48 rounded-xl min-w-[100%] lg:max-w-[50%] lg:min-w-[400px]" style={{ flex: '40%' }}>
      <div className="flex-1 bg-secondary-100 flex justify-center rounded-lg p-4">
        <div className="flex-1 flex flex-col justify-center p-6">
          <h2 className="font-bold">{number}. {name}</h2>
          <div className="">{ingredients.join(', ')}</div>
          <div className="mb-4">{price}:-</div>
          <CartModal count={count} updateCartEntry={updateCartEntry} />
        </div>
        <div className="rounded-full w-[60%] h-full bg-cover shadow-inner-1" style={{ backgroundImage: `url(${image}), url('images/temp-hero.jpeg')` }}></div>
      </div>
    </div>
  );
};

export default MenuItem;
