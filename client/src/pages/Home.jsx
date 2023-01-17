import React from 'react'
import Navbar from '../components/navbar/NavBar'
import { FileUpload } from './FileUpload'

export const Home = () => {
  return (
    <div className='App'>
        <Navbar title="Home"/>
      <h1>Document Upload Application</h1>
      <p>Welcome to the uploading service application</p>
      <FileUpload/>
    </div>
    )
}
