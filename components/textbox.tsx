import { ChangeEventHandler } from 'react';
import { Props } from '@/utils/props';

export const Textbox = ({
  value,
  onChange,
  type = 'text',
  children,
}: Props<{
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: 'text' | 'number';
}>) => (
  <label className="block">
    {children}
    <input
      value={value}
      onChange={onChange}
      type={type}
      className="px-4 py-1 ml-4 rounded bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-400"
    />
  </label>
);
