import React from 'react';

const Category = (props) =>(
    <div className="col-md-6">
        <div className="categoryTable">
            <div className="categoryTitle">{props.category}</div>
                <div className="questions"><a href={props.link}>{props.question}</a></div>
        </div>
    </div>
)

export default Category;