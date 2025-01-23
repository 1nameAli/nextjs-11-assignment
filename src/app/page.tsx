import React from "react";
import CarList from "../components/carList"; // Adjust the import path

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Car Listings</h1>
      <CarList />
    </div>
  );
}
