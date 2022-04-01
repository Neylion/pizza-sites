export interface ITab {
  id: string,
  label: string,
  searchEnabled: boolean,
}

export const tabs = {
  menu: {
    id: 'menu',
    label: 'Meny',
    searchEnabled: true,
  },
  cart: {
    id: 'cart',
    label: 'Kundvagn',
    searchEnabled: false,
  },
  map: {
    id: 'map',
    label: 'Hitta hit',
    searchEnabled: false,
  },
  about: {
    id: 'about',
    label: 'Om oss',
    searchEnabled: false,
  },
};
