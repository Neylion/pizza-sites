import { useEffect, useRef } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

interface MapApiWrapperProps {
  children: JSX.Element;
}
const MapApiWrapper = ({ children }: MapApiWrapperProps) => 
  <Wrapper apiKey={import.meta.env.VITE_MAP_API_KEY?.toString() || ''} render={render}>{children}</Wrapper>;

interface MapComponentProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
  className: string;
}
const MapComponent = ({ center, zoom, className }: MapComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" className={className}/>;
};

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
  className: string;
}
const Map = ({ center, zoom, className }: MapProps) => {
  return (
    <MapApiWrapper>
      <MapComponent className={className} center={center} zoom={zoom} />
    </MapApiWrapper>
  );
};

export default Map;
