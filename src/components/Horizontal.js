import React from 'react'

function Horizontal(props) {
    return (
        <>
            <div className={`card mb-3 bg-${props.theme} text-${props.theme === "light" ? "secondary" : "light"} `} style={{ maxWidth: 540 }} >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.heading}</h5>
                            <p className="card-text">
                                {props.para}
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Horizontal
