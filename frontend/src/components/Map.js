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
                const response = await fetch('http://127.0.0.1:5000/api/clinics-data');
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
        <div className="container p-4 shadow" style={{ maxWidth: '800px', margin: '0 auto' }}>
           <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Find nearest somnologists</h2>
            <div className="map-container bg-white rounded-lg overflow-hidden" style={{ width: '100%', height: '600px', margin: '0 auto' }}>
                <div className="get-my-location">
                    <button
                        className="p-3 bg-black w-full mt-5 text-white rounded-lg"
                        style={{ marginBottom: '20px' }}
                        onClick={handleGetMyLocation}
                    >
                        Get My Location
                    </button>
                    <button
                        className="p-3 bg-blue-500 w-full text-white rounded-lg"
                        style={{ marginBottom: '20px' }}
                        onClick={handleViewNearestClinic}
                        disabled={!nearestClinic}
                    >
                        View Nearest Clinic
                    </button>
                </div>
                <MapContainer ref={mapRef} style={{ height: '100%', width: '100%' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
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
        </div>
    );
};

export default Map;
