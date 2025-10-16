const catImagePath = '/assets/images/cat-profile-pic-';

function Directors() {
  return (
    <div className="kittens-board-of-directors">
      <h3>Board of Directors</h3>
      <ul>
        <li>
          <div className="board-member">
            <div className="profile-picture">
              <img src={`${catImagePath}chairman.jpg`} alt="Chairman" />
            </div>
            <div className="title-and-name">
              <p>
                <b>Name: </b>Missy
              </p>
              <p>
                <b>Position: </b>Chairman
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="board-member">
            <div className="profile-picture">
              <img src={`${catImagePath}ceo.jpg`} alt="CEO" />
            </div>
            <div className="title-and-name">
              <p>
                <b>Name: </b>Smokey
              </p>
              <p>
                <b>Position: </b>CEO
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="board-member">
            <div className="profile-picture">
              <img src={`${catImagePath}cfo.jpg`} alt="CFO" />
            </div>
            <div className="title-and-name">
              <p>
                <b>Name: </b>Oscar
              </p>
              <p>
                <b>Position: </b>CFO
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="board-member">
            <div className="profile-picture">
              <img src={`${catImagePath}cio.jpg`} alt="CIO" />
            </div>
            <div className="title-and-name">
              <p>
                <b>Name: </b>Max
              </p>
              <p>
                <b>Position: </b>CIO
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="board-member">
            <div className="profile-picture">
              <img src={`${catImagePath}vp-hr.jpg`} alt="VIP, HR" />
            </div>
            <div className="title-and-name">
              <p>
                <b>Name: </b>Snowball
              </p>
              <p>
                <b>Position: </b>VP, HR
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Directors;
