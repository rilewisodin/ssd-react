import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { getYear } from '../utilities/dates';

import './App.css';

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
