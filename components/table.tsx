import { useState } from 'react';
import type { ChangeEventHandler } from 'react';
import type { WeightData, AtomWeigh } from '@/hooks/use-weight';

const round = (num: number) => Math.round(num * 10 ** 6) / 10 ** 6;

export const WeighingTable = ({ data }: { data: WeightData }) => {
  const [p, setP] = useState(1);

  return (
    <table>
      <thead>
        <tr className="border-b-2 border-t border-gray-800">
          <th className="px-4 py-1">Symbol</th>
          <th className="px-4 py-1 ">rate</th>
          <th className="px-4 py-1">g/mol</th>
          <th className="px-4 py-1">g</th>
          <th className="px-4 py-1">calc</th>
        </tr>
      </thead>
      <tbody>
        {data.atoms.map((data) => (
          <Row data={data} {...{ p, setP }} key={data.symbol} />
        ))}
        <tr className="border-t border-gray-800">
          <td className="px-4 py-1" colSpan={2}>
            &nbsp;
          </td>
          <td className="px-4 py-1 text-right">{round(data.tot.gMol)}</td>
          <td className="px-4 py-1 text-right">{round(data.tot.g)}</td>
          <th className="px-8 py-1 text-right">{round(data.tot.g * p)}</th>
        </tr>
      </tbody>
    </table>
  );
};

const Row = ({
  data,
  p,
  setP,
}: {
  data: AtomWeigh;
  p: number;
  setP: (v: number) => void;
}) => {
  const { symbol, rate, gMol, g } = data;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setP(parseFloat(e.target.value) / g);
  };

  return (
    <tr key={symbol}>
      <td className="px-4 py-1 text-center">{symbol}</td>
      <td className="px-4 py-1 text-right">{rate}</td>
      <td className="px-4 py-1 text-right">{round(gMol)}</td>
      <td className="px-4 py-1 text-right">{round(g)}</td>
      <th className="px-2 py-1">
        <input
          className="w-24 px-2 bg-transparent text-right focus:bg-gray-50"
          type="number"
          value={round(p * g)}
          onChange={onChange}
        />
      </th>
    </tr>
  );
};
