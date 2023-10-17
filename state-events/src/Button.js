

const Button =({text, clickHandler})=>{
    return(
        <button onClick={()=>{clickHandler(text)}}>{text}</button>
    )
}
export default Button; 