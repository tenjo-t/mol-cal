import { useState } from 'react';
import Link from 'next/link';

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
      <div className="pt-16">
        <Link href="/quasicrystal">
          <a>準結晶</a>
        </Link>
      </div>
    </div>
  );
};

export default Calc;