import React from 'react';
import { ICart, ICartItem, ICartItemWithCount } from '../../lib/types';

export interface ICartContextValue { 
  cart: ICart;
  setCartItems: (items: ICartItemWithCount[]) => void;
}

export const CartContext = React.createContext<ICartContextValue | null>(null);
export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const defaultCart = {
    totalCount: 0,
    totalPrice: 0,
    items: {},
  };
  const [cart, setCart] = React.useState<ICart>(defaultCart);

  const setCartItems = (items: ICartItemWithCount[]) => {
    const newCart: ICart = {
      totalCount: 0,
      totalPrice: 0,
      items: {},
    };
    items.forEach(item => {
      if (item.count <= 0) return;
      newCart.items[item.id] = item;
      newCart.totalCount += item.count;
      newCart.totalPrice += item.totalPrice;
    });
    setCart(newCart);
  };

  return <CartContext.Provider value={{ cart, setCartItems }}>
    {children}
  </CartContext.Provider>;
};

export const useCartContext = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  const { cart, setCartItems } = context;
  
  const addOrUpdateCartItem = (item: ICartItem, count: number) => {
    cart.items[item.id] = { ...item, count, totalPrice: item.price * count };
    setCartItems([...Object.values(cart.items)]);
  };

  const addOneOfCartItem = (item: ICartItem) => {
    const prevCount = cart.items[item.id]?.count || 0;
    addOrUpdateCartItem(item, prevCount + 1);
  };

  const removeOneOfCartItem = (item: ICartItem) => {
    const prevCount = cart.items[item.id]?.count || 0;
    if (prevCount <= 1) {
      removeCartItem(item);
    } else {
      addOrUpdateCartItem(item, prevCount - 1);
    }
  };

  const removeCartItem = (item: ICartItem) => {
    delete cart.items[item.id];
    setCartItems(Object.values(cart.items));
  };

  return { cart, addOrUpdateCartItem, addOneOfCartItem, removeOneOfCartItem, removeCartItem };
};
