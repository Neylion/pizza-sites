export interface IPizza {
  id: string,
  number: number,
  name: string,
  ingredients: string[],
  price: number,
  image: string,
}

export interface ICartItem {
  id: string,
  name: string,
  price: number,
}
export interface ICartItemWithCount extends ICartItem {
  totalPrice: number
  count: number
}

export interface ICart {
  totalCount: number,
  totalPrice: number,
  items: {
    [itemId: string]: ICartItemWithCount
  }
}
