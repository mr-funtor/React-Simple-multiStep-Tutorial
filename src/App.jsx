import { useState } from 'react'
import Header from './components/Header'
import InputsArea from './components/InputsArea'

const inputLists=[
  {
    fistInput:"First Name",
    secondInput:"Last Name",
  },
  {
    fistInput:"Email",
    secondInput:"Phone Number",
  },
  {
    fistInput:"Password",
    secondInput:"Confirm Password",
  },
]

function App() {
  const [headerIndex, setHeaderIndex] = useState(1);

  function moveToNextNumber(){
    setHeaderIndex((prev)=> prev < 3 ? prev +1 : prev)
  }

  function moveToPreviousNumber(){

    setHeaderIndex((prev)=> prev > 1 ? prev-1 : prev)
  }

  return (
    <main id="main-body">
     <div id="overall-container">
      <form id="form-container">

        <Header headerIndex={headerIndex}/>

        {
          inputLists.map((item, index)=>{
            return(
              <InputsArea
                key={item.fistInput}
                index={index}
                headerIndex={headerIndex}
                item={item}
              />

            )
          })
        }


        <div id="button-container" className={headerIndex <= 1 ? 'expand-button' : ''}>
          <button 
            type='button' 
            id="prev-button"
            onClick={moveToPreviousNumber}
          >Previous</button>

          <button 
            type='button' 
            id="next-button"
            onClick={moveToNextNumber}
          >Next</button>

        </div>

      </form>
     </div>
    </main>
  )
}

export default App
