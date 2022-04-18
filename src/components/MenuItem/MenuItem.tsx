import { IMenuItem } from '../../../lib/types';
import CartModal from '../CartModal/CartModal';

interface Props extends IMenuItem {
  count: number,
  updateCartEntry: (newCount: number) => void,
  image: string,
}
const MenuItem = ({ image, number, name, ingredients, price, count, updateCartEntry }: Props) => {
  return (
    <div className="flex flex-1 bg-secondary-100 justify-center p-2 md:p-4">
      <div className="w-[20%] h-full">
        <div className="flex flex-col h-full justify-center align-middle">
          <div className="rounded-full aspect-square bg-cover shadow-inner-1" style={{ backgroundImage: `url(${image}), url('images/temp-hero.jpeg')` }}></div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center pl-6">
        <div className="flex items-center gap-2 pb-2 mb-2 border-b-[1px] border-secondary-50">
          <h2 className="flex-1 float-left font-bold">{number}. {name}</h2>
          <div className="ml-auto">
            <span className="text-m mr-2">{price}:-</span>
            <CartModal count={count} updateCartEntry={updateCartEntry} />
          </div>
        </div>
        <div className="">{ingredients.join(', ')}</div>
      </div>
    </div>
  );
};

export default MenuItem;
