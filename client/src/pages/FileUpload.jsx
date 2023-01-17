import React, { useContext } from 'react'
import { useState } from 'react';
import axios from "axios";
import './FileUpload.css';
import { AuthContext } from '../context/AuthContext';
export const FileUpload = () => {
    const [fileState, setFileState] = useState("");
    const [message, setMessage] = useState(null);
    const {user} = useContext(AuthContext);
    const handleSubmitForm = async(e)=>{
        e.preventDefault();
        
        try{
            const token = user.accessToken;
            const hashCode = fileState.replace(/^.*[\\/]/, '');
            const res = await axios.post("files/upload", {hashCode: hashCode },
            {
            headers:{
                token: `Bearer ${token}`,
            }
        });
            if(res.status === 201){
                setMessage(res.data.message);
            }
            }catch(error){
            if(error){
                setMessage(error.response.data.message);
            }
            }
    }
  return (
    <div className='FileUpload'>
    <form onSubmit={handleSubmitForm}>
       <div className="input-container">
         <label>Select a document</label>
         <input type="file" name="document" onChange={(e)=>{
            setFileState(e.target.value)
            setMessage("");
            }}/>
       </div>
       {message? message : null}
       <div className="button-container">
         <input type="submit" value="Upload"/>
       </div>
     </form>
    </div>
  )
}
