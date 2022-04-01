const pizzaProps = [
  { id: '1', number: 1, name: 'Margherita', ingredients: ['Tomat', 'Ost'], price: 95 },
  { id: '2', number: 2, name: 'Vesuvio', ingredients: ['Skinka'], price: 95 },
  { id: '3', number: 3, name: 'Funghi', ingredients: ['Färsk Champinjoner'], price: 95 },
  { id: '4', number: 4, name: 'Capricciosa', ingredients: ['Skinka', 'Färsk Champinjoner'], price: 95 },
  { id: '5', number: 5, name: 'Hawaii', ingredients: ['Skinka', 'ananas'], price: 95 },
  { id: '6', number: 6, name: 'Calzone', ingredients: ['Inbakad', 'Skinka'], price: 95 },
  { id: '7', number: 7, name: 'Al tono', ingredients: ['Tonfisk', 'Oliver', 'lök'], price: 95 },
  { id: '8', number: 8, name: 'Napolitana', ingredients: ['Sardeller', 'Oliver', 'Kapris'], price: 95 },
  { id: '9', number: 9, name: 'Bolognese', ingredients: ['Köttfärs', 'Lök'], price: 95 },
  { id: '10', number: 10, name: 'Bussola', ingredients: ['Skinka', 'Räkor'], price: 95 },
  { id: '11', number: 11, name: 'Marinara ', ingredients: ['Räkor', 'Musslor', 'Vitlök'], price: 95 },
  { id: '12', number: 12, name: 'Banana', ingredients: ['Skinka', 'Ananas', 'Banan', 'Curry'], price: 95 },
  { id: '13', number: 13, name: 'Primavera', ingredients: ['Bacon', 'Ägg', 'Lök'], price: 95 },
  { id: '14', number: 14, name: 'Italiana', ingredients: ['Färsk Champinjoner', 'Räkor', 'Tomat', 'Vitlök'], price: 95 },
  { id: '15', number: 15, name: 'Zaza special ', ingredients: ['Salami', 'Tomater', 'Oliver'], price: 95 },
  { id: '16', number: 16, name: 'Mafioso', ingredients: ['Stark salami', 'Lök', 'Tomater', 'Cayennepeppar'], price: 95 },
  { id: '17', number: 17, name: 'Di polio', ingredients: ['Kyckling', 'Banan', 'Jordnötter', 'Curry'], price: 95 },
  { id: '18', number: 18, name: 'Calzone special', ingredients: ['Inbakad', 'Skinka', 'Räkor', 'Färsk Champinjoner'], price: 95 },
  { id: '19', number: 19, name: 'Fläskfilépizza', ingredients: ['Fläskfilé', 'Färsk Champinjoner', 'Lök', 'Tomat', 'Bearnaises'], price: 95 },
  { id: '20', number: 20, name: 'Kebabpizza', ingredients: ['Kebabkött', 'Lök', 'Fefferoni', 'Tomat', 'Vitlökssås', 'Stark sås'], price: 95 },
  { id: '21', number: 21, name: 'Gorgonzola', ingredients: ['Fläskfilé', 'Färsk Champinjoner', 'Gorgonzola'], price: 95 },
  { id: '22', number: 22, name: 'Djurgården', ingredients: ['Pepperonikorv', 'Tomat', 'Paprika', 'Lök'], price: 95 },
  { id: '23', number: 23, name: 'Opera', ingredients: ['Skinka', 'Tonfisk'], price: 95 },
  { id: '24', number: 24, name: 'Formaggi', ingredients: ['Gorgonzola', 'Chévreost', 'Mozzarella', 'Parmesanost'], price: 95 },
  { id: '25', number: 25, name: 'Tefat', ingredients: ['Dubbelinbakad', 'Skinka', 'Räkor', 'Färsk Champinjoner'], price: 95 },
];

export const pizzas = pizzaProps.map((pizza) => {
  const image = `/tempDatabase/pizzaImages/${pizza.number}.jpeg`;
  return { image, ...pizza };
});
