"use client"
import { useState } from "react"
import { store_default, StoreInterface } from "../schemas/store_schema"

const Store=()=>{
    const [search_value, set_search_value] = useState<string>("")
    const [loading,set_loading] = useState<boolean>(true)
    const [data, set_data] = useState<Array<StoreInterface>>([])
    const [selected,set_selected] = useState<StoreInterface>({...store_default})
    const [cart,set_cart] = useState<Array<StoreInterface>>([])
    const [checkout_info,set_checkout_info] = useState()

    return(
        <div className="container mt-3 mb-3 min-vh-100">
            <h1 className="fw-bold text-success display-1">Farm Fresh Produce</h1>
            <div>

            <form action="">
                <div className="input-group mb-3">
                    <input className="form-control" value={search_value} />
                    <button type="submit" className="btn btn-outline-success" disabled={loading}><i className="bi bi-search"/></button>
                </div>
            </form>  
            <div>
                <button className="btn w-100 btn-outline-success" disabled>Get All</button>
            </div>
            </div>

            <div className="row gap-4 mt-3 p-2 justify-content-center">
               
              
           {
            data.map((x,i)=>{
                return(
 <div className="col-sm  p-2 col-md-3 border border-1 rounded" key={i}>
 <div style={{height:"30vh"}} >

 </div>
 <div className="d-flex justify-content-between mb-3">
     <span className="fw-bold">Huckle Berry</span>
     <span className="text-success">$50.00</span>
 </div>
 <div style={{height:"10vh", overflowY:"auto"}}>
<small>Freshly pciked huckle berrys. 12 days old  and less, comes with an additional grape treat</small>
</div>

 <div>

     <button type={"button"} className="w-100 btn btn-outline-success">Add To Cart</button>
 </div>
</div>
                )})
           }
                       </div>
{/* CART BTN */}
        <div >
         {cart.length>0 ?  <button type="button" className="btn btn-success rounded-pill cart_btn shadow-lg align-items-center"><i className="bi bi-cart"/>&nbsp; View Cart</button>:<></>}
        </div>

{/* CHECKOUT VIEW */}

<div className="p-2">
    <div className="row">
           <div className="col-sm">
           </div>
           <div className="col-s">
             <form >
                   <div className="mb-3">
                        <span>Full Name</span>
                        <input className="form-control"/>
                    </div> 
                    <div className="mb-3">
                        <span>Email</span>
                        <input className="form-control"/>
                    </div> 
                    <div className="mb-3">
                        <span>Contact Number</span>
                        <input className="form-control"/>
                    </div> 
                    <div className="mb-3">
                        <span>Delivery Address</span>
                        <textarea className="form-control"/>
                    </div> 
                <button type="submit" className="btn btn-outline-success w-100" >Checkout</button>
             </form>
            </div>
    </div>

</div>
        </div>
    )
}

export default Store