'use client'
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-expressions */

import { Fade } from "react-awesome-reveal";
import { db } from "../api/supabase";
import { ShowImage } from "../components/show_img";
import axios from "axios";

import {  FormEvent, useEffect, useState } from "react";
import { Spinner, Modal } from "react-bootstrap";
import { server } from "../components/server";

export default function Tours(){
    const [tour_data,set_data] = useState<any[]>([]);
    const [selected, set_selected] = useState<any>();
    const [client, set_client] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: ""
    });
    const [show_checkout, set_show_checkout] = useState(false);
    const [loading,set_loading] = useState(false);
    const fetch_data = async () => {
        const { data, error } = await db.from("items").select("*").eq("user_id","kp_6ad0321762264cc1a53c232d7bc4b59e");
        if(!error) {
 set_data(data);
      
    }
}

    const checkout=async(e:FormEvent)=>{
        e.preventDefault();
        set_loading(true)
        try{

       
        const request_checkout = await axios.post(`${server}/transactions/initiate`,{
            org_id:"kp_6ad0321762264cc1a53c232d7bc4b59e",
            cart:[
                {
                    item_id:selected?.id,
                    quantity:1,
                    unit_charge:selected?.price,
                }
            ],
            currency:"usd",
            description: selected?.description,
            client:{
                ...client
            }
        })

        if(request_checkout.status !== 200){
            alert("Something went wrong, please try again later");
        }
        
        localStorage.setItem("reference_number", request_checkout.data.reference_number);
        window.location.href = request_checkout.data.payment_url;

    }catch(err){
        console.log(err)
        alert("Something went wrong, please try again later");
    }finally{
        set_loading(false);
    }

    }

    useEffect(() => {
        fetch_data();
    },[])
    return(
        <div>
            <div className="min-vh-100 pt-5 pb-5">
                <Fade cascade={true} direction="down">
                <div className="text-center">

                <h1 className="display-1 fw-bold text-center text-success">
                   Shop
                </h1>
                <p>
                    Make healthy choices with our fresh produce hampers.
                </p>
                </div>
                <div className="m-5">
                    <div className="row  gap-3 justify-content-center">

                        {
                            tour_data?.map((x,i)=>{
                                
                                return(
                                    <div className="col-md-3 col-sm rounded shadow p-3 position-relative" key={i}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={ShowImage(x.image_id)} className="rounded mb-2 w-100 img-fluid" style={{height:"50vh", objectFit:"cover"}} alt=""/>
                                     <br/>
                                     <div style={{height:"10vh", overflow:"auto"}} className="d-flex flex-row align-items-center justify-content-between">
                                         <h5 className="ts">{x.item_name}</h5>
                                         <span className="tp fw-bold">${x.price}</span>
                                     </div>
                                     <div style={{height:"10vh", overflow:"auto"}}>
                                         <p>
                                             {x.description}
                                         </p>
                                     </div>
                                     <div >
                                        <button className={`btn btn-outline-success rounded-pill w-100`} onClick={()=>{
                                           set_selected(x)
                                           set_show_checkout(true);

                                        }}>Get More Information</button>
                                     </div>
                                 </div>
                                )
                            })
                        }
                     
                       
                      
                    </div>
                </div>
                </Fade>
            </div>
            <Modal show={show_checkout}>
                    <Modal.Header>
                        <h5>Visit {selected?.item_name}</h5>
                        <button type="button" onClick={()=>set_show_checkout(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-sm">
 <img src={ShowImage(selected?.image_id)} className="rounded mb-2 w-100 img-fluid" style={{height:"50vh", objectFit:"cover"}} alt=""/>
                                     <br/>
                                      <div >
                                         <p>
                                             {selected?.description}
                                         </p>
                                     </div>
                            </div>
                            <div className="col-sm">
                                <form onSubmit={checkout}>
                                    <div>
                                        <h2>Fill up the form to continue</h2>
                                    </div>
                                    <div className="mb-2">
                                        <span>First Name</span>
                                        <input type="text" className="form-control" value={client.first_name}  onChange={(e)=>set_client({...client, first_name:e.target.value})} required/>
                                    </div>
                                    <div className="mb-2">
                                        <span>Last Name</span>
                                        <input type="text" className="form-control" value={client.last_name}  onChange={(e)=>set_client({...client, last_name:e.target.value})} required/>
                                    </div>
                                    <div className="mb-2">
                                        <span>Email</span>
                                        <input type="text" className="form-control" value={client.email}  onChange={(e)=>set_client({...client, email:e.target.value})} required />
                                    </div>
                                    <div className="mb-2">
                                        <span>Phone Number</span>
                                        <input type="text" className="form-control" value={client.phone}  onChange={(e)=>set_client({...client, phone:e.target.value})} required/>

                                    </div>
                                    <button type="submit" className={`btn btn-outline-success rounded-pill w-100`}>{loading?<Spinner size="sm"/>:`Checkout ${(selected?.price as number)?.toFixed(2)}`}</button>
                                </form>
                            </div>
                        </div>
                    
                    </Modal.Body>
            </Modal>
        </div>
    )
}