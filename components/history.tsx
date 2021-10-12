import { useState, useEffect, createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { WeightData } from '@/hooks/use-weight';
import { WeighingTable } from '@/components/table';

type HistoryContextData = {
  key: string;
  value: WeightData[];
  setValue: (v: WeightData[]) => void;
};

const { parse } = JSON;

const HistoryContext = createContext<HistoryContextData>({
  key: 'qc-history',
  value: [],
  setValue: () => {},
});

export const HistoryProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<WeightData[]>([]);
  return (
    <HistoryContext.Provider value={{ key: 'qc-history', value, setValue }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);

export const History = () => {
  const { key, value, setValue } = useHistory();

  useEffect(() => {
    if (localStorage.getItem(key)) {
      setValue(parse(localStorage.getItem(key)!) as WeightData[]);
    } else {
      localStorage.setItem(key, '[]');
      setValue([]);
    }
  }, [key]);

  return (
    <div>
      <h3 className="font-bold">履歴</h3>
      {value && <Tables data={value}></Tables>}
    </div>
  );
};

const Tables = (props: { data: WeightData[] }) => {
  const { value, setValue } = useHistory();

  return (
    <div>
      {props.data.map((d, i) => (
        <div key={d.formula} className="py-2">
          <h3>
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
          </h3>
          <WeighingTable data={d}></WeighingTable>
        </div>
      ))}
    </div>
  );
};
