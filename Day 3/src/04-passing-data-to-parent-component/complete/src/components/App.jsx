import { useState } from "react";
import Header from "./Header";
import Section from "./Section";
import Rename from "./Rename";
import Footer from "./Footer";

function App() {
  const [appName, setAppName] = useState("My App");

  function handleRename(newName) {
    setAppName(newName);
    document.title = newName;
  }

  return (
    <div className="wrapper">
      <Header title={appName} />
      <main>
        <Section title="Rename Your App" className="section-rename-your-app">
          <Rename handleRename={handleRename} />
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
