import React from 'react'

type SelectorProps = {
  title: string
  dataArray: string[] | undefined
  handleChange: (value: string) => void
}

const Selector = ( {title, dataArray, handleChange}: SelectorProps) => {
  return (
    <select onChange = {e => handleChange(e.target.value)}>

        <option disabled selected style={{width:'15px'}}>{title}</option>
        { dataArray ? dataArray.map( (item) => 
            <option style={{width:'15px'}}>{item}</option>
        ): null}
        
    </select> 
  )
}

export default Selector