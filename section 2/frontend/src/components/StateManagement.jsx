import React, { useState } from 'react'

const StateManagement = () => {

  let count = 10;
  const [likes, setlikes] = useState(0);
  const [Comment, setComment] = useState(0)
  const [imgUrl, setimgUrl] = useState("")

  const chooseFile = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (content) => {
      setimgUrl(content.target.result);
    }

    reader.readAsDataURL(file);
  }
  return (
    <div>
      <div className='container'>
        <h1>Count : {count}</h1>

        <button className='btn btn-primary mt-4' onClick={() => { count++; console.log(count); }}>Add On</button> &nbsp;
        <button className='btn btn-danger mt-4' onClick={() => { setlikes(likes + 1); }}>Likes : {likes}</button> &nbsp;
        <button className='btn btn-secondary mt-4' onClick={() => { setComment(Comment + 1); }}>Comment : {Comment}</button>
        <input type='text' className='form-control mt-4' placeholder='Enter image url' onChange={(e) => setimgUrl(e.target.value)} />
        <input type='file' onChange={chooseFile} />
        <p>{imgUrl}</p>
        <img src={imgUrl} width={300} alt='' />



        {/* <div className="card" style={{ width: "25rem", height: "400px" }}>
          
          <div className="card-body">
               
          

        <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}


      </div>
    </div>
  )
}

export default StateManagement;
