import { atoms } from './atoms';

type AtomRate = {
  [key: string]: number;
};

export function parse(formula: string) {
  // TODO: ReDoSについて考える
  const regPar = /\((.+)\)(\d+\.?\d*)/g;
  const regElm = /([A-Z][a-z]?)(\d*\.?\d*)/g;
  let result: AtomRate = {};

  function setValue(elm: string, value: number) {
    if (elm in result) {
      result[elm] += value;
    } else {
      result[elm] = value;
    }
  }

  const noParFormula = formula.replaceAll(regPar, '');
  for (const [_, parFormula, value] of formula.matchAll(regPar)) {
    const parseResult = parse(parFormula);
    for (const elm in parseResult) {
      setValue(elm, parseResult[elm] * parseFloat(value));
    }
  }

  for (const [_, elm, value, ..._rest] of noParFormula.matchAll(regElm)) {
    setValue(elm, value == '' ? 1 : parseFloat(value));
  }

  return result;
}

export function calcWeight(atomWeight: AtomRate) {
  let result = 0;
  for (const elm in atomWeight) {
    result += atoms[elm] * atomWeight[elm];
  }

  return result;
}

export function parseEquation(equation: string) {
  const [reaStr, proStr] = equation.split('->');
  const reactant = reaStr.split('+');
  const product = proStr.split('+');

  return {
    reactant,
    product,
  };
}
