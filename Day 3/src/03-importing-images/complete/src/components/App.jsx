import Header from './Header';
import Section from './Section';
import Meetup from './Meetup';
import Directors from './Directors';
import Book from './Book';
import Footer from './Footer';

function App() {
  return (
    <div className="wrapper">
      <Header title="Importing Images" />
      <main>
        <Section title="Kitten Meetup" className="section-kitten-meetup">
          <Meetup />
        </Section>
        <Section title="Kitten's Group Inc." className="section-board-members">
          <Directors />
        </Section>
        <Section title="Book of the Month" className="section-book-of-the-month">
          <Book />
        </Section>
      </main>
      <Footer credit="https://openlibrary.org/" creditText="Open Library" imageCredit={true} imageCreditLabel="Tuna: A Love Story book cover image from" />
    </div>
  );
}

export default App;
