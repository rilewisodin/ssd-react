import Header from './Header';
import CounterControls from './CounterControls';
import Counter from './Counter';
import Footer from './Footer';
import { appTitle } from '../globals/globalVariables';

function App() {
    return (
        <div className="wrapper">
            <Header title={appTitle} />
            <main>
                <Counter />
                <CounterControls />
            </main>
            <Footer />
        </div>
    )
}

export default App
