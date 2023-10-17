
const Input=({val,handelChange})=>{
    return(

        <input type='text' value={val} onChange={(e)=>handelChange(e)}/>
    )
}

export default Input