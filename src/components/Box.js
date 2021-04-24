import React from 'react'

function Box(props) {
    return (
        <div className="s-box">
            <div className="s-b-img">
                <img src={props.image} alt="img1"/>
            </div>
            <div className="s-b-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, 
                    voluptate blanditiis! 
                    Ea molestiae officia, magnam cumque id a corrupti delectus.</p>
                <a href="#" className="cv-btn" >{props.button}</a>
            </div>

        </div>
    )
}

export default Box
