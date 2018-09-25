import React from 'react';

const nutritionCard = (props) => {
    // const placeholder = `in ${props.unit}`;
    return(
        <div className = "nutri-card">
            <div className = "heading">
                {props.type}
            </div>
            <div className = "amount">
                Total today
            </div>
            <div className = "add">
                {/* <div className = "inline-text">Add More : </div> */}
                <input id = "add-box" type = "number" step = "1" min = "0"/>
                <button className = "button"> Add More</button>
            </div>
        </div>
    )   
};

export default nutritionCard;