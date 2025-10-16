import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function PageHome(){

	useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

	return (
		<section>
			<h2>We Sell Vintage Video Games</h2>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatum, similique, doloribus facilis quas dolorum libero corporis hic dicta earum, repudiandae dolore praesentium nulla. Delectus unde incidunt rem ex expedita?</p>
		</section>
	);

}

export default PageHome;