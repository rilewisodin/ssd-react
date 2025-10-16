import { useEffect, useState } from 'react';
// import React, { useEffect, useState } from 'react';
import '../styles/App.css';
const App = () => {
  // state for managing fetched data
  const [data, setData] = useState('');
  // function that actually fetches the data asynchronously
  const fetchData = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/');
    setData(await api.json());
  };
  // When this component mounts we want it to call fetchData, once, so teh second param is an empty array.
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {data === '' ? (
        '<h1>Fetching todos...</h1>'
      ) : (
        <>
          <h1>Here are your todos, freshly fetched</h1>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
export default App;
