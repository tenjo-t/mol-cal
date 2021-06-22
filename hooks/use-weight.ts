import { parse, calcWeight } from '@/utils/molcal';

type AtomWeighList = AtomWeigh[];

type AtomWeigh = {
  symbol: string;
  rate: number;
  gMol: number;
  g: number;
};

type TotalWeight = {
  gMol: number;
  g: number;
};

export type WeightData = {
  atoms: AtomWeighList;
  tot: TotalWeight;
};

export const useWeight = (formula: string, gram: number): WeightData => {
  let result: AtomWeighList = [];

  const atomRates = parse(formula);
  const totGMol = calcWeight(atomRates);
  for (const symbol in atomRates) {
    const rate = atomRates[symbol];
    const gMol = calcWeight({ [symbol]: rate });
    result.push({ symbol, rate, gMol, g: (gMol / totGMol) * gram });
  }

  const totG = result.reduce((acc, cur) => acc + cur.g, 0);

  return {
    atoms: result,
    tot: {
      gMol: totGMol,
      g: totG,
    },
  };
};
