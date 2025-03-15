import { useState } from 'react';
import { Button } from '~/components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='p-8 flex gap-2'>
      <h1 className='text-3xl font-bold underline'>Vite + React</h1>
      <Button className='px-8' onClick={() => setCount(count + 1)}>
        {count}
      </Button>
    </div>
  );
}

export default App;
