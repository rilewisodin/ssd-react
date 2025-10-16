// import Header from './Header';
// import Section from './Section';
// import Book from './Book';
// import Footer from './Footer';
// import '../styles/App.css';

// function App() {
//   return (
//     <div className="wrapper">
//       <Header title="Nesting Unknown Child Components" />
//       <main>
//         <Section title="Our Books" className="section-about-our-books">
//           <article>
//             <h2>About Our Book Selection Process</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
//               labore est modi nam adipisci in sequi ratione consectetur quaerat,
//               inventore voluptatem pariatur dicta quos laboriosam voluptate ab
//               rem repellat culpa!
//             </p>
//           </article>
//         </Section>
//         <Section title="Featured Book" classname="section-featured-books">
//           <Book
//             title="We"
//             author="Yevgeny Zamyatin"
//             published={1924}
//             cover="https://covers.openlibrary.org/b/id/12622222-L.jpg"
//             rating={3.83}
//           />
//         </Section>
//       </main>
//       <Footer
//         credit="https://openlibrary.org/"
//         creditText="Open Library"
//         imageCredit={true}
//       />
//     </div>
//   );
// }

// export default App;

import Header from "./Header";
import Section from "./Section";
import Book from "./Book";
import Footer from "./Footer";

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
            title="We"
            author="Yevgeny Zamyatin"
            published={1924}
            cover="https://covers.openlibrary.org/b/id/12622222-L.jpg"
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
