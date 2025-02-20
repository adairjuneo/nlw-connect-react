import type { ComponentProps, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  children?: ReactNode;
}

export default function Button(props: ButtonProps) {
  const { children } = props;
  return <button {...props}>{children}</button>;
}
