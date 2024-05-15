import React from 'react';
import logo from'./images/logo_remove.png'
const Header = () =>{

    return (
       <div className='container-g'>

        <nav class="navbar couleur-fond" >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src={logo} alt="Description de mon image" width="65" height="50" class="d-inline-block align-text-top"/>
            </a>
            <button type="button" class="btn ">DevQuiz</button>
        </div>
        </nav>
       </div>
    )
}
export default Header;