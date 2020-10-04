import React, { FC } from 'react';
import RatingWrapper from './rating.style';
type RatingProps = {
    rating?: any;
};
const Rating: FC<RatingProps> = ({ rating }) => {
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
        <RatingWrapper>
            {startfull}
            {/* <i className="fa fa-star-0"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i> */}
        </RatingWrapper>
    );
};

export default Rating;
