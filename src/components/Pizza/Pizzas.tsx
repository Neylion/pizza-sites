import Pizza from '../../components/Pizza/Pizza';
import { pizzas as pizzaValues } from '../../../tempDatabase/PizzaItems';
import { useCartContext } from '../../contexts/CartContext';

interface PizzasProps {
  searchQuery: string | null,
  cartMode?: boolean,
}
const Pizzas = ({ searchQuery, cartMode = false }: PizzasProps) => {
  const { cart, addOrUpdateCartItem } = useCartContext();

  const pizzasMatchingQuery = pizzaValues.filter(({ id, number, name, ingredients }) => {
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

  return (
    <>
      <div className="flex gap-4 flex-wrap mx-auto py-4 w-11/12 md:w-10/12">
        {pizzasMatchingQuery.map((pizza, index) => {
          const cartCount = cart.items[pizza.id]?.count || 0;
          return <Pizza {...pizza} key={index} count={cartCount} updateCartEntry={(count: number) => addOrUpdateCartItem(pizza, count)} />;
        })
        }
      </div>
    </>
  );
};

export default Pizzas;