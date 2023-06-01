import React, { useState } from 'react'
import "./Search.css"
import {Place} from "../places"

const Search = () => {
    const [querry , setQuerry] = useState("");
    console.log(querry)
  return (
    <div className='container'>
    
    <h6 className='important'> Note: Only search for given cities with case letter in search here box</h6>
    <ul>
      <li> Hyderabad </li>
      <li> Bangalore </li>
      <li>  Mumbai</li>
      <li> Chennai </li>
      <li>  Delhi </li>
    </ul>
    
    </div>
  )
}

export default Search