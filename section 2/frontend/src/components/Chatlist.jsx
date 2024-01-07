import React, { useState } from 'react'

const Chatlist = () => {
const [activity,setActivity]= useState("");
const [listData,setlistData]= useState([]);
function addActivity(){
  // setlistData([...listData,activity])
  // console.log(listData);
  setlistData((listData)=>{
    const updatedList =[...listData,activity]
    console.log(updatedList);
    setActivity(''); 
    return updatedList
  })
}

function removeActivity(i){
       const updatedListData = listData.filter((elem, id)=>{
        return i!=id;
       })
       setlistData(updatedListData);
}
function removeAll(){
  setlistData([])
}

  return (
    <div className='container3'>
      <div className='header'>Chat Box</div>
      <input type="text" placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)}/>
      <button onClick={addActivity}>Add</button>
      <p className='list-heading'>Go Chat List :{")"}</p>
      {listData!=[] && listData.map((data, i)=> {
        return(
          <>
          <p key={i}>
            <div className='listdata'>{data}</div>
            <div className='btn-position'><button onClick={()=> removeActivity(i)}>remove(-)</button></div>

          </p>
          </>
        )
      })}
      {listData.length>=1 &&
     <button className='btn btn-danger w-25' onClick={removeAll}>Remove All</button>}
    </div>
  )
}

export default Chatlist;