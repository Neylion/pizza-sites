import Map from '../../components/Map/Map';

const MapPage = () => {
  const center = { lat: 59.2750537, lng: 18.0491273 };
  const zoom = 18;

  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <div className="self-center w-11/12 md:w-8/12 h-5/6 md:h-5/6 rounded-lg bg-main-400">
        <Map className="w-full h-full rounded-lg" center={center} zoom={zoom} />
      </div>
    </div>
  );
};

export default MapPage;
