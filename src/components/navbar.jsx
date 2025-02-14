import './navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';// Update the path to your image
import { useState } from 'react';

const Navbar = () => {
    const [location, setLocation] = useState('Choose Your Location');
    const locations = ['Coimbatore', 'Chennai', 'Madurai', 'Salem', 'Theni'];

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <i className="fas fa-map-marker-alt navbar-location-icon"></i>
                    <select value={location} onChange={handleLocationChange} className="navbar-location-dropdown" style={{ marginLeft: '8px' }}>
                        <option disabled>Choose Your Location</option>
                        {locations.map((loc) => (
                            <option key={loc} value={loc}>
                                {loc}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="navbar-buttons">
                    <button className="navbar-button bg-red-600 text-white">For Vehicle Owner</button>
                    <button className="navbar-button bg-white text-black">Login</button>
                    <button className="navbar-button bg-black text-white">Signup</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;