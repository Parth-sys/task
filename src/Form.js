import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {format} from 'date-fns'
function F(){
    
     const [Fullname,setFullname]=useState(" ")

      const[Mobile,setMobile]=useState(" ")

      const [Email,setEmail]=useState(" ")
      const[img,setimg]=useState(null);
      const[dob,setdob]=useState(format(new Date(),'dd/mm/yy') );
      const[Job,setjob]=useState([])
      const [city,setcity]=useState(" ")
      const[data,setdata]=useState([]);
       const [ischecked,setchecked]=useState(false)
        
      

       useEffect(()=>{
        
       },[])





       const  handleform = async(e)=>{
        e.preventDefault();
        try {
            var response= await axios.post("http://localhost:5000/upload",{
              Fullname,
              Mobile,
              Email,
              img,
              dob,
              Job,
              city
            })
            
           console.log(response) ;
        } catch (error) {
            console.log(error);
        }
     
      
    }
  





       
   
     


    const   handelselect=(e)=>{
        let target=e.target;
        let name=e.name;
        let value=Array.from(target.selectedOptions, option => option.value);
        setjob({
          [name]: value
        });
      }



    
    
    return(
      
    <div className='container'>
     
     <p id="head">Registration</p>

     <div className='row'>

     <div className='col-md'>
    
       <form className='f1'  onSubmit={handleform} >

      
  <label id="l1"> Fullname</label>
<input type="text"   onChange={e=>  setFullname( e.target.value)} ></input>
     
<label id="l2" >Profile Pic</label>

      <img src={img} alt="name"  width="100px" height="50px"  style={{marginLeft:"10px"}} />
      <input type="file" accept="image/*"   onChange={e=>setimg(URL.createObjectURL(e.target.files[0]))}  id="inp1" ></input>
    

    <label id="l1"> Mobile</label>
    <input id="inp2" placeholder='+91'></input>
<input type="text"        onChange={e=>setMobile(e.target.value)}></input>
     

<label id="l1"> Email</label>
<input type="Email"  id="inp1"  onChange={e=>setEmail(e.target.value)}></input>
     
     
    
<label id="l1">job type</label>
             <select id="select"  multiple={true}  name="selectedOptions"        onChange={handelselect }>
               <option value="FT">FT</option>
               <option value="PT">PT</option>
               <option value="Consultant">Consultant</option>
             </select>


<label id="l1"> DOB</label>
<input type="Date"  id="inp1"   onChange={e=>setdob(e.target.value)} ></input>

    


<div style={{marginTop:"50px"}}>
              <label style={{padding:"10px"}}>Prefferd  location</label>
              <input type="checkbox" style={{margin:"10px"}}  checked={ischecked} onChange={()=>setchecked(!ischecked)}  ></input>
            
              <select id="s2"             onChange={e=>ischecked?setcity(e.target.value):null} >

              
                <option value="chennai"  type="checkbox">
                  chennai
                </option>

                
                <option  value="pune" type="checkbox">
                  Pune
                </option>

            
                <option value="banglore">
                  banglore
                </option>

              </select>
              </div> 


              <input type="submit" value="add"  style={{float:'right',margin:"5px"}}></input>


    </form>

     </div>



    </div>    

  </div>

 




    )
}
export default F;