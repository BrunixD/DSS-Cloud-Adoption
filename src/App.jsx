import React from 'react';
import Presentation from './components/Presentation';
import { slidesData } from './slidesData';

function App() {
  return (
    <main>
      <Presentation slides={slidesData} />
    </main>
  );
}

export default App;