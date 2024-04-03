import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>  
        <div className='box' >
        <nav  className="navbar navbar-expand-lg bg-body-tertiary" style={{minHeight:"60px"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Port Folio </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link to="/" class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </Link>
                    <Link to="/create" class="nav-item">
                    <a class="nav-link" href="#">Create Portfolio</a>
                    </Link>
                    
                    
                </ul>
                
                </div>
            </div>
            </nav>
        </div>

        
                            
    </>
  )
}

export default Navbar