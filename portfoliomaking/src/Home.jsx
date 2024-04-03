import React, { useEffect, useState } from 'react'
import './Home.css'
import code from "./code.json";
import Lottie from "lottie-react";
import TypeIt from "typeit-react";
import "animate.css/animate.min.css";
import Carousal from './Carousal';
import Grid from 'animated-grid-lines';
import EasyCarousal from 'carousal-hub';
import axios from 'axios';


function Home() {
    const[names,setName] = useState();
    const[occu,setOccu] = useState();
    
  const[skill1,setSkill1] = useState();
  const[skill2,setSkill2] = useState();
  const[skill3,setSkill3] = useState();
  const[pr1,setPr1] = useState();
  const[pr2,setPr2] = useState();
  const[pr3,setPr3] = useState();
  const[pr4,setPr4] = useState();
  const[pr5,setPr5] = useState();
  const[pr6,setPr6] = useState();
  const[des1,setDes1] = useState();
  const[des2,setDes2] = useState();
  const[des3,setDes3] = useState();
  const[edc1,setEdc1] = useState();
  const[edc2,setEdc2] = useState();
  const[edc3,setEdc3] = useState();
  
    useEffect(()=>{
        var name = (localStorage.getItem("name"));
        var occu = (localStorage.getItem("occu"));
        var skill1 = (localStorage.getItem("skill1"));
        var skill2 = (localStorage.getItem("skill2"));
        var skill3 = (localStorage.getItem("skill3"));
        var des1 = (localStorage.getItem("des1"));
        var des2 = (localStorage.getItem("des2"));
        var des3 = (localStorage.getItem("des3"));
        var edc1 = (localStorage.getItem("edc1"));
        var edc2 = (localStorage.getItem("edc2"));
        var edc3 = (localStorage.getItem("edc3"));
        var pr1 = (localStorage.getItem("pr1"));
        var pr2 = (localStorage.getItem("desc1"));
        var pr3 = (localStorage.getItem("link1"));
        var pr4 = (localStorage.getItem("pr2"));
        var pr5 = (localStorage.getItem("desc2"));
        var pr6 = (localStorage.getItem("link2"));
        setName(name);
        setOccu(occu);
        setSkill1(skill1);
        setSkill2(skill2);
        setSkill3(skill3);
        setPr1(pr1);
        setPr2(pr2);
        setPr3(pr3);
        setPr4(pr4);
        setPr5(pr5);
        setPr6(pr6); 
        setDes1(des1);
        setDes2(des2);
        setDes3(des3);
        setEdc1(edc1);
        setEdc2(edc2);
        setEdc3(edc3);
        
    },[]);

    console.log(names);

    const [data,setData] = useState({
      Email:"",
      Name:""
    })
    const handleConnect = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/email',data).then(res=>{console.log(res);alert("email will be sent to u in a short duration")}).catch(err=>console.log(err));
    }




    const SuperStrong = ({ children }) => {
        return <strong style={{ fontSize: "50px" }}>{children}</strong>;
    };
    const SuperStrong1 = ({ children }) => {
        return <strong style={{ fontSize: "40px" ,color:" rgb(255, 39, 219"}}>{children}</strong>;
    };




  return (
    <>
      
        
        <div className='grid1'>
        <div className="container text-center">
            
            <div className="row">
                <div className="col1 col">
                
                <TypeIt>
                <span className='span5'>My Self</span> 
               </TypeIt>
               <br></br>
               
               
                <span className='span6'>{names}</span>
               
               
               <br></br>
               <TypeIt>
                <span className='span5'>My OccuPation is</span> 
               </TypeIt>
               <br></br>
               
                <span className='span7'> {occu}</span>
               
               
               
                </div>
                
    
            </div>
        </div>
        <div className='grid2'>
          <Lottie animationData={code}></Lottie>
        </div>
        </div>
        



    <EasyCarousal hint='Skills and techs' boldHint='learnt'>
    <div className="items full-width text-center">
        <h1 className="product">{skill1}</h1> 
        <p>{des1}</p>     
    </div>

    <div className="items full-width text-center">
        <h1 className="product">{skill2}</h1>
        <p>{des2}</p>      
    </div>

    <div className="items full-width text-center">
        <h1 className="product">{skill3}</h1>
        <p>{des3}</p>      
    </div>

    

    
  </EasyCarousal>


  <div className="container text-center">
            
            <div className="row">
                <div className="col1 col">
                
                <TypeIt>
                <span className=''>Projects</span> <br></br> <SuperStrong>Worked</SuperStrong><SuperStrong1>Upon</SuperStrong1>
               </TypeIt>
               
               
                </div>
                
    
            </div>
        </div>
        

                        <div className="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{pr1}</h5>
                        <p class="card-text">{pr2}</p>
                        <a href="#" class="btn btn-primary">{pr3}</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{pr4}</h5>
                        <p class="card-text">{pr5}</p>
                        <a href="#" class="btn btn-primary">{pr6}</a> 
                    </div>
                    </div>
                </div>
                </div>
                    

                    
                <h2 className='h2'>Contact me</h2>
  <form className='form2' onSubmit={handleConnect}>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Email address</label>
    <input type="email" onChange={e=>setData({...data,Email:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Your Name</label>
    <input type="text" onChange={e=>setData({...data,Name:e.target.value})} class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Lets Connect</button>
</form>




<div className="card card3" style={{width: "18rem"}}>
  
  <div class="card-body">
    <span>PRIMARY EDUCATION:</span><h5 class="card-title">Education Details</h5>
    <p class="card-text">{edc1}</p>
  </div>
  <ul class="list-group list-group-flush">
    <span>SECONDARY EDUCATION:</span><li class="list-group-item">{edc2}</li>
    <span>COLLEGE/DEGREE:</span><li class="list-group-item">{edc3}</li>
    
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
       
    </>
  )
}

export default Home