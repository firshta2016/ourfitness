import react from "react";

export const Card = () => {
  return (
    <div className="card">
      <div className="card-horizontal">
        <div className="img-sqare-wrapper">
          <img
            className=""
            src="http://via.placeholder.com/300x180"
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <h4>Muscle Gain</h4>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};
