import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function SubHeader() {
  return (
    <>
    
    </>
  )
}

function Header() {
  return (
    <>
      <div class="bg-amber-200" >
        <div class="subHeader">
          <div class="indexLink">
            <a class="nodecoration" href ="index.html" id="mainLogo" >
              <embed type="image/jpg" src="./src/assets/logo.jpg"/>
              <h2>Adam Troiani</h2>
            </a>
          </div>
          <div class="webpageLinks">
            <a class="nodecoration">
              <h2>Projects</h2>
              <h2>Resume</h2>
              <h2>Contact</h2>
            </a>
          </div>
          <div class="externalLinks">
            <a class="nodecoration" href="https://www.linkedin.com/in/adamtroiani" target="_blank">
              <img src="./src/assets/linkedin.png"/>
            </a>
            <a class="nodecoration" href="https://github.com/actroian" target="_blank">
              <img src="./src/assets/github.png"/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header