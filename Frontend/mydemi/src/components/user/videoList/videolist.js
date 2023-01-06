import React,{useState, useEffect} from 'react'
import './videoList.css'

function Videolist() {
    const[section, setSection]=useState([{name:'section1',status:true},{name:'section2',status:false}])

   const handleCLick = function  (name) {
    let k =name
    let v = section
    console.log(typeof(section));
    v.map( (j)=>{

        if(j.name===k && j.status===false){
            j.status=true
        }else{
            j.status=false
        }
    }

    )
    setSection(v)
    console.log(section)
    

    // if (v.filter(i=>i.name==k && i.status)){
    //     i.status=true
        
    //     setSection(v)
    //     console.log(section)

    // }else{

    //     v.k= true
    //     setSection(v)
    // }
    console.log(section)
    
    
   }


    useEffect(()=>{
        setSection([{name:'section1',status:true},{name:'section2',status:false}])
        console.log(section)
        // let k=section
        // k.section1=false
        // setSection(k)
        // console.log(section)
        
    },[])
  return (
    <div>
        <div className='list'>
            <div className='header'>
                Content
            </div>
            <div className='main'>
                <div className='section' >
                    {section.map((i)=>{
                        <div>
                        <button onClick={()=>{handleCLick(i.name)}}>

                        

                            {i}
                            
                        </button>

                    </div>

                    }
                        
                    )}
                    
                    <div>
                        {
                            section.section1? <div>yes</div> : null
                        }
                    </div>
                </div>
                <div className='section'>
                    section2
                </div>
            </div>
        </div>
    </div>
  )
}

export default Videolist