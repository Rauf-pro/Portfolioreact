import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --primary-color: #007bff;
    --primery-color-light:#057FFF;
    --secondary-color: #6c757d;
    --background-dark-color:#10121A;
    --background-dark-grey:#191D2B;
    --border-color:#2e344e;
    --background-light-color:#F1F1F1;
    --background-light-color-2:rgba(3,127,255,.3);
    --white-color:#FFF;
    --font-light-color:#a4acc4;
    --font-dark-color:#313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color:#383838;
    --scrollbar-thumb-color:#6b6b6b;
    --scrollbar-track-color:#383838;
    
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    
    
    
    
}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
}

body::-webkit-scrollbar{
width: 9px;
background-color: #383838;
}

body::-webkit-scrollbar-thumb{
border-radius: 10px;
background-color: #6b6b6b;
}

body::-webkit-scrollbar-track{
border-radius: 10px;
background-color: #383838;
}

a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}
h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
        font-size: 4rem;

    }
}
span{
    color: var(--primary-color);
}

// Nav Toggler
 .ham-burger-menu{
    position: absolute;
    right: 5%;
    top: 3%;
    display: none;
    z-index: 15;
    svg{
        font-size: 3rem;
    }

}
.nav-toggle{
    transform: translateX(0);
    z-index: 20;
}
@media screen and (max-width:1200px){
    .ham-burger-menu{
        display: block;
    }

}



// Global Media Queries

@media screen and (max-width: 421px){
    font-size: 30%;
  }

`;
export default GlobalStyle;
