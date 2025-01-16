"use client";
import { useState } from "react";
import ProductSidebar from '@/app/components/ProductpageComponents/productsidebar/page';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import L from 'leaflet';

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const locationsData = [
  { id: 1, name: "Location A", description: "Description for Location A", lat: 37.7749, lng: -122.4194 },
  { id: 2, name: "Location B", description: "Description for Location B", lat: 34.0522, lng: -118.2437 },
  { id: 3, name: "Location C", description: "Description for Location C", lat: 40.7128, lng: -74.0060 },
  { id: 4, name: "Location D", description: "Description for Location D", lat: 47.6062, lng: -122.3321 },
  { id: 5, name: "Location E", description: "Description for Location E", lat: 51.5074, lng: -0.1278 },
  { id: 6, name: "Location F", description: "Description for Location F", lat: 48.8566, lng: 2.3522 },
  { id: 7, name: "Location G", description: "Description for Location G", lat: 35.6895, lng: 139.6917 },
];

const LocationCard = ({ name, description, lat, lng, onClick }) => (
  <div 
    className="min-w-[200px] border border-gray-100 rounded-lg overflow-hidden shadow-lg p-4 space-y-2 cursor-pointer" 
    onClick={() => onClick({ lat, lng })}
  >
    <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

const MapComponent = ({ center, zoom }) => {
  const map = useMap();
  map.flyTo(center, zoom);
  return null;
};

// Create a custom icon with react-icons
const createCustomIcon = () => {
  return L.divIcon({
    html: `<div style="color: red; font-size: 24px;">${FaMapMarkerAlt({})}</div>`,
    iconSize: [24, 24],
    className: "custom-marker-icon",
  });
};

const MapPage = () => {
  const [selectedLocation, setSelectedLocation] = useState({ lat: 37.7749, lng: -122.4194 });
  const [zoomLevel, setZoomLevel] = useState(13);

  const handleLocationClick = (coords) => {
    setSelectedLocation(coords);
    setZoomLevel(15);
  };

  return (
    <div className="flex">
      <ProductSidebar />
      <div className="flex-1 max-w-7xl mx-auto px-4 py-10 space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Project Locations</h2>
        
        <div className="flex overflow-x-auto space-x-4 mb-6 px-2 scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-100">
          {locationsData.map((location) => (
            <LocationCard 
              key={location.id} 
              {...location} 
              onClick={handleLocationClick} 
            />
          ))}
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
          <MapContainer center={selectedLocation} zoom={zoomLevel} style={mapContainerStyle} scrollWheelZoom={true}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapComponent center={selectedLocation} zoom={zoomLevel} />

            <Marker position={selectedLocation} icon={createCustomIcon()}>
              <Popup>{`Selected Location: ${selectedLocation.lat}, ${selectedLocation.lng}`}</Popup>
            </Marker>

            {locationsData.map((location) => (
              <Marker 
                key={location.id} 
                position={{ lat: location.lat, lng: location.lng }} 
                icon={createCustomIcon()}
              >
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
