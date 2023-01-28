import './ThankYou.css'
import Card from './Card'
import thankYouImg from '../assets/illustration-thank-you.svg'
import backArrow from '../assets/left-arrow.svg'

const ThankYou = ({rating}) => {

  return (
    <Card>
      <figure className='backarrow'>
        <img src={backArrow} alt="" />
      </figure>

      <figure className='thankyou'>
        <img src={thankYouImg} alt="Thank you Image" />
      </figure>

      <div className='selected'>
        <p>You selected {rating} out of 5</p>
      </div>

      <h1>Thank you!</h1>

      <p>
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </p>
    </Card>
  )
}

export default ThankYou