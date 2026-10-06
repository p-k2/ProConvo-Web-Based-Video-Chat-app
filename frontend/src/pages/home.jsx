import React, { useState , useContext} from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css" ;
import { AuthContext } from "../contexts/AuthContext";
import IconButton from '@mui/material/IconButton';
import RestoreIcon from '@mui/icons-material/Restore';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

 function HomeComponent(){


   let navigate = useNavigate() ;

   const [meetingCode , setMeetingCode] = useState("")

   const { addToUserHistory} = useContext( AuthContext);
   let handleJoinVideoCall = async() =>{
      await addToUserHistory(meetingCode)
      navigate(`/${meetingCode}`)
   }

    return (
       <>
       <div className="navBar">
         <div style = {{ display: "flex"  , alignItems: "center"}}>
            <h3> ProConvo</h3>

         </div>

         <div style = {{ display: "flex"  , alignItems: "center"}}>
            <IconButton onClick = { 
               ()=>{navigate("/history")}}
               > 

               <RestoreIcon>
                 
               </RestoreIcon>
                <p>History</p>
            </IconButton>
            <Button onClick = { ()=>{
               localStorage.removeItem("token"),
               navigate("/auth")
            }}>
               Logout
            </Button>

         </div>
         
         
          </div>

          <div  className="meetContainer"> 
               <div className= "leftPanel">
                  <div>
                     <h2>
                        Providing Quality Video Call Just Like Quality 
                     </h2>
                     <div style = {{ display: "flex" , gap: "10px"}}>
                        <TextField onChange = { e=> setMeetingCode(e.target.value)} id= "outlined-basic" label = "Meeting Code" variant = "outlined"></TextField>
                        <Button  onClick = {handleJoinVideoCall} variant= "contained">Join</Button>

                       </div>
                  </div>

               </div>
               <div className = "rightPanel" >
                  <img srcSet = "/logo.png" alt="" />

               </div>
          </div>

       </> 
    )

}


export default withAuth( HomeComponent)