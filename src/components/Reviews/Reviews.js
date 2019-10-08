import React from 'react';

import profile from '../../images/icons/profile.png';

import './Reviews.scss';

const Reviews = ({ review }) => (
  <div className="Reviews">
    <p>
      <img src={profile} alt="profile" />
      {review}
    </p>
  </div>
);

export default Reviews;
