import { Size } from '@/interface';

interface Props {
  selectedSize?: Size;
  availableSizes: Size[];
  onSizeChanged: (size: Size) => void;
}

export const SizeSelector = ({ selectedSize, availableSizes, onSizeChanged }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-semibold mb-4">Selecciona un producto</h3>

      <div className="flex">
        <select
          value={selectedSize}
          onChange={(e) => onSizeChanged(e.target.value as Size)}
          className="text-sm p-2 border border-gray-300 rounded-3xl pl-6"
        >
          <option value="" disabled>Selecciona una talla</option>
          {availableSizes.map(size => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
