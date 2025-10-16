import Header from './Header';
import Section from './Section';
import Meetup from './Meetup';
import Directors from './Directors';
import TermsOfUse from './TermsOfUse';
import SignUp from './SignUp';
import Footer from './Footer';
import '../styles/App.css';

function App() {
  return (
    <div className="wrapper">
      <Header title="Adding CSS" />
      <main>
        <Section title="Kitten Meetup" className="section-kitten-meetup">
          <Meetup />
        </Section>
        <Section title="Kitten's Group Inc." className="section-board-members">
          <Directors />
        </Section>
        <Section title="Terms of Use" className="section-terms-of-use">
          <TermsOfUse />
        </Section>
        <Section title="Sign Up for Our Newsletter" className="section-newsletter-sign-up">
          <SignUp />
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
