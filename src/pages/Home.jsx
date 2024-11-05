import React from 'react';
import { Link } from 'react-router-dom';

const cuisines = ["italian", "Mexican", "Indian", "Chinese", "Thai"];

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Explore Cuisines</h1>
      <div className="row">
        {cuisines.map((cuisine, index) => (
          <div key={index} className="col-md-4 mb-3">
            <Link to={`/cuisines/${cuisine.toLowerCase()}`}>
            {console.log(cuisines)}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{cuisine}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
