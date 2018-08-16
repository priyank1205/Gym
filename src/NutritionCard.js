import React from 'react';

const nutritionCard = (props) => {
    return(
        <div className = "nutri-card">
            <div className = "heading">
                {props.type}
            </div>
            <div className = "amount">
                Total today
            </div>
            <div className = "add">
                Add More : 
            </div>
        </div>
    )   
};

export default nutritionCard;