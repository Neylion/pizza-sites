export interface IMenuItem {
  id: string,
  number: number,
  name: string,
  ingredients: string[],
  price: number,
  image: string,
}

export interface ICartItem extends IMenuItem {
  totalPrice: number
  count: number
}

export interface ICart {
  totalCount: number,
  totalPrice: number,
  items: {
    [itemId: string]: ICartItem
  }
}
