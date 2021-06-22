import { WeightData } from '@/hooks/use-weight';

const round = (num: number) => Math.round(num * 10 ** 6) / 10 ** 6;

export const WeighingTable = ({ data }: { data: WeightData }) => (
  <table>
    <thead>
      <tr className="border-b-2 border-t border-gray-800">
        <th className="px-4 py-1">Symbol</th>
        <th className="px-4 py-1 ">rate</th>
        <th className="px-4 py-1">g/mol</th>
        <th className="px-4 py-1">g</th>
      </tr>
    </thead>
    <tbody>
      {data.atoms.map(({ symbol, rate, gMol, g }) => (
        <tr key={symbol}>
          <td className="px-4 py-1 text-center">{symbol}</td>
          <td className="px-4 py-1 text-right">{rate}</td>
          <td className="px-4 py-1 text-right">{round(gMol)}</td>
          <td className="px-4 py-1 text-right">{round(g)}</td>
        </tr>
      ))}
      <tr className="border-t border-gray-800">
        <td className="px-4 py-1" colSpan={2}>
          &nbsp;
        </td>
        <td className="px-4 py-1 text-right">{round(data.tot.gMol)}</td>
        <td className="px-4 py-1 text-right">{round(data.tot.g)}</td>
      </tr>
    </tbody>
  </table>
);
