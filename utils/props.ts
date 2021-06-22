import type { ReactNode } from 'react';

export type Props<T = {}> = {
  children: ReactNode;
} & T;
