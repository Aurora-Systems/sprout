'use client'
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-expressions */

import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { server } from "../components/server";

export default function TransactionReturn() {
    const [loading,set_loading] = useState(true);
    const [paid,set_paid] = useState(false);
    const [error,set_error] = useState(false);
    const [reference_number,set_reference_number] = useState<any>("");

    const check_payment=async()=>{
       
           
        try{
             const local_data = window.localStorage.getItem("reference_number");
                set_reference_number(local_data)
        const request_status = await axios.get(`${server}/transactions/check-status/${local_data}`);
        set_loading(false);

        if(request_status.status === 200){
            request_status.data.paid ? set_paid(true) : set_paid(false);
        }else{
            set_error(true);
        }
    }catch(err){
        console.log(err)
        set_error(true);
    }
    }

    useEffect(()=>{
        check_payment()
    },[])
    return(
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <div>
                {error?
                <div className="text-center">
                    <h4 className="text-danger">An Error Occurred</h4>
                    <p>We are sorry, but we could not verify your transaction.</p>
                    <p>Please try again later or contact <a href="mailto:info@travelden.co.zw">support</a> for assistance.</p>
                </div>:
                <>
           {loading?
           <div className="text-center">
           <h4>Finalizing Your Transaction</h4>
           <p>Please wait</p>
                <Spinner/>
           </div>:
           <div>
                {
                    paid?
                    <div className="text-center">
                    <h4 className="text-success">Transaction With Reference number {reference_number} is Successful</h4>
                    <p>Thank you for your purchase!</p>
                    <p>Please check your email for further deails</p>
                    </div>
                    :
                    <div className="text-center">
                    <h4 className="text-danger">Transaction With Reference number {reference_number} is Unsuccessful</h4>
                    <p>We are sorry, but your transaction could not be completed.</p>
                    <p>Please try again later or contact <a href="mailto:info@sproutandco.co.zw">support</a> for assistance.</p>
                    </div>
                }

           </div>}
           </>
}
           </div>
        </div>
    )
}