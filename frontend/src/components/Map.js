import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Helper function to calculate distance between two coordinates (Haversine formula)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
};

const Map = () => {
    const [myLocation, setMyLocation] = useState(null);
    const [clinics, setClinics] = useState([]);
    const [nearestClinics, setNearestClinics] = useState([]);
    const [nearestClinic, setNearestClinic] = useState(null);
    const [showMyLocation, setShowMyLocation] = useState(false);
    const mapRef = useRef();

    const blueIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    const redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    useEffect(() => {
        // Fetch clinics data from the API
        const fetchClinics = async () => {
            try {
                const response = await fetch('https://azure-dream-catcher.azurewebsites.net/api/clinics-data');
                if (!response.ok) {
                    throw new Error('Failed to fetch clinics data.');
                }
                const data = await response.json();
                setClinics(data);
            } catch (error) {
                console.error('Error fetching clinics data:', error);
            }
        };

        fetchClinics();
    }, []);

    const handleGetMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const newLocation = [position.coords.latitude, position.coords.longitude];
                    setMyLocation(newLocation);
                    setShowMyLocation(true);
                    mapRef.current.setView(newLocation, 13);

                    // Find nearest clinics
                    const distances = clinics.map((clinic) => ({
                        ...clinic,
                        distance: calculateDistance(
                            newLocation[0],
                            newLocation[1],
                            clinic.Latitude,
                            clinic.Longitude
                        ),
                    }));

                    // Sort by distance and take the top 5
                    const sortedClinics = distances.sort((a, b) => a.distance - b.distance).slice(0, 5);
                    setNearestClinics(sortedClinics);
                    setNearestClinic(sortedClinics[0]);  // Set the closest clinic
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    };

    const handleViewNearestClinic = () => {
        if (nearestClinic) {
            mapRef.current.setView([nearestClinic.Latitude, nearestClinic.Longitude], 13);
        }
    };

    return (
<div id="map"className="flex flex-col md:flex-row p-6 shadow-lg bg-[#bce3f3] rounded-lg">
    
    <div
        className="md:w-1/3 p-4 shadow-md flex flex-col justify-center items-center"
        style={{
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "15px", 
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", 
        }}
    >
        <h2 className="text-3xl font-semibold text-black mb-4 text-center">Interactive Map Features</h2>
        <p className="text-gray-800 text-center">
            Use this interactive map to find nearby sleep clinics and somnologists. 
            By clicking on "Get My Location," the map will locate you and display clinics within your vicinity.
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-800">
            <li>View your current location marked with a blue icon.</li>
            <li>Red markers indicate nearby clinics with details like address, distance, and contact information.</li>
            <li>Click "View Nearest Clinic" to highlight the closest clinic on the map.</li>
        </ul>
        <p className="text-gray-800 mt-4 text-center">
            The map provides an easy way to connect with healthcare professionals near you, ensuring a better understanding of your sleep needs.
        </p>
    </div>

    
    <div className="md:w-2/3 mt-6 md:mt-0 md:ml-6">
        
        <div className="map-container bg-white rounded-lg overflow-hidden" style={{ height: '600px' }}>
            <MapContainer
                ref={mapRef}
                style={{ height: '100%', width: '100%' }}
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {showMyLocation && myLocation && (
                    <Marker position={myLocation} icon={blueIcon}>
                        <Popup>Your Location</Popup>
                    </Marker>
                )}
                {nearestClinics.map((clinic, index) => (
                    <Marker
                        key={index}
                        position={[clinic.Latitude, clinic.Longitude]}
                        icon={redIcon}
                    >
                        <Popup>
                            <strong>{clinic['Clinic Name']}</strong>
                            <br />
                            Distance: {clinic.distance.toFixed(2)} km
                            <br />
                            Address: {clinic.Address}
                            <br />
                            Contact: {clinic['Contact Number']}
                            <br />
                            Somnologist: {clinic['Somnologist Name']}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>

        {/* Buttons Below the Map */}
        <div className="flex justify-center space-x-4 mt-4">
            <button
                className="p-3 bg-black text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-200"
                onClick={handleGetMyLocation}
            >
                Get My Location
            </button>
            <button
                className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
                onClick={handleViewNearestClinic}
                disabled={!nearestClinic}
            >
                View Nearest Clinic
            </button>
        </div>
    </div>
</div>

    );
};

export default Map;
