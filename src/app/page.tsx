import type { Metadata } from 'next';

import Button from './button';

export const metadata: Metadata = {
  title: 'NLW Connect - React',
  description: 'Next app built with NLW Connect mini-course',
};

export default function Home() {
  return (
    <main>
      <div>Hello world!</div>
      <div>
        <Button>Teste 1</Button>
        <Button>Teste 2</Button>
        <Button>Teste 3</Button>
      </div>
    </main>
  );
}
