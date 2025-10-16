import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import Books from './Books';

function App() {
  return (
    <div className="wrapper">
      <Header title="Importing Files" />
      <main>
        <Section title="Books" className="section-books">
          <Books />
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
