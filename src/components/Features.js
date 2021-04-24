import React from 'react'
import featureimage from "../images/frame 19.png";

function Features() {
    return (
      <div id="features">
        <div className="features-model">
          <img src={featureimage} alt="feature-image" />
        </div>
        <div className="features-text">
            <h2>Features</h2>
            <h3>This application <span>Software</span>is Art</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Minus officia deserunt fuga dolor distinctio, repellendus natus
                  rem itaque nihil aliquid ipsam repellat accusantium numquam, rerum 
                  exercitationem, corporis molestiae assumenda! Dolore numquam harum 
                  dignissimos dolorum iure voluptas
                 quisquam necessitatibus, molestiae doloremque.</p>
              <button>View More Features</button>   
        </div>
      </div>
    );
}

export default Features
