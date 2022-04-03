import { useState } from 'react';
import Pizzas from '../../components/Pizza/Pizzas';
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
  return (
    <div className="flex relative justify-center border-b-2">
      <div className="absolute bottom-0 mx-auto flex gap-1">
        {Object.values(tabs).map((tab, index) => {
          return (
            <ActionButton 
              key={index}
              active={tab.id === activeTab.id}
              onClick={() => setActiveTab(tab)}
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
}
const ActionButton = ({ active, children, onClick }: ActionButtonProps) => {
  return <div 
    className={`flex cursor-pointer h-8 justify-center items-center p-4 rounded-t-lg ${active ? 'bg-main-200' : 'bg-main-400'}`}
    onClick={onClick}
  >
    {children}
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
      return <Pizzas searchQuery={searchQuery} />;
  }
};

export default MainPage;
