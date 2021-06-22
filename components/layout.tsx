import type { Props } from '@/utils/props';

export const Layout = ({ children }: Props) => (
  <div className="text-gray-800 bg-gray-100">
    <header className="p-8">
      <h1 className="text-3xl">分子量計算機（仮）</h1>
    </header>
    <main className="p-8">{children}</main>
  </div>
);
