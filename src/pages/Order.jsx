import React, { useEffect } from 'react'
import Badge from 'react-bootstrap/esm/Badge';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom'
import { useState } from "react";


const Orders = () => {
    const navigate=useNavigate();
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        //localstorage la irunthu orders ah edukurom.
        const saveOrders = JSON.parse(localStorage.getItem("orders") || "[]");
        setOrders(saveOrders)
    
    },[])

  return (
    <Container className='order-container' style={{padding:"2rem"}}>
        <h2>My Orders</h2>
        {orders.length===0?(
            <div style={{textAlign:"center", marginTop:"2rem"}}>
                <p>No orders placed yet.</p>
                <Button onClick={()=>navigate("/")}> Shop Now </Button>
            </div>
        ):(
            orders.map((order,index)=>(
                <div key={index} 
                     className='order-card'
                     style={{border:"1px solid #ddd", 
                        borderRadius:"10px", 
                        padding:"1rem", marginBottom:"1rem"}}>
                            <div style={{display:"flex", 
                                justifyContent: "space-between"}}>
                                    <strong>Order #{order.id} </strong>
                                    <Badge bg='success'>{order.status} </Badge>

                                </div>
                                <p style={{color:"#555"}}>
                                    {order.date}
                                </p>
                                <ul style={{paddingLeft:"1.2rem"}}>
                                    {order.items.map((item,i)=>(
                                        <li key={i}>
                                            {item.name} X {item.quantity} - rs {item.price*item.quantity}
                                        </li>
                                    ))}
                                </ul>
                                <strong>
                                    Total: rs.{order.total}
                                </strong>
                        </div>
            ))

        )}
        <Button variant='outline-secondary' onClick={()=> navigate("/")}>Back to Home</Button>
    </Container>
  )
}

export default Orders