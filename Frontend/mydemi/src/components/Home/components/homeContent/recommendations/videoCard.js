import React,{useState, useEffect} from "react";
import "./videoCard.css";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import {  useParams } from 'react-router-dom';

// import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
// import { map } from "jquery";

function VideoCard(props) {
  const [star, setStar] = useState([])
  const id = props.id
const dd = function(){
  let v=[]

  for(let i =0; i<props.rating; i++){
    v.push(true)
  }
  setStar(v)
  console.log(v)

}
useEffect(()=>{
  dd()
},[])
 
  return (
    <Link className='link' to={`test?id=${props.id}`}>
    <div className="videoCard">
      <img className="courseImg" src={`http://127.0.0.1:8000${props.imgSrc}`} alt="courseImg"></img>
      <h3>{props.courseTitle}</h3>
      <p>{props.instructor}</p>
      <div className="ratingDiv">
        <span className="rating">{props.rating}</span>
        <span className="stars">
       
         
          {
            star.map((i)=>(

              <StarIcon />
            ))
            
          }
          {/* <StarIcon />
          <StarIcon />
          <StarHalfIcon /> */}
        </span>
        <span className="noOfStudents">{props.noOfStudents}</span>
      </div>
      <h3 className="price">{props.price}</h3>
      <div className="bestsellerBadge">Bestseller</div>
    </div>
    </Link>
  );
}

export default VideoCard;
