import Nav from './Nav';
import { appTitle } from '../globals/globals';

const Header = () => {
  
    return (
        <header>
            <h1><a href="#0">{appTitle}</a></h1>
            <Nav />
        </header>
    );
}

export default Header;