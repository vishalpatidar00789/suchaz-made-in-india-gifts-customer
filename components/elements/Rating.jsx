import React from 'react';

const Rating = (props) => {
    let { rating } = props;

    var ratingValue = rating,
        rounded = ratingValue | 0;
    let startfull = [];
    for (var j = 0; j < 5; j++) {
        if (j < rounded) {
            startfull.push(<i key={j} className="fa fa-star"></i>);
        } else if (ratingValue - j > 0 && ratingValue - j < 1) {
            startfull.push(<i key={j} className="fa fa-star-half-o"></i>);
        } else {
            startfull.push(<i key={j} className="fa fa-star-o"></i>);
        }
    }

    return (
        <span className="ps-rating">
            {startfull}
            {/* <i className="fa fa-star-0"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i> */}
        </span>
    );
};

export default Rating;
