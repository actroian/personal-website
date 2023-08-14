import React from 'react'
import './index.css'

function SubHeader() {
  return (
    <>
      <div class=" text-white text-lg hover:text-green-600 hover:bg-slate-400 hover:outline-dotted hover:outline-red-400 no-underline h-min w-min align-middle"/>
    </>
  )
}

function Header() {
  return (
    <>
      <div class="bg-amber-300 h-min w-full absolute top-0 left-0 rounded-md">
        <div>
          <div class="left-1">
            <a href ="index.html" id="mainLogo" >
              <embed type="image/jpg" src="./src/assets/logo.jpg"/>
              <h2>Adam Troiani</h2>
            </a>
          </div>
          <div class="grid gap-4 grid-cols-3 grid-rows-1">
            <a>
              <h2>Projects</h2>
              <h2>Resume</h2>
              <h2>Contact</h2>
            </a>
          </div>
          <div class="externalLinks">
            <a href="https://www.linkedin.com/in/adamtroiani" target="_blank">
              <img class="w-10 h-10" src="./src/assets/linkedin.png"/>
            </a>
            <a href="https://github.com/actroian" target="_blank">
              <img class="w-10 h-10" src="./src/assets/github.png"/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header