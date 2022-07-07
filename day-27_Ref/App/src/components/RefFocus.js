import React, {useRef} from 'react'

const RefFocus = () => {
    const ref = useRef(null);

    const onClick = () => {
        ref.current.focus();
      
    }
    
  return (
    <div className='focus'>
        <h2>Using Focus on Input Element</h2>
        <input type="text" ref={ref} />
        <br />
        <button onClick={onClick}>Click to Focus on Input</button>
    </div>
  )
}

export default RefFocus