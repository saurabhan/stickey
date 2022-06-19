import React from 'react'

interface Props {
    children?: React.ReactNode;
    keyValue :  string
    activeState: string
}



const Key = (props: Props) => {
   const keyValue = props.keyValue
    // console.log(keyValue)
  return (
        <button className={`h-16 w-16 rounded-lg shadow-xl ${props.activeState ? `bg-slate-300` : `bg-white` } flex items-center justify-center focus:bg-slate-400`}>
            <p className='font-bold text-xl'>{keyValue}</p>
        </button>
  )
}

export default Key