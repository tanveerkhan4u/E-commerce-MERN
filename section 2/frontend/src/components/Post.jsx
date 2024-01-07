import React, { useState } from 'react'

const Post = () => {

  const [Like, setLike] = useState(0);
  const [Comment, setComment] = useState(0);

  return (
    <div>
      <div className="card mycard2 mt-4" style={{ width: "18rem" }}>
        <div>
          <img className='myimg4 ' src='https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702771200&semt=sph' alt=''></img>
        </div>
        <div className="card-body">
          <h4 className="card-title">Mohd Tanveer Khan </h4>
          <p>Future Full Stack Developer</p>
          <hr />
          <h4>Qualifications</h4>
          <p>M.C.A <i class="fa-solid fa-graduation-cap"></i></p>
          <p>B.C.A  <i class="fa-solid fa-graduation-cap"></i></p>

          <hr />
          <h4>Hobbies</h4>
          <p>Music 🎶🎶</p>
          <p>Travelling ✈🚊🚇🚁</p>
          <p>Eating 🍗🍗🍗🍗</p>
          <p>Sleeping 😴😴😴</p>



        </div>
      </div>












      <div className='card mycard'>
        <div className='d-flex'>
          <div>
            <img className='myimg3 mx-1 mt-5' src='https://t4.ftcdn.net/jpg/05/50/95/87/360_F_550958748_OeGcRonEUNoVhd0wjd9zSEMhLFIGO9Bt.jpg' alt=''></img>
          </div>
          <div className='card-name'>
            <h4 className='text-dark px-1'>Future Web Developer</h4>
            <p className='mx-1 px-1'>Mohd Tanveer Khan<p> 1 Hours ago <i class="fa-solid fa-globe"></i> </p></p>
          </div>
        </div>


        <p className='mx-3'>Welcome, now just finished linkedin-clone with react, redux and firebase.🔥😍🥰😊</p>
        <img src='https://static.toiimg.com/thumb/msid-103783109,width-1280,height-720,resizemode-4/103783109.jpg' alt=''></img>

        <p className='mt-2 mx-4'>   <i class="fa-solid fa-thumbs-up"></i> Shafia and 97 others <p className='float-end'>1256 comments</p> <hr /></p>
        <div>
          <button className='btn btn-light mx-3' onClick={() => { setLike(Like + 1) }}> <i class="fa-solid fa-thumbs-up"></i> {Like}</button>
          <button className='btn btn-light mx-3' onClick={() => { setComment(Comment + 1) }}> <i class="fa-regular fa-comment"></i> {Comment}</button>
          <button className='btn btn-light mx-3'><i class="fa-solid fa-share"></i> Share</button>
          <button className='btn btn-light mx-3'><i class="fa-solid fa-paper-plane"></i> Send</button>
        </div>
      </div>


      <div className="card mycard3 " style={{ width: "19rem" }}>
        <div className="card-body">
          <h4 className="card-title">Add to Your feed </h4>
          <hr />
          <div>
            <img className='myimg5 ' src='https://assets-global.website-files.com/5e4d384f88d1d12b1caadce4/63924a9aac5e12cbd1781ba8_UX.jpeg' alt=''></img>
          </div>
          <div className='card-name5'>
            <h6 className=''>UX Design Institute</h6>
            <p>Dubai, Sharjah</p>
          </div>
          <hr />
          <div>
            <img className='myimg5 ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt=''></img>
          </div>
          <div className='card-name5'>
            <h6 className=''>React Developer</h6>
            <p>U.S.A , Las Vegas</p>
          </div>
          <hr />
          <div>
            <img className='myimg5 ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png' alt=''></img>
          </div>
          <div className='card-name5'>
            <h6 className=''>Java Script</h6>
            <p>Russia, Moscow</p>
          </div>
          <hr />
          <div>
            <img className='myimg5 ' src='https://repvue.imgix.net/a9yxc48y3ay5dm2udzwizc2bdyph' alt=''></img>
          </div>
          <div className='card-name5'>
            <h6 className=''>Mongo DB</h6>
            <p>India, Lucknow</p>
          </div>
          <hr />
          <div>
            <img className='myimg5 ' src='https://img-c.udemycdn.com/course/480x270/919038_3ae1_11.jpg' alt=''></img>
          </div>
          <div className='card-name5'>
            <h6 className=''>Python Developer</h6>
            <p>Australia, Sydney</p>
          </div>





        </div>
      </div>

    </div>
  )
}

export default Post;