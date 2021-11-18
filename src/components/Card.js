import React from 'react';
import './Card.css'

function Card({ src, title, description, icon}
) {
    return (
      <div className='card'>
        <img src={src} alt="" class="src" />
        <div className="card_info">
          <h2>{title}</h2>
          <h4>{description}</h4>
        </div>
      </div>
    )
}

export default Card;
