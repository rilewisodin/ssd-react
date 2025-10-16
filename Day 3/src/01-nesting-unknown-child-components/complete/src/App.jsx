import Header from './components/Header';
import Section from './components/Section';
import Book from './components/Book';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header title="Nesting Unknown Child Components" />
      <main>
        <Section title="Our Books" className="section-about-our-books">
          <article>
            <h2>About Our Book Selection Process</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              labore est modi nam adipisci in sequi ratione consectetur quaerat,
              inventore voluptatem pariatur dicta quos laboriosam voluptate ab
              rem repellat culpa!
            </p>
          </article>
        </Section>
        <Section title="Featured Book" classname="section-featured-books">
          <Book
            cover="https://covers.openlibrary.org/b/id/9302088-L.jpg"
            title="Robots and Empire"
            author="Isaac Asimov"
            published={1985}
            rating={3.83}
          />
        </Section>
      </main>
      <Footer
        credit="https://openlibrary.org/"
        creditText="Open Library"
        imageCredit={true}
      />
    </div>
  );
}

export default App;
