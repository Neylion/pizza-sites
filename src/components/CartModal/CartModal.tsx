import { useEffect, useState } from 'react';

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
    <div className="inline-flex mr-auto bg-secondary-200 rounded-md">
      <div className="flex-1 flex flex-col px-2 py-1 justify-center select-none cursor-pointer" onClick={() => updateCartEntry(count-1)}>{'-'}</div>
      <input type="number" placeholder="0" className="flex-1 w-7 text-center" value={inputVal} onChange={(e) => handleInputChange(e.target.value)} onBlur={() => updateCartEntry(parseInt(inputVal.toString()) || 0)} />
      <div className="flex-1 flex flex-col px-2 py-1 justify-center select-none cursor-pointer" onClick={() => updateCartEntry(count+1)}>{'+'}</div>
    </div>
  );
};

export default CartModal;
