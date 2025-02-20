import Button from './button';

export default function Home() {
  return (
    <main className="h-screen w-full">
      <h1 className="text-3xl font-heading">Hello world!</h1>
      <div>
        <Button>Teste 1</Button>
        <Button>Teste 2</Button>
        <Button>Teste 3</Button>
      </div>
    </main>
  );
}
