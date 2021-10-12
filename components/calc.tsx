import { useState } from 'react';
import { Textbox } from '@/components/textbox';
import { WeighingTable } from '@/components/table';
import { useHistory } from '@/components/history';
import { useWeight } from '@/hooks/use-weight';

export const Calc = () => {
  const [f, setF] = useState('Ag50Ga34Yb16');
  const [g, setG] = useState(1);
  const weight = useWeight(f, g);
  const { key, value, setValue } = useHistory();
  const saveData = () => {
    const newValue = [...value, weight];
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return (
    <>
      <div className="space-y-2">
        <Textbox value={f} onChange={(e) => setF(e.target.value)}>
          分子式
        </Textbox>
        <Textbox
          value={g}
          onChange={(e) => setG(parseFloat(e.target.value))}
          type="number"
        >
          合計量（g）
        </Textbox>
      </div>
      <div>
        <WeighingTable data={weight} />
        <button
          className="inline-block text-white font-bold bg-blue-500 px-4 py-1 rounded-full active:bg-blue-600"
          onClick={saveData}
        >
          Save data
        </button>
      </div>
    </>
  );
};
