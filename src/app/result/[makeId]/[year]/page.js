"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const ResultPage = () => {
  const { makeId, year } = useParams();
  const [vehicleModels, setVehicleModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVehicleModels() {
      try {
        const response = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setVehicleModels(data.Results);
      } catch (error) {
        console.error("Error fetching vehicle models:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    if (makeId && year) {
      fetchVehicleModels();
    }
  }, [makeId, year]);

  if (loading)
    return (
      <div className="flex justify-center w-full h-screen items-center font-bold text-4xl">
        Loading...
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="flex justify-between items-center mb-5 flex-col lg:flex-row md:flex-row">
        <h1 className="text-4xl font-bold text-black">Car models</h1>
        <Link
          href="/"
          className="bg-black font-bold hover:bg-red-500 transition-all p-2 text-center text-white rounded"
        >
          Go Back
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicleModels.length > 0 ? (
          vehicleModels.map((model) => (
            <div
              key={`${model.Model_ID}-${model.Model_Name}`}
              className="p-4 bg-slate-400 border-red-400 rounded shadow"
            >
              <h2 className="text-lg font-semibold">{model.Model_Name}</h2>
            </div>
          ))
        ) : (
          <div>No model found.</div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
