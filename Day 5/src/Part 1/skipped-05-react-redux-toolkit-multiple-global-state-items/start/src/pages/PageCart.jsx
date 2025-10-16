import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function PageCart() {

    useEffect(() => {
		document.title = `${appTitle} - Cart`;
	}, []);

    return (
        <section className="cart-section">
            ...Put cart items here...
        </section>
    );
}

export default PageCart
