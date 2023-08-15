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
      <div class="bg-amber-300 h-min w-full absolute top-0 left-0 rounded-md whitespace-nowrap flex">
        <div class="bg-yellow-500 h-min w-min p-4"> 
          <a href ="index.html">
            <embed type="image/jpg" src="./logo.jpg"/>
            <h2>Adam Troiani</h2>
          </a>
        </div>
        <ul class="bg-red-500 h-min w-min text-center">
          <li><a class="pl-2 pr-2">Projects</a></li>
          <li><a class="pl-2 pr-2">Resumé</a></li>
          <li><a class="pl-2 pr-2">Contact</a></li>
        </ul>
        <div class="w-10 h-10 bg-blue-500">
          <a href="https://github.com/actroian" target="_blank">
            <img src="./github.png"/>
          </a>
          <a href="https://www.linkedin.com/in/adamtroiani" target="_blank">
            <img src="./linkedin.png"/>
          </a>
        </div>
      </div>
    </>
  )
}
export default Header