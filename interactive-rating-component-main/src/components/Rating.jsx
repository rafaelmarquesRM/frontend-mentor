import React, { useState } from 'react'
import iconStar from '../assets/icon-star.svg'
import Card from './Card'
import './Rating.css'

const Rating = ({ rating, setRating, setShowThankYouPage }) => {
  const [activeRatings, setActiveRatings] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false
  })

  const handleSubmit = () => {
    if (!rating) return;
    setShowThankYouPage(true);
  }

  return (
    <Card>
      <div className='star'>
        <img src={iconStar} alt="Icon Star" />
      </div>

      <h1>How did we do?</h1>

      <p>
        Please let us know how we did with your support
        request. All feedback is appreciated
        to help us improve our offering!
      </p>

      <div className='available'>
        <div className={activeRatings.one ? 'available_item active' : 'available_item'}
          onClick={() => {
            setActiveRatings({
              one: true,
              two: false,
              three: false,
              four: false,
              five: false
            })
            setRating(1)
          }}>1</div>

        <div className={activeRatings.two ? 'available_item active' : 'available_item'}
          onClick={() => {
            setActiveRatings({
              one: false,
              two: true,
              three: false,
              four: false,
              five: false
            })
            setRating(2)
          }}>2</div>

        <div className={activeRatings.three ? 'available_item active' : 'available_item'}
          onClick={() => {
            setActiveRatings({
              one: false,
              two: false,
              three: true,
              four: false,
              five: false
            })
            setRating(3)
          }}>3</div>

        <div className={activeRatings.four ? 'available_item active' : 'available_item'}
          onClick={() => {
            setActiveRatings({
              one: false,
              two: false,
              three: false,
              four: true,
              five: false
            })
            setRating(4)
          }}>4</div>

        <div className={activeRatings.five ? 'available_item active' : 'available_item'}
          onClick={() => {
            setActiveRatings({
              one: false,
              two: false,
              three: false,
              four: false,
              five: true
            })
            setRating(5)
          }}>5</div>

      </div>

      <button className='submit' onClick={handleSubmit}>
        Submit
      </button>

    </Card>
  )
}

export default Rating