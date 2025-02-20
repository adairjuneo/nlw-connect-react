import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentProps<'button'> {
  children?: ReactNode;
}

export function Button(props: ButtonProps) {
  const { children } = props;
  return (
    <button
      {...props}
      className={twMerge(
        'text-blue hover:bg-blue flex h-12 flex-row items-center justify-between rounded-[10px] bg-gray-500 px-5 font-bold transition-colors duration-300 hover:text-gray-900',
        props.className
      )}
    >
      {children}
    </button>
  );
}

interface IconButtonProps extends ComponentProps<'button'> {
  children?: ReactElement;
}

export function IconButton(props: IconButtonProps) {
  const { children } = props;
  return (
    <button
      {...props}
      className={twMerge(
        'text-blue hover:bg-blue flex h-8 w-8 flex-row items-center justify-between rounded-md bg-gray-500 px-2 py-1.5 font-bold transition-colors duration-300 hover:text-gray-900',
        props.className
      )}
    >
      {children}
    </button>
  );
}
