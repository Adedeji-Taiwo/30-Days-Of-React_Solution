import React, {useRef} from 'react'

const StyleRef = () => {

    const ref = useRef(null)

  const onClick = () => {
    ref.current.style.backgroundColor = '#61dbfb'
    ref.current.style.padding = '50px'
    ref.current.style.textAlign = 'center'
  }
  return (
    <div className='App'>
        <h2 ref={ref}>How to style HTML from the DOM tree using useRef.</h2>
        <button onClick={onClick}>Style it</button>
    </div>
  )
}

export default StyleRef;