'use client'

import React, { useState, useCallback } from 'react';

interface ProductSelectorProps {
  options: string[];
  onSelect: (value: string) => void;
  title?: string;
  subtitle?: string
}


export const ProductSelector: React.FC<ProductSelectorProps> = ({ options, onSelect, title, subtitle }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);


  const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
    onSelect(value); 
  }, [onSelect]);

  return (
    <div>
      <h1 className="font-semibold text-lg text-center mb-2">{title}</h1>
      <p className="text-sm text-gray-700 font-light text-center">
        {subtitle}
      </p>


      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="w-full p-2 border rounded-full focus:outline-none mt-6 font-light text-sm appearance:none"
      >
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
