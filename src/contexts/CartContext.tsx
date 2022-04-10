import React from 'react';
import { ICart, IMenuItem, ICartItem } from '../../lib/types';

export interface ICartContextValue { 
  cart: ICart;
  setCartItems: (items: ICartItem[]) => void;
}

export const CartContext = React.createContext<ICartContextValue | null>(null);
export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const defaultCart = {
    totalCount: 0,
    totalPrice: 0,
    items: {},
  };
  const storedCart = localStorage.getItem('cart');
  const [cart, setCart] = React.useState<ICart>(storedCart ? JSON.parse(storedCart) : defaultCart);

  const setCartItems = (items: ICartItem[]) => {
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
    localStorage.setItem('cart', JSON.stringify(newCart));
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
  
  const addOrUpdateCartItem = (item: IMenuItem, count: number) => {
    cart.items[item.id] = { ...item, count, totalPrice: item.price * count };
    setCartItems([...Object.values(cart.items)]);
  };

  const addOneOfCartItem = (item: IMenuItem) => {
    const prevCount = cart.items[item.id]?.count || 0;
    addOrUpdateCartItem(item, prevCount + 1);
  };

  const removeOneOfCartItem = (item: IMenuItem) => {
    const prevCount = cart.items[item.id]?.count || 0;
    if (prevCount <= 1) {
      removeCartItem(item);
    } else {
      addOrUpdateCartItem(item, prevCount - 1);
    }
  };

  const removeCartItem = (item: IMenuItem) => {
    delete cart.items[item.id];
    setCartItems(Object.values(cart.items));
  };

  return { cart, addOrUpdateCartItem, addOneOfCartItem, removeOneOfCartItem, removeCartItem };
};
