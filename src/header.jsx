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
      <div class="bg-amber-300 h-min w-full absolute top-0 left-0 rounded-md flow-root">
        <div class="h-min w-min whitespace-nowrap relative">
          <div class="h-min w-min bg-yellow-500">
            <a href ="index.html">
              <embed type="image/jpg" src="./logo.jpg"/>
              <h2>Adam Troiani</h2>
            </a>
          </div>
          <div class="bg-red-500">
            <a class="pl-2 pr-2">Projects</a>
            <a class="pl-2 pr-2">Resume</a>
            <a class="pl-2 pr-2">Contact</a>
          </div>
          <div class="w-10 h-10 bg-blue-500 float-right">
            <a href="https://github.com/actroian" target="_blank">
              <img src="./github.png"/>
            </a>
            <a href="https://www.linkedin.com/in/adamtroiani" target="_blank">
              <img src="./linkedin.png"/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header