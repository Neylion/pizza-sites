import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
type SetSearchQueryCallback = (searchQuery: string | null) => void;

interface HeroProps {
  setSearchQuery: SetSearchQueryCallback;
  searchEnabled: boolean;
  searchQuery: string | null;
}
const Hero = ({ setSearchQuery, searchEnabled, searchQuery }: HeroProps) => {
  return (
    <div className="flex flex-col bg-pizza-hero bg-cover">
      <div className="flex-1 flex flex-col items-center justify-center h-full w-full bg-black/[.5]">
        <div className="flex-1 flex flex-col items-center justify-center h-full w-full">
          <span className="text-white my-2 md:my-8 text-xl md:text-4xl font-bold">
            Mois' Pizzeria
          </span>
          <div className="w-10/12 md:w-8/12">
            <Search setSearchQuery={setSearchQuery} searchEnabled={searchEnabled} searchQuery={searchQuery}/>
          </div>
          <span className="text-white mt-2 md:mt-4 text-l md:text-xl mb-10">
            Tel: 08-123 12 12
          </span>
        </div>
      </div>
    </div>
  );
};

interface SearchProps {
  setSearchQuery: SetSearchQueryCallback;
  searchEnabled: boolean;
  searchQuery: string | null;
}
const Search = ({ setSearchQuery, searchEnabled, searchQuery }: SearchProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSearchClear = () => {
    setSearchQuery(null);
    if (!ref?.current) return;
    ref?.current?.focus();
  };

  return (
    <div
      className={'flex bg-secondary-100 w-full h-full rounded-md md:rounded-2xl items-center text-black md:text-2xl transition-opacity'}
      style={{ 
        opacity: searchEnabled ? '0.9' : '0',
      }}
    >
      <FontAwesomeIcon icon={faSearch} className="mx-2 md:mx-4 text-main-700"/>
      <input 
        ref={ref}
        className="flex-1 outline-none bg-transparent text-main-800 placeholder-main-400 py-2 md:py-4"
        type="text"
        value={searchQuery || ''}
        disabled={!searchEnabled}
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <FontAwesomeIcon icon={faClose} className="mx-2 md:mx-6 text-main-700" onClick={handleSearchClear}/>
    </div>
  );
};

export default Hero;
