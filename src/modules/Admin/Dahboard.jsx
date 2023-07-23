import React from 'react'
import { Link } from 'react-router-dom'

function Dahboard() {
  const productsData = [30, 60, 90, 120, 150]; 
  const usersData = [10, 30, 50, 70, 90];
  return (
    <div style={{backgroundColor:"rgb(65, 65, 77)" ,color:"rgb(174, 172, 172)"}}>
       <h1 style={{textAlign:"center",paddingTop:"30px"}}>Dashboard</h1>
       <div className='dashflex'>
       <div className='dashlist'>
       <Link className='linkdash' to="usersdash"> Users</Link>
       <Link className='linkdash'  to="productsdash"> Product</Link>
       <Link className='linkdash'  to="usersdash"> New product</Link>
       <Link className='linkdash'  to="usersdash"> Orders</Link>
       </div>

       <div class="dashtotals">
        <div>
       <h3>20</h3>
       <h3> Users</h3>
       </div>
       <div>
       <h3>50 </h3>
       <h3>products</h3>
       </div>
       </div>
    </div>
    <h2 style={{textAlign:"center",paddingTop:"40px",paddingBottom:"20px"}}>Analytics</h2>
     
    <div className="analytics">
      <div className="analyticcard1">
      <p>No of views</p>
        <p>20</p>
      </div>

      <div className="analyticcard2">
        <p>Traffic sources</p>
        <p>Refferals</p>
        <p>Social media</p>

      </div>
      <div className="analyticcard3">
      <p>Device usage</p>
      <p>Phones</p>
      <p>Laptop</p>

      </div>
     </div>
 



    </div>
  )
}

export default Dahboard