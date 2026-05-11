import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix default marker icon issue in Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function Map() {
  return (
    <MapContainer
      center={[20.5937, 78.9629]} // India center
      zoom={5}
      style={{ height: "100vh", width: "100%" }}
      className="Mapcon"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[28.6139, 77.2090]}>
        <Popup>Delhi 🇮🇳</Popup>
      </Marker>
    </MapContainer>
  );
}