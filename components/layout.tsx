import Head from 'next/head';

import type { Props } from '@/utils/props';

export const Layout = ({ children }: Props) => (
  <div className="text-gray-800 bg-gray-100">
    <Head>
      <title>式量計算機（仮）</title>
    </Head>
    <header className="p-8">
      <h1 className="text-3xl">式量計算機（仮）</h1>
    </header>
    <main className="p-8">{children}</main>
  </div>
);
