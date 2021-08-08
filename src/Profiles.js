import React from 'react';


const Profiles = () =>{


    return(
        <>
       <div className="avatarImg">
           <img className="circle responsive-img" src='img.png' alt="sagar" />
       </div>
       <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
           <div className="card-content">
               <h2 className="grey-text text-lighten-3"> <strong>Sagar Malaviya</strong></h2>
               <a href="https://www.linkedin.com/in/sagar-malaviya-031a30207/" target="blank">
                   <i className="fab fa-linkedin fa-2x"></i>
               </a>
               <a href="https://github.com/Sagar-1804" target="blank">
                   <i className="fab fa-github-square fa-2x"></i>
               </a>
           </div>
       </div>
      
        </>
    )
}
export default Profiles;