import React, { useState } from 'react'
import iconStar from '../assets/icon-star.svg'
import Card from './Card'
import './Rating.css'
import ThankYou from './ThankYou'
import '../App'

const Rating = () => {
  const Button = ({ number }) => {
    return (
      <button
        onClick={() => setItems(number)}
      >
        {number}
      </button>
    )
  }
  const [isSubmitted, setIsSubmitted] = useState(false)

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
      <ul>
        <li>
          <Button number={1} />
        </li>
        <li>
          <Button number={2} />
        </li>
        <li>
          <Button number={3} />
        </li>
        <li>
          <Button number={4} />
        </li>
        <li>
          <Button number={5} />
        </li>
      </ul>

      <button className='submit' onClick={() => setIsSubmitted(true)}>
        Submit
      </button>
      
      {isSubmitted && <ThankYou setIsSubmitted = {setIsSubmitted} />}
    </Card>
  )
}

export default Rating