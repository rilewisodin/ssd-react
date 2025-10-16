import { useState } from 'react';
import quotes from './data/quotes';

const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState({ quote: '', author: '' });

  function getQuote() {
    let quote;
    do {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quote = quotes[randomIndex];
    } while (currentQuote.quote === quote.quote);

    setCurrentQuote(quote);
  }

  return (
    <>
      {currentQuote.quote === '' ? (
        <>
          <p>Click the button to get a quote</p>
          <button onClick={getQuote}>Get Quote</button>
        </>
      ) : (
        <>
          <blockquote>
            <p>{currentQuote.quote}</p>
            <footer>-- {currentQuote.author} --</footer>
          </blockquote>
          <button onClick={getQuote}>Get Another Quote</button>
        </>
      )}
    </>
  );
};

export default Quote;
