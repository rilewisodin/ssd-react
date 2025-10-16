import catCeo from '../images/cat-profile-pic-ceo.jpg';

function Meetup() {
    return (
        <article className="article-meetup">
                <div className="featured-image">
                    <img src={catCeo} alt="Cat CEO" />
                </div>
                <div className="featured-text">
                    <h2>First Monthly Kitten Meetup</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam nam rem facilis tenetur quaerat vitae numquam illo cum. Quidem aperiam, excepturi corporis mollitia at ipsum temporibus voluptates provident dolor.</p>
                </div>
        </article>
    );
}

export default Meetup;
