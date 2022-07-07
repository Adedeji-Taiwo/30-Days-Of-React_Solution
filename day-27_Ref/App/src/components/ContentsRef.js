import React, {useRef} from 'react'

const ContentsRef = () => {
     const ref = useRef(null);
 
     const onClick = () => {
        let content = ref.current.textContent
        alert(content)
        console.log(content)
    }

  return (
    <div className='App'>
           <h2 ref={ref}>How to get content from the DOM tree</h2>
        <button onClick = {onClick}>Getting Content</button>
    </div>
  )
}

export default ContentsRef;