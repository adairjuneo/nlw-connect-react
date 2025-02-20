import { ArrowRight, Copy } from 'lucide-react';

import { Button, IconButton } from '@/components/button';
import Input from '@/components/input';

export default function Home() {
  return (
    <main>
      <h1 className="font-heading text-3xl">Hello world!</h1>
      <div className="flex w-3xl flex-col space-y-4 p-4">
        <Button>
          Teste 1
          <ArrowRight className="ml-2 size-5" />
        </Button>
        <IconButton>
          <Copy className="size-5" />
        </IconButton>
        <Input placeholder="Teste" />
        <Input placeholder="Errors" errors="Error test" />
      </div>
    </main>
  );
}
