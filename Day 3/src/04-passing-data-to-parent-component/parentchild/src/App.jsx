import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import TextInput from './TextInput';

function App() {
  // Componet "Brain"
  // JS
  const [title, setTitle] = useState('React App');

  useEffect(() => {
    document.title = title;
  }, [title]); // will run every time title changes

  return (
    // Componet "Body"
    // JSX
    <div>
      <Header title={title} />
      <TextInput title={title} setTitle={setTitle} />
    </div>
  );
}

export default App;
