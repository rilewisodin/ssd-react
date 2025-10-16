import Header from './Header';
import Section from './Section';
import Footer from './Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Section
          title="Rename Your App"
          className="section-rename-your-app"
        ></Section>
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
