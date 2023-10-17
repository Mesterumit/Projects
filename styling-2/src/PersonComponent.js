import PersonStyle from './PersonComponent.module.scss'
const  PersonComponent = ({ person }) => {
    // destructuring the person object
    let { name, age, location, imgUrl } = person

    return (

        <div className={PersonStyle.personCard} style={{backgroundColor: age>=21 ?'green':'red'}}>
            <img src={imgUrl} alt={name} />
            <div className='person-card-text'>
                <h2>{name}</h2>
                <p>Age:{age}</p>
                <p>Location:{location}</p>

            </div>

        </div>
    )
}

export default PersonComponent