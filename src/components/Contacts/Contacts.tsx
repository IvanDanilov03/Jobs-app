import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

//@ts-expect-error
import icon from "leaflet/dist/images/marker-icon.png";
//@ts-expect-error
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

L.Marker.prototype.options.icon = DefaultIcon;

export type ContactsProps = {
  address: string;
  email: string;
  location: {
    lat: number;
    long: number;
  };
  name: string;
  phone: string;
};

const Contacts: React.FC<ContactsProps> = (props) => {
  const { address, email, location, name, phone } = props;

  const { lat, long } = location;

  return (
    <div className="w-full bg-slate-800 rounded-lg overflow-hidden">
      <h1 className="text-slate-100	font-medium	text-base mx-10 pt-5 ">{name}</h1>
      <div className="flex flex-row text-slate-100 mx-10 pt-2">
        <div>
          <svg
            width="13"
            height="18"
            viewBox="0 0 13 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z"
              fill="#878D9D"
            />
          </svg>
        </div>
        <p className="ml-2 text-base font-light">
          <a href={`https://www.google.com/maps/search/?api=1&query=${lat},${long}`} target="_blank">
            {address}
          </a>
        </p>
      </div>
      <p className="text-white text-base opacity-60 font-light mx-10 pt-2">
        <a href={`tel:${phone}"`}>{phone}</a>
      </p>
      <p className="text-white text-base opacity-60 font-light mx-10 pb-5">
        <a href={`mailto:${email}"`}>{email}</a>
      </p>
      <MapContainer
        className="w-full h-44"
        center={[lat, long]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, long]}>
          <Popup>
            {name} <br /> lat={lat} <br /> long={long}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Contacts;
