import React from 'react'

function cards(props) {
    return (
        <>
            <div className={`card bg-${props.theme} text-${props.theme === "light" ? "secondary" : "light"}`} style={{ width: "18rem" }}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        {props.heading}
                    </p>
                </div>
            </div>
        </>
    )
}

export default cards