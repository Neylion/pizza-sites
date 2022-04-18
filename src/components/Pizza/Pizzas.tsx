import { pizzas as pizzaValues } from '../../../tempDatabase/PizzaItems';
import { useCartContext } from '../../contexts/CartContext';
import { ICart, IMenuItem } from '../../../lib/types';
import MenuItem from '../MenuItem/MenuItem';

interface PizzasProps {
  searchQuery: string | null,
  cartMode?: boolean,
}
const Pizzas = ({ searchQuery, cartMode = false }: PizzasProps) => {
  const { cart, addOrUpdateCartItem } = useCartContext();
  
  const pizzasMatchingQuery = getPizzasMatchingFilter(pizzaValues, cartMode, cart, searchQuery);

  return (
    <>
      {pizzasMatchingQuery.map((pizza, index) => {
        const cartCount = cart.items[pizza.id]?.count || 0;
        return <MenuItem {...pizza} key={index} count={cartCount} updateCartEntry={(count: number) => addOrUpdateCartItem(pizza, count)} />;
      })
      }
    </>
  );
};

const getPizzasMatchingFilter = (pizzas: IMenuItem[], cartMode = false, cart: ICart, searchQuery: string | null) => {
  return pizzas.filter(({ id, number, name, ingredients }) => {
    if (cartMode && !cart.items[id]) return false;
    if (!searchQuery) return true;

    const searchWords = searchQuery.split(' ');
    return searchWords.every(word => {
      if (number.toString().includes(word)) return true;
      
      const numberContainsWord = number.toString().includes(word);
      if (parseInt(word) && !numberContainsWord) return false;
      const nameContainsWord = name.toLowerCase().includes(word.toLowerCase());
      const ingredientContainsWord = ingredients.some(ingredient => ingredient.toLocaleLowerCase().includes(word.toLocaleLowerCase()));
      return numberContainsWord || nameContainsWord || ingredientContainsWord;
    });
  });
};

export default Pizzas;
