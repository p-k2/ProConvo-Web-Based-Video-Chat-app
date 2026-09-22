import React, { useRef, useState, useEffect } from 'react' ;

import "../styles/videoComponent.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const server_url = "http://localhost:8000" ;

const connections ={}

const preConfigConnections = {
    "iceServers" : {
        "urls" : "stun:stun.l.google.com:19302"
    }
}

export default function VideoMeetComponent(){

    var socketRef = useRef() ;
    let socketIdRef = useRef() ;
    
    let localVideoRef = useRef() ;

    let [videoAvailable , setVideoAvailable] = useState(true) ;
    let [audioAvailable , setAudioAvailable] = useState(true) ;

    let [video , setVideo] = useState() ;
    let [audio , setAudio] = useState() ;
    let [screen , setScreen] = useState() ;
    let [showModal , setShowModal] = useState() ;
    let [screenAvailable , setScreenAvailable] = useState() ;

    let [messages , setMessages] = useState([]) ;
    let [message , setMessage] = useState();
    let [newMessage , setNewMessages] = useState(0) ;
    let [askForUsername , setAskForUsername ] = useState(true) ;
    let [username , setUsername] = useState() ;
    const videoRef = useRef([]);
    let [videos,setVideos] = useState();

    // if(isChrome() == false){

    // }
     const getPermissions = async()=>{
        try{
            const videoPermission =  await navigator.mediaDevices.getUserMedia({video: true})

            if(videoPermission){
                setVideoAvailable=true
            }
            else{
                setVideoAvailable= false
            }

             const audioPermission =  await navigator.mediaDevices.getUserMedia({audio: true})

            if(audioPermission){
                setAudioAvailable=true
            }
            else{
                setAudioAvailable= false
            }

            if(navigator.mediaDevices.getDisplayMedia){
                setScreenAvailable(true) ;
            }
            else{
                setScreenAvailable(false) ;
            }

            if( videoAvailable || audioAvailable){
                const userMediaStream  = await navigator.mediaDevices.getUserMedia({ video: videoAvailable , audio : audioAvailable})
                if(userMediaStream){
                window.localStream = userMediaStream;
                if(localVideoRef.current){
                    localVideoRef.current.srcObject = userMediaStream

                    }
               }  
            }

           }catch (err){
            console.log(err)

                }
            }

    useEffect (()=>{
        getPermissions()    
    } , [])

    let getUserMediaSuccess = (stream) =>{

    }

    let getUserMedia = () =>{
        if( (video && videoAvailable)|| (audio && audioAvailable)){
            navigator.mediaDevices.getUserMedia({video: video , audio:audio})
            .then(getUserMediaSuccess)
            .then( (stream)=>{})
            .catch((err)=> console.log(err))
        }else{
            try{
                let tracks = localVideoRef.current.arcObject.getTrack() ;
                tracks.forEach(track => track.stop())
            } catch(e){

            }
        }
    }

    useEffect(() =>{
        if( video != undefined && audio != undefined ){
            getUserMedia() ;
        }
    } , [audio, video])

    let gotMessageFromServer = ( fromId, message) =>{

    }
    let addMessage = ()=>{

    }

    let connectToSocketServer = () =>{

        socketRef.current = io.connect(server_url , {secure: false })
        socketRef.current.on('signal'  , gotMessageFromServer)
        socketRef.current.on('connect'  , ()=>{
            socketRef.current.emit("join-call" , window.location.href)
            socketIdRef.current = socketRef.current.id 
            socketRef.current.on("chat-message" , addMessage)
            socketIdRef.current.o("user-left" , (id)=>{
                
            } )
        })
        
    }

    let getMedia = () =>{
        setVideo(videoAvailable) ;
        setAudio(audioAvailable) ;

        connectToSocketServer() ;
    }

    return (
        <div>
            {askForUsername == true ?
            <div>

                <h2>Enter in Lobby </h2>
                <TextField id="outlined-basic" label = "Username" value = {username} onChange={ e=>  setUsername(e.target.value)}></TextField>
                <Button variant = "contained" onClick = {io.connect}> Connect</Button> 

                <div>
                <video ref = {localVideoRef} autoPlay muted> </video>

                </div>
            </div> : <></>
            } 
        </div>
    )
}

