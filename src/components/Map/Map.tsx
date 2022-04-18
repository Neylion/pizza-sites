import { useEffect, useRef } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import brandData from '../../../tempDatabase/brandData';

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
    const map = new window.google.maps.Map(ref.current, {
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] }],
      center,
      zoom,
    });

    new google.maps.Marker({
      position: center,
      icon: {
        url: 'https://mt.googleapis.com/vt/icon/name=icons/spotlight/spotlight-poi.png&scale=1',
      },
      map,
      label: {
        text: brandData.name, 
        className: 'mb-20 font-bold bg-secondary-200 bg-opacity-60 rounded-lg p-1',
      },
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
