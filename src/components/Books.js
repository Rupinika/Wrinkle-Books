import React from 'react'

function Books(props) {
    return (

        <div className="card w-100 m-auto">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                   {props.description}
                </p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>


    )
}

export default Books