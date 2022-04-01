import { useEffect, useState } from 'react';
import { IPizza } from '../../../lib/types';

interface Props extends IPizza {
  count: number,
  updateCartEntry: (newCount: number) => void,
  image: string,
}
const Pizza = ({ image, number, name, ingredients, price, count, updateCartEntry }: Props) => {
  return (
    <div className="flex min-h-48 rounded-xl min-w-[100%] lg:max-w-[50%] lg:min-w-[400px]" style={{ flex: '40%' }}>
      <div className="flex-1 bg-secondary-100 flex justify-center rounded-lg p-4">
        <div className="flex-1 flex flex-col justify-center p-6">
          <h2 className="font-bold">{number}. {name}</h2>
          <div className="">{ingredients.join(', ')}</div>
          <div className="mb-4">{price}:-</div>
          <CartModal count={count} updateCartEntry={updateCartEntry} />
        </div>
        <div className='rounded-full w-[60%] h-full bg-cover shadow-inner-1' style={{ backgroundImage: `url(${image}), url('images/temp-hero.jpeg')` }}></div>
      </div>
    </div>
  );
};

interface CartModalProps {
  count: number,
  updateCartEntry: (newCount: number) => void,
}
const CartModal = ({ count, updateCartEntry }: CartModalProps) => {
  const [inputVal, setInputVal] = useState(count || '');

  useEffect(() => {
    setInputVal(count || '');
  }, [count]);

  const handleInputChange = (value: string) => {
    const newCount = parseInt(value);
    if (!isNaN(newCount)) updateCartEntry(newCount);
    setInputVal(newCount || '');
  };

  return (
    <div className="flex mr-auto bg-secondary-200 rounded-md">
      <div className="flex-1 flex flex-col p-2 justify-center select-none cursor-pointer" onClick={() => updateCartEntry(count-1)}>{' - '}</div>
      <input type="number" placeholder="0" className="flex-1 w-8 text-center" value={inputVal} onChange={(e) => handleInputChange(e.target.value)} onBlur={() => updateCartEntry(parseInt(inputVal.toString()) || 0)} />
      <div className="flex-1 flex flex-col p-2 justify-center select-none cursor-pointer" onClick={() => updateCartEntry(count+1)}>{' + '}</div>
    </div>
  );
};

export default Pizza;
