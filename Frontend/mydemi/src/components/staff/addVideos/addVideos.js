import React,{useEffect, useState, useContext} from 'react'
import './addVideos.css'
import AddSection from './addSection'
import AuthContext  from '../../../services/AuthContext'
import {storage} from '../../../firebase/config'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import { useNavigate } from "react-router-dom";
import { async } from '@firebase/util';
import jwt_decode from "jwt-decode";
import axios from 'axios'
import jQuery from 'jquery'





function AddVideos() {
    const [user1, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? localStorage.getItem("authTokens")
      : null
  );
    const history = useNavigate();
    const [loading, setLoading] = useState(false);

    async function handle(){
        var el = document.getElementById('select_section1');

        var value1 = el.value;
        console.log(vid);
        var el1 = document.getElementById('select_course1');

        var value2 = el1.value;
        setLoading(false)

        const  response = await fetch('http://127.0.0.1:8000/tutor/video/',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "name":name,
                "description":desc,
                "section":value1,
                "course":value2,
                "video":vid,
                "user": user
              })
              
        }).then(
            alert('success')
            // history("/staff/addvideos")
            )
}
    // const {firebase} = useContext(FirebaseContext)
    const {user} = useContext(AuthContext)
    const [file, setFile]=useState(null)
    const [section, setSection]= useState([])
    const [desc, setDesc] = useState('')
    const [sec, setSec] = useState('')
    const [cou, setCou] =useState('')
    const [name, setName] =useState('')
    const [vid, setVideo] = useState('')

    

    const handleSubmit= async (e)=>{
        
        e.preventDefault();
        setLoading(true)
        
        const videoRef = ref(storage, `/${file.name + v4()}`);
    


        uploadBytes(videoRef, file ).then((snapshot)=>{
            getDownloadURL(snapshot.ref).then((url)=>{
                // alert('done'+url)
                console.log('lljkjkjkjkjkjkjkjkj')
                setVideo(url)
                console.log(vid)
                if (vid == ''){
                    alert('error happend while uploading video try again')
                    return
                }
                handle()
            })
        })
    }
        console.log(cou);
        console.log(sec);
        console.log(desc);
        console.log(name);
        
        

        const handleSubmitDjnango= async ()=>{
        console.log('jhjhjhjhjhjhjh');
       
   
        // .then(e.target.username.value=null,e.target.password.value=null).then(response => response.json())
        // .then(json => {
        //   console.log('parsed json', json) // access json.body here
        //   document.getElementById('message').innerHTML=json.message;
        //   document.getElementById('message').classList.add('alert-warning')
        // })
        // console.log(response.message)

        // firebase.storage().ref(`/${file.name}`).put(file).then(({ref})=>{
        //     ref.getDownloadURL().then((url)=>{
        //         console.log(url)
        //     })
        // })
    }

    const getSection = async () => {
        console.log('jjjjjj');
        console.log(section)
        var el = document.getElementById('select_course1');

        var value1 = el.value;
        console.log('kkkkkk');
        console.log(value1 +' 12222222')


        let response = await fetch(`http://127.0.0.1:8000/tutor/section/?pk=${value1}`,{
            method: 'GET',
            headers:{
                    'Content-Type': 'Application/JSON',      
                    Authorization: `Bearer ${String(JSON.parse(user1).access)}`,
                        },
            cookie:'csrftoken=MQYAIftpnKyNJfetXOg5BYXOqwHVI0h1',
            
        })
        response = await response.json()
        console.log(response.status)
        setSection(response.data)
        console.log(section)
        if (response.status==200){
            console.log(section)
            console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
            return true
        }
       
    }
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const [selcourse, setselCourse] = useState([])
    useEffect(()=>{
        const j = document.cookie
        console.log(j);
        const baseURL =`http://127.0.0.1:8000/tutor/course/?pk=${user.user_id}`
        // var csrftoken = getCookie('csrftoken')
        console.log(JSON.parse(user1).access)
        async function getCourse () {
            let response = await fetch(`http://127.0.0.1:8000/tutor/course/?pk=${user.user_id}`,{
                method: 'GET',
                // 
                // credentials:'include',
                headers:{
                    'Content-Type': 'Application/JSON',      
                    Authorization: `Token ${String(JSON.parse(user1).access)}`,
                    // 'Cookie':document.cookie
                    },
                
                
            })
            // let response = axios.get(baseURL,{
            //     withCredentials:true,
            //     headers:{
            //         'Content-Type': 'Application/JSON',
            //         'Authorization': `Token ${String(JSON.parse(user1).access)}`,

            //     },
            // }).then(
            //     response => response.json()
                
            // ).then(data=>{
            //     console.log('jjjj'+data)
            // })
            response = await response.json()
            // console.log('jjjljslajsl'+response.data['data'].json())
            setselCourse(response.data)
            
    
          }
          getCourse()
    },[])
  return (
    <div className=' container-fluid'>
        
        
    <div className='justify-content-center content row'>
        <AddSection/>
        <div className=' col-6'>
        
       
        <div className='header addcourse'>Add Video</div>
        <form>
        <div className="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input type="text" className="form-control" id="videoName" placeholder="Name of the Video" onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="form-group">
            <label for="exampleInputEmail1">Course Name</label>
            <select id='select_course1' className="form-control selectVal" name='course' onClick={()=>{getSection()}} onChange={(e)=>{setCou(e.target.value)}}>
            {
                selcourse.map((i)=>(
                    <option key={i.id} value={i.id}>{i.name}</option>
                ))
            }
            </select>
        </div>
        <div className="form-group">
            <label for="exampleInputEmail1">Select Section</label>
            <select id='select_section1' className="form-control selectVal" name='course' onChange={(e)=>{setSec(e.target.value)}} >
            {
                
                section.map((i)=>(
                        <option key={i.id} value={i.id}>{i.name}</option>
                ))
            }
            </select>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Description</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Description" onChange={(e)=>{setDesc(e.target.value)}}/>
        </div>
        <br />
        <div className="form-group">
    <label for="exampleFormControlFile1">File to upload</label> <span></span>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(e)=>{setFile(e.target.files[0])}}/>
  </div>
        <br />
        <div className='submit-btn'>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary ">Submit</button>
        </div>
        </form>
        </div>
     
    </div>
    </div>
  )
}

export default AddVideos