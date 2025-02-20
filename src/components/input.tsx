import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends ComponentProps<'input'> {
  children?: ReactNode;
  errors?: string | string[];
}

export default function Input(props: InputProps) {
  return (
    <input
      type={props.type}
      data-errors={!!props.errors}
      className={twMerge(
        'data-[errors=true]:border-danger focus:data-[errors=true]:border-danger h-16 rounded-[10px] border-2 border-gray-600 px-4 text-lg text-gray-400 outline-0 not-[placeholder-shown]:text-gray-100 focus:border-gray-100 focus:text-gray-100',
        props.className
      )}
      {...props}
    />
  );
}
