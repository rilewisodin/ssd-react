import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Book from "./components/Book";

function App() {
  return (
    <div className="wrapper">
      <Header title="Nesting Unknown Child Components" />
      <main>
        <Section 
          title="Featured Book" 
          className="section-about-our-books"
        >
          <Book
            cover="https://covers.openlibrary.org/b/id/12364437-L.jpg"
            title="The Great Gatsby"
            author="F. Scott Fitzgerald"
            published="1925"
            rating="4.5"/>
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
