const InputsArea =(props)=>{
  const { index, headerIndex, item } = props

  return(
    <div 
    className={index === headerIndex-1 ? "inputs-casing" : "inputs-casing hidden-form"}
    >
      <div>
        <label>{item.fistInput}</label>
        <input type="text"/>
      </div>
      <div>
        <label>{item.secondInput}</label>
        <input type="text"/>
      </div>
    </div>
  )
}

export default InputsArea