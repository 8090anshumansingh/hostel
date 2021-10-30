import React, { useState, useEffect} from "react";
import axios from "../axios.js";
import { useHistory } from "react-router-dom";
import {useParams} from "react-router-dom";
import "./hostel.css";


function Posts() {

    const history = useHistory();
    const params= useParams();
    // console.log(params);
  const [post,setPost] = useState({
    complaint: "",
    studentId:"",
    name:"",
    type:"",
    role:""
  });
  const[allPosts,setAllPosts]=useState([]);
  const [isStudent,setIsStudent]= useState(true);
  const[logrole,setLogRole]=useState("");

  const[logname,setLogName]=useState();
  const[id,setId]=useState();

  useEffect(() => {
    const fetchAllInfo=async ()=>{
        try{
           const res= await axios.post("/getname",{userId:params.userId});
            // console.log(res.data);
            setPost((prev)=>{
                return {
                    ...prev,
                    studentId:res.data.studentId,
                    name:res.data.name,
                    role:res.data.role
                };
            });
             setLogName(res.data.name);
             setId(res.data.studentId);
            setLogRole(res.data.role);
         
        }
        catch(e){
              console.log(e);
        }
      }

      const fetchAllComplaints=async ()=>{
        try{
           const res= await axios.get("/getAllComplaints");
             console.log(res.data);
            setAllPosts(res.data[0].complaints);

       
        }
        catch(e){
              console.log(e);
        }
      }


      fetchAllInfo();
      fetchAllComplaints();
  }, []);
  
    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
    
        setPost((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
        setPost((prev) => {
            return {
              ...prev,
              studentId: id,
              name:logname,
              role:logrole
            };
          });
      };
      const typeChangeHandler = (e) => {
        const { name, value } = e.target;
    
        setPost((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
      };

      const logouthandler=()=>{
          history.push("/login");
      }
    
    
  
    const submitHandler = async () => {
      try {
           console.log(post);
        const res = await axios.post("/user/complaint", post);
        setAllPosts((prev)=>{
            return [...prev,post];
          })

        setPost({
        complaint:""
        });
           console.log(res.data);
       
      
      } catch (e) {
        console.log(e);
      }
    };
  
    
  
    return (
      <React.Fragment>
       
          <div className="post-box">
          <div className="input">
          <textarea name="complaint" rows="4" cols="50" value={post.complaint} onChange={inputChangeHandler}></textarea>           
           <button onClick={submitHandler}>Post</button>
           <label for="type">Choose the type of Complaint:</label>

<select name="type" onChange={typeChangeHandler}>
<option value="">Choose a Type</option>
  <option value="hostel">Hostel</option>
  <option value="mess">Mess</option>
 
</select>
          </div>

          <div className="totalPosts">
         

            {allPosts.map((post)=>(
            <div className="card">

                {post.role==="student" && <div>
                <div className="postname">{post.name}</div>
                <div className="postname">{post.studentId}</div>
                    </div>}

                    {post.role==="CR" && <div style={{color:"green"}}> Class Representative </div>}
               
                <div className="postname">{post.complaint}</div>
                <div className="postname">{post.type}</div>

            </div>
            ))}    
               
          </div>
  
          </div>


          <div>
            <button onClick={logouthandler} style={{cursor:"pointer"}}> Log OUT</button>
          </div>
        
      </React.Fragment>
    );
  }
  
  export default Posts;