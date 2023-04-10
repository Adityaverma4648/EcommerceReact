import React from 'react'

const EmptyCard = (props) => {
  return (
    <div className='h-screen w-screen font-semibold flex justify-center items-center' >
       {props.theme} is Empty
    </div>
  )
}

export default EmptyCard