import { useState } from 'react';

import { Textbox } from '@/components/textbox';
import { WeighingTable } from '@/components/table';
import { useWeight } from '@/hooks/use-weight';

const Calc = () => {
  const [f, setF] = useState('Ag50Ga34Yb16');
  const [g, setG] = useState(1);
  const weight = useWeight(f, g);

  return (
    <div>
      <div className="py-2">
        <Textbox value={f} onChange={(e) => setF(e.target.value)}>
          分子式
        </Textbox>
      </div>
      <div className="py-2">
        <Textbox
          value={g}
          onChange={(e) => setG(parseFloat(e.target.value))}
          type="number"
        >
          合計量（g）
        </Textbox>
      </div>
      <div className="py-4">
        <WeighingTable data={weight} />
      </div>
    </div>
  );
};

export default Calc;
