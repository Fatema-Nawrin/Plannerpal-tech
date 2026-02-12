import { useState } from 'react';
import { fetchCarById } from './services/api';
import './App.css';

function App() {
  // example id - note abc-def-[001 -> 020] eg - "abc-def-001", "abc-def-002" etc 
  const [carId, setCarId] = useState('');
  const [car, setCar] = useState(null);

  const handleSearch = async () => {
    // TODO: Call fetchCarById with the carId and update the state accordingly.
  };

  return (
    <div className="app">
      <h1>Car Finder</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Enter a car ID (e.g. abc-def-001)"
          value={carId}
          onChange={(e) => setCarId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* TODO: Handle the different states below — loading, error, and displaying the car */}
    </div>
  );
}

export default App;
