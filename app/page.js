"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler =(e)=>{
     e.preventDefault()
     setmainTask([...mainTask , { title , desc }])
     settitle("")
     setdesc("")
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

let renderTask = <h2>No Task Available</h2>
if(mainTask.length>0){
  renderTask = mainTask.map((e,i)=>{
     return ( 
     <li key={i} className='flex items-center justify-between mb-8'>
      <div className='flex justify-between mb-5 w-2/3'>
      <h5 className ='text-2xl font-semibold'>{e.title}</h5>
      <h5 className ='text-lg font-medium'>{e.desc}</h5>
     </div>
     <button 
     onClick={()=>{deleteHandler(i)}} 
     className='bg-red-400 text-white rounded px-4 py-2 font-bold'>Delete</button>
     </li>
     );
  })
}


  return (
    <>
     <h1 className='bg-black text-white p-2 text-5xl font-bold text-center'>P$TRICK'S TO DO LIST</h1>
     <form onSubmit={submitHandler}>
      <input 
       type="text" className='text-2xl borde-zinc-800 border-2 m-5 px-4 py-2' placeholder='Task' value={title} 
       onChange={(e)=>{
       settitle(e.target.value)
       }}
      />
      <input
       type="text" className='text-2xl borde-zinc-800 border-2 m-5 px-4 py-2' placeholder='Discription' value={desc}
       onChange={(e)=>{
       setdesc(e.target.value)
       }}
      />
      <button className="bg-black text-white px-5 py-2 text-2xl font-bold rounded m-5">Add Task</button>
     </form>
     <hr/>
     <div className='p-8 bg-slate-200'>
       {renderTask}
     </div>
    </>
  )
}

export default page