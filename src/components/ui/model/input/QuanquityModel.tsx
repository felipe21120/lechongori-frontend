'use client'

import { useState } from "react";

interface QuantityInputProps {
    onQuantityChange: (quantity: number) => void;
    title: string;
    subtitle: string;
}

export const QuantityInput: React.FC<QuantityInputProps> = ({ onQuantityChange, title, subtitle }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        setQuantity(value);
        onQuantityChange(value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="font-semibold text-lg text-center mb-2">{title}</h1>
          <p className="text-sm text-gray-700 font-light text-center mb-4">
            {subtitle}
          </p>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-20 h-10 border rounded-full focus:outline-none text-center font-light"
            min={1}
          />
        </div>
      );
};