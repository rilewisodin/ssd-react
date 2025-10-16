// import React, { useEffect, useState } from "react";
// const App = () => {
//   // state for managing fetched data
//   const [data, setData] = useState("");
//   // function that actually fetches the data asynchronously
//   const fetchData = async () => {
//     const api = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     setData(await api.json());
//   };
//   // When this component mounts we want it to call fetchData, only once, so the second param is an empty array.
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <>
//       {data === "" ? (
//         "<h1>Fetching todos...</h1>"
//       ) : (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };
// export default App;

/* Imported Components */
// import Header from './Header';
// // import Main from './Main';
// import Footer from './Footer';

// // import './App.css';

// function App() {

//   return (
//     <div className="App">
//       <Header />
//       {/* <Main /> */}
//       <Footer />
//     </div>
//   );
  
// }

// export default App;

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { getYear } from '../utilities/dates';

// import './App.css';

function App() {
  const appInfo = {
    title: 'React Essentials: Props',
    heading: 'Passing Data Down',
    quote: 'Let the data flow through you.',
    author: 'Josh Solomon',
    copyright: getYear(),
  };

  return (
    <div className="App">
      <Header title={appInfo.title} />
      <Main heading={appInfo.heading} quote={appInfo.quote} />
      <Footer copyright={appInfo.copyright} author={appInfo.author} />
    </div>
  );
}

export default App;
