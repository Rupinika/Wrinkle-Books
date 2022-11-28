import React from 'react'
import Books from './Books'

function Category(props) {
    return (
        <div className="container bg-secondary bg-opacity-50 rounded-4 py-4 my-4">
            <div className="row">
                <div className="col">
                    <h1>{props.heading}</h1>
                </div>
                <div className="col">
                    <button className="btn btn-primary float-end">
                        See All Books
                    </button>
                </div>
            </div>
            <div className="row">
                {props.data.items.map((element,index)=>{
                    return <div className="col"><Books title={element.title} description={element.description} image={element.image}/></div>
                })}
               
                    
                
            </div>
        </div>
    )
}

export default Category