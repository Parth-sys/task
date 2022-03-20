import React  from "react";



function Table({data}){






    return(
        <div>
               <table className="table table table-striped table-bordered table-sm" cellspacing="0" width="100%" >
             <thead>
                 <tr>
                     <th  >
                        Fullname
                     </th> 
                     <th    >img</th>
                    <th  >Mobile</th> 
                    <th  >Email</th>
                    <th  >JOb</th>
                    <th  >DOB</th>
                    <th  >City</th>
                    <th>Action</th>
                 </tr>

             </thead>
        <tbody>
                {data.map((s,index)=>(
             
            <tr key={index}>
                <td >

                {s.Fullname}
                </td>
                <td>
                  {s.img}  
                </td>
                <td>
                {s.mobile}
               
                </td>

                <td>
                  {s.Email}  
                </td>
                <td>
                    {s.Job}
                </td>
               <td>
                   {s.dob}
               </td>
               <td>
                   {s.city}
               </td>
             <td>
       
             </td>



            </tr>
                ))}

        </tbody>

          </table>
        </div>
    )
}

export default Table;