import './Body.scss'
import { data } from '../../helpers/data'
import Card from './Card'

const Body = () => {
  console.log(data)
  return (
    <div className="card-container">
      {data.map((city, index) => (
        <Card {...city} key={index} />
      ))}
    </div>
  )
}

export default Body
