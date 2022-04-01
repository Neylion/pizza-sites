type SetSearchQueryCallback = (searchQuery: string) => void;

interface HeroProps {
  setSearchQuery: SetSearchQueryCallback;
  searchEnabled: boolean;
}
const Hero = ({ setSearchQuery, searchEnabled }: HeroProps) => {
  return (
    <div className="min-h-[30%] flex flex-col bg-pizza-hero bg-cover">
      <div className="flex-1 flex flex-col items-center justify-center h-full w-full bg-black/[.5]">
        <div className="flex-1 flex flex-col items-center justify-center h-full w-full">
          <span className="text-white my-2 md:my-8 text-xl md:text-4xl font-bold">
            Zaza's Pizzeria
          </span>
          <div className="w-10/12 md:w-8/12">
            <Search setSearchQuery={setSearchQuery} searchEnabled={searchEnabled}/>
          </div>
          <span className="text-white my-2 md:my-4 text-l md:text-xl">
            Tel: 08-749 05 26
          </span>
        </div>
      </div>
    </div>
  );
};

interface SearchProps {
  setSearchQuery: SetSearchQueryCallback;
  searchEnabled: boolean;
}
const Search = ({ setSearchQuery, searchEnabled }: SearchProps) => {
  return (
    <input 
      className={'bg-secondary-100 w-full h-full rounded-2xl items-center text-black md:text-2xl p-2 md:p-4'}
      style={{ opacity: searchEnabled ? '95' : '0' }}
      placeholder='Search...'
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default Hero;
