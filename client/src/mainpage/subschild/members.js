import React, { useEffect, useState } from 'react';
import MovieSubs from './moviesubs';
const urlsubs = "http://localhost:3001/api/Subs"

function Member(props) {
    
    const [button1, setbutton1] = useState('')
    const [button2, setbutton2] = useState('')
    useEffect(() => {
        const getmembers = async() => {
            const Updatebutton = props.user.premissions.find(function (element) {
                return element === "Update Subscription";
            });
            setbutton1(Updatebutton)
            const Deletebutton = props.user.premissions.find(function (element) {
                return element === "Delete Subscriptions";
            });
            setbutton2(Deletebutton)
           
     }
         getmembers()
     }, [])
     const Edit = async() => props.Edit(props.member)

    const Delete = async() => props.Delete(props.member)
    
    const showmovie = async(e) => props.displaymovie(e)

    return <div className='Memebrs' >
          <h3>{props.member.name}</h3>
          Email:{props.member.email}<br></br>
          City:{props.member.city}
          <br></br> 
        <div className='moviecontainer'>
          {props.user.admin? <button  className='membersbuttons' onClick={Edit}>edit</button>:button1==="Update Subscription"? <button onClick={Edit}>edit</button>:null}
          {props.user.admin? <button  className='membersbuttons' onClick={() => {
            if (window.confirm("Delete this member?")) {Delete()}
          }}>delete</button>:button2==="Delete Subscriptions"? <button onClick={() => {
            if (window.confirm("Delete this movie?")) {Delete()}
          }}>delete</button>:null}
        </div>
<br></br>

          <MovieSubs user={props.user} member={props.member} movietoshow={showmovie}/>
                            
            </div>
    }

    export default Member
