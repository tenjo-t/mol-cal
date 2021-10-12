import { Calc } from '@/components//calc';
import { HistoryProvider, History } from '@/components/history';

const Quasicrystal = () => {
  return (
    <HistoryProvider>
      <div className="space-y-8">
        <h2 className="text-xl font-bold">準結晶</h2>
        <Calc />
        <History />
      </div>
    </HistoryProvider>
  );
};

export default Quasicrystal;
