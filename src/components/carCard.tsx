import React from "react";

export default function CarCard({ carImage, carName, carPrice, carReviews }:any) {
  return (
    <div className="border rounded-lg shadow-md p-4 text-center">
      <img
        src={carImage}
        alt={carName}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <h2 className="text-xl font-bold mt-4">{carName}</h2>
      <p className="text-gray-600">{carPrice}</p>
      <p className="text-gray-500">{carReviews}</p>
    </div>
  );
}
