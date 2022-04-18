import { useState } from 'react';
import Pizzas from '../../components/Pizza/Pizzas';
import { useCartContext } from '../../contexts/CartContext';
import { tabs, ITab } from '../../utils/constants';
import AboutPage from '../About/AboutPage';
import CartPage from '../Cart/CartPage';
import MapPage from '../Map/MapPage';
import Hero from './Hero';

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState<string|null>('');
  const [activeTab, setActiveTab] = useState(tabs.menu);
  return (
    <div className="flex flex-col h-full w-full bg-main-800 overflow-scroll">
      <Hero setSearchQuery={setSearchQuery} searchQuery={searchQuery} searchEnabled={activeTab.searchEnabled} />
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col h-full items-center">
        <ActiveTab tab={activeTab} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

interface NavBarProps {
  activeTab: ITab;
  setActiveTab: (tab: ITab) => void
}
const NavBar = ({ activeTab, setActiveTab }: NavBarProps) => {
  const { cart } = useCartContext();
  return (
    <div className="flex relative justify-center border-b-4 border-secondary-100">
      <div className="absolute bottom-0 mx-auto flex gap-1">
        {Object.values(tabs).map((tab, index) => {
          return (
            <ActionButton 
              key={index}
              active={tab.id === activeTab.id}
              onClick={() => setActiveTab(tab)}
              notificationNum={(tab.id === tabs.cart.id && cart.totalCount) || null}
            >
              {tab.label}
            </ActionButton>
          );
        })}
      </div>
    </div>
  );
};

interface ActionButtonProps {
  active: boolean,
  children: any,
  onClick: (event: any) => void
  notificationNum: number | null,
}
const ActionButton = ({ active, children, onClick, notificationNum = null }: ActionButtonProps) => {
  return <div 
    className={`flex relative cursor-pointer h-8 justify-center items-center p-4 rounded-t-lg ${active ? 'bg-secondary-100' : 'bg-secondary-200'}`}
    onClick={onClick}
  >
    {children}
    {notificationNum && 
    <div className="flex absolute -top-1 -right-1 bg-secondary-100 rounded-xl w-5 h-5 justify-center items-center font-bold text-sm">
      {notificationNum}
    </div>}
  </div>;
};
interface ActiveTabProps {
  tab: ITab,
  searchQuery: string | null
} 

const ActiveTab = ({ tab, searchQuery }: ActiveTabProps) => {
  switch (tab.id) {
    case tabs.about.id:
      return <AboutPage />;
    case tabs.map.id:
      return <MapPage />;
    case tabs.cart.id: 
      return <CartPage />;
    case tabs.menu.id: 
    default: 
      return ( 
        <div className="inline-grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[0.2rem] mx-auto py-4 w-11/12 md:w-10/12">
          <Pizzas searchQuery={searchQuery} />;
        </div>);
  }
};

export default MainPage;
