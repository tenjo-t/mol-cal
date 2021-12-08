import { useState, useEffect, createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { WeightData } from '@/hooks/use-weight';
import { WeighingTable } from '@/components/table';

type HistoryContextData = {
  value: WeightData[];
  setValue: (v: WeightData[]) => void;
};

const { parse, stringify } = JSON;

const HistoryContext = createContext<HistoryContextData>({
  value: [],
  setValue: () => {},
});

export const HistoryProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<WeightData[]>([]);
  useEffect(() => {
    if (localStorage.getItem('qc-history')) {
      setList(parse(localStorage.getItem('qc-history')!) as WeightData[]);
    } else {
      localStorage.setItem('qc-history', '[]');
      setList([]);
    }
  }, [setList]);

  const setValue = (l: WeightData[]) => {
    if (list === l) return;

    localStorage.setItem('qc-history', stringify(l));
    setList(l);
  };

  return (
    <HistoryContext.Provider value={{ value: list, setValue }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);

export const History = () => (
  <div>
    <h3 className="font-bold">履歴</h3>
    <Tables />
  </div>
);

const Tables = () => {
  const { value, setValue } = useHistory();

  return (
    value && (
      <div>
        {value.map((d, i) => (
          <details key={d.formula} className="py-2">
            <summary>
              {d.formula}
              <button
                className="inline-block ml-4 text-white bg-red-500 px-1.5 py-px leading-none rounded-full focus:outline-none active:bg-red-700"
                type="button"
                onClick={() => {
                  setValue([...value.slice(0, i), ...value.slice(i + 1)]);
                }}
              >
                X
              </button>
            </summary>
            <WeighingTable data={d}></WeighingTable>
          </details>
        ))}
      </div>
    )
  );
};
