'use client';

interface Props {
  quantity: number;
  onQuantityChanged: (value: number) => void;
}

export const QuantitySelectorInput = ({ quantity, onQuantityChanged }: Props) => {

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);

    if ( value < 1) return;

    onQuantityChanged(value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
        <h3 className='text font-semibold mb-4'>Cantidad</h3>
      <input
        type="number"
        className="w-20 h-10 border rounded-full focus:outline-none text-center font-light "
        value={quantity}
        onChange={onInputChange}
        min={1} 
      />
    </div>
  );
};
