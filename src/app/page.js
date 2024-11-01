"use client"; 

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FilterPage() {
  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState(localStorage.getItem('selectedMake') || '');
  const [selectedYear, setSelectedYear] = useState(localStorage.getItem('selectedYear') || '');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    async function fetchMakes() {
      try {
        const response = await fetch(
          'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
        );
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setVehicleMakes(data.Results);
        console.log(data);
        
      } catch (error) {
        console.error('Error fetching vehicle makes:', error);
      }
    }
    fetchMakes();
  }, []);

  const handleMakeChange = (e) => {
    const make = e.target.value;
    setSelectedMake(make);
    localStorage.setItem('selectedMake', make);
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    localStorage.setItem('selectedYear', year);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-5 text-black">Find your dream car!</h1>
      <div className="flex flex-col space-y-4 lg:w-1/2 xl:w-1/2 sm:w-full md:w-1/2 w-full">
        <select
          className="p-2 rounded text-black border-red-500 border-2 sm:w-full"
          value={selectedMake}
          onChange={handleMakeChange}
          aria-label="Choose brand"
        >
          <option value="">Choose brand</option>
          {vehicleMakes.map((make) => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>

        <select
          className="p-2 rounded text-black border-red-500 border-2"
          value={selectedYear}
          onChange={handleYearChange}
          aria-label="Choose year"
        >
          <option value="">Choose year</option>
          {[...Array(currentYear - 2014).keys()].map((i) => {
            const year = currentYear - i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>

        <Link
          href={selectedMake && selectedYear ? `/result/${selectedMake}/${selectedYear}` : '#'}
          className={`p-2 text-center text-white rounded ${
            selectedMake && selectedYear ? 'bg-black text-white font-bold hover:bg-red-500 transition-all' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Check results
        </Link>
      </div>
    </div>
  );
}