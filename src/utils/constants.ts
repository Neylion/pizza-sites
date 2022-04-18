export interface ITab {
  id: string,
  label: string,
  searchEnabled: boolean,
}

export const tabs = {
  menu: {
    id: 'menu',
    label: 'Menu',
    searchEnabled: true,
  },
  cart: {
    id: 'cart',
    label: 'Cart',
    searchEnabled: false,
  },
  map: {
    id: 'map',
    label: 'Find us',
    searchEnabled: false,
  },
  about: {
    id: 'about',
    label: 'About',
    searchEnabled: false,
  },
};
