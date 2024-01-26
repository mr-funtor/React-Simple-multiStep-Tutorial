const Header =(props)=>{
  const {headerIndex} = props

  return(
    <header id="form-header">
      <h2>Registration</h2>
      <h3 id="numbers-box" style={{color: headerIndex >= 3 ? 'green' : ''}}>
        <span>{headerIndex}</span>
        /3
      </h3>
    </header>
  )
}

export default Header