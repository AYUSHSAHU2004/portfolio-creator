import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';
function Create() {
    
  const[name,setName] = useState();
  const[occu,setOccu] = useState();
  const[skill1,setSkill1] = useState();
  const[skill2,setSkill2] = useState();
  const[skill3,setSkill3] = useState();
  const[des1,setDes1] = useState();
  const[des2,setDes2] = useState();
  const[des3,setDes3] = useState();
  const[edc1,setEdc1] = useState();
  const[edc2,setEdc2] = useState();
  const[edc3,setEdc3] = useState();

  const[pr1,setPr1] = useState();
  const[pr2,setPr2] = useState();
  const[pr3,setPr3] = useState();

  const[pr4,setPr4] = useState();
  const[pr5,setPr5] = useState();
  const[pr6,setPr6] = useState();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name",name);
    localStorage.setItem("occu",occu);
    localStorage.setItem("skill1",skill1);
    localStorage.setItem("skill2",skill2);
    localStorage.setItem("skill3",skill3);
    localStorage.setItem("des1",des1);
    localStorage.setItem("des2",des2);
    localStorage.setItem("des3",des3);
    localStorage.setItem("edc1",edc1);
    localStorage.setItem("edc2",edc2);
    localStorage.setItem("edc3",edc3);//
    localStorage.setItem("pr1",pr1);
    localStorage.setItem("desc1",pr2);
    localStorage.setItem("link1",pr3);
    localStorage.setItem("pr2",pr4);
    localStorage.setItem("desc2",pr5);
    localStorage.setItem("link2",pr6);
    alert("made your portfolio !! NOW EXIT THE PAGE AND AGAIN ENTER THE SITE");
    
  }
  return (

    <>
        <form className="form2" onSubmit={handleSubmit}>
            <h2 className='des'>Create Your Own Portfolio</h2>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" onChange={e=>setName(e.target.value)}  aria-describedby="emailHelp"/>
                
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">OccuPation</label>
                <input type="text" class="form-control" onChange={e=>setOccu(e.target.value)} id="exampleInputPassword1"/>
            </div>
            
            <h4>
                Write Your Top 3 Skills 
            </h4>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Top Skill</label>
                <input type="text" placeholder='Skill Name' class="form-control" onChange={e=>setSkill1(e.target.value)} id="exampleInputPassword1"/>
                
                <input type="text" class="form-control" placeholder='Description' onChange={e=>setDes1(e.target.value)} id="exampleInputPassword1"/>
            </div>
    <hr></hr>
    <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">2nd Top Skill</label>
                <input type="text" placeholder='Skill Name' class="form-control" onChange={e=>setSkill2(e.target.value)} id="exampleInputPassword1"/>
                
                <input type="text" class="form-control" placeholder='Description' onChange={e=>setDes2(e.target.value)} id="exampleInputPassword1"/>
            </div>

            <hr></hr>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">3rd Top Skill</label>
                <input type="text" placeholder='Skill Name' class="form-control" onChange={e=>setSkill3(e.target.value)} id="exampleInputPassword1"/>
                
                <input type="text" class="form-control" placeholder='Description' onChange={e=>setDes3(e.target.value)} id="exampleInputPassword1"/>
            </div>
            <div class="mb-3">
                <h3>Project 1</h3>
                <input type="text" placeholder='Title of project 1' class="form-control" onChange={e=>setPr1(e.target.value)} id="exampleInputPassword1"/>
                
                <input type="text" class="form-control" placeholder='Description' onChange={e=>setPr2(e.target.value)} id="exampleInputPassword1"/>
                <input type="text" class="form-control" placeholder='Link' onChange={e=>setPr3(e.target.value)} id="exampleInputPassword1"/>
            </div>
            <div class="mb-3">
                <h3>Project 2</h3>
                <input type="text" placeholder='Title of project 1' class="form-control" onChange={e=>setPr4(e.target.value)} id="exampleInputPassword1"/>
                
                <input type="text" class="form-control" placeholder='Description' onChange={e=>setPr5(e.target.value)} id="exampleInputPassword1"/>
                <input type="text" class="form-control" placeholder='Link' onChange={e=>setPr6(e.target.value)} id="exampleInputPassword1"/>
            </div>
            <div class="mb-3">
                <h3>Educational Info</h3>
                <input type="text" placeholder='Primary Education' class="form-control" onChange={e=>setEdc1(e.target.value)} id="exampleInputPassword1"/>
                
                <input type="text" class="form-control" placeholder='Secondary Education' onChange={e=>setEdc2(e.target.value)} id="exampleInputPassword1"/>
                <input type="text" class="form-control" placeholder='College/degree' onChange={e=>setEdc3(e.target.value)} id="exampleInputPassword1"/>
            </div>
            
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default Create