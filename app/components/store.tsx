// "use client"
// import { useState } from "react"
// import { CartInterface, store_default, StoreInterface, test_data } from "../schemas/store_schema"
// import BgImg, { show_img } from "./bg_img"
// import { Modal } from "react-bootstrap"
// import Link from "next/link"

// const Store=()=>{
//     const [search_value, set_search_value] = useState<string>("")
//     const [loading,set_loading] = useState<boolean>(true)
//     const [data, set_data] = useState<Array<StoreInterface>>([])
//     const [cart,set_cart] = useState<Array<CartInterface>>([...test_data])
//     const [checkout_info,set_checkout_info] = useState()
//     const [show_cart,set_show_cart] = useState<boolean>(false)
//     const [cart_total,set_cart_total] = useState<number>(0)

//     const delete_cart_item =(index_id:number)=>{

//     }
   

//     const total_cart_update =(index_id:number, symbol:"-"|"+")=>{
//         let total:number = 0;
//         const cart_data=cart.map((x,i)=>{
//             if(i===index_id){
//                 if(symbol==="-"){
//                     x.cart_quantity=x.cart_quantity-1
//                 }else{
//                     x.cart_quantity=x.cart_quantity+1
//                 }
//             }
//             total=total+(x.price*x.cart_quantity)
//             return x
//         })

//         set_cart_total(total)
//         set_cart(cart_data)
//     }
    
   

//     return(
//         <div className="container mt-3 mb-3 min-vh-100">
//             <h1 className="fw-bold text-success display-1">Farm Fresh Produce</h1>
//             <div>

//             <form action="">
//                 <div className="input-group mb-3">
//                     <input className="form-control" value={search_value} />
//                     <button type="submit" className="btn btn-outline-success" disabled={loading}><i className="bi bi-search"/></button>
//                 </div>
//             </form>  
//             <div>
//                 <button className="btn w-100 btn-outline-success" disabled>Get All</button>
//             </div>
//             </div>

//             <div className="row gap-4 mt-3 p-2 justify-content-center">
               
              
//            {
//             data.map((x,i)=>{
//                 return(
//  <div className="col-sm  p-2 col-md-3 border border-1 rounded" key={i}>
//     <div style={{height:"30vh"}}>

//  <div style={{...BgImg(show_img(x.image_id))}} >

//  </div>
//  </div>

//  <div className="d-flex justify-content-between mb-3">
//      <span className="fw-bold">{x.item_name}</span>
//      <span className="text-success">{x.price.toFixed(2)}</span>
//  </div>
//  <div style={{height:"10vh", overflowY:"auto"}}>
// <small>{x.description}</small>
// </div>

//  <div>

//      <button type={"button"} className="w-100 btn btn-outline-success">Add To Cart</button>
//  </div>
// </div>
//                 )})
//            }
//                        </div>

//                        <Modal show={show_cart} fullscreen={true}>
//                         <Modal.Header className="d-flex justify-content-between align-items-center">
//                             <h4 className="fw-bold text-success">View Cart</h4>
//                             <button className="btn btn-outline-danger rounded-circle ">
//                                 <i className="bi bi-x"/>
//                             </button>
//                         </Modal.Header>
//                         <Modal.Body className="container" >

// {/* CHECKOUT VIEW */}

// <div className="p-2">
//     <div className="row">
//            <div className="col-sm">
//             <div className="mb-3">
//                 <p className="fw-bold text-success">Manage Order</p>
//             </div>
//             {cart?.map((x,i)=>{
//                 return(
//                     <div className="mb-3 p-1 bg-light rounded" key={i}>
                        
                   
//             <div className="d-flex flex-row flex-nowrap row position-relative" >
//                 <div className="col-2 col-md-5">
//                     <div style={{...BgImg("https://ngratesc.sirv.com/sprout/swiper.png"), height:"30vh"}}  className="rounded-3" />
//                 </div>
//                 <div className="col-sm">
//                     <div className="d-flex justify-content-between mb-2 ">
//                         <span>{x.item_name}</span>
//                         <span className="text-success text-wrap">${(x.price*x.cart_quantity).toFixed(2)}</span>                        
//                     </div>
//                     <p style={{height:"15vh", overflowY:"auto"}} className="text-wrap">  
//                     <small>{x.description}</small>
                  
//                     </p>
                   
//                     <div className="input-group">
//                         <button className="btn btn-outline-danger" onClick={()=>total_cart_update(i, "-")} disabled={x.cart_quantity===1?true:false}>-</button>
//                         <input className="form-control text-center" value={x.cart_quantity} disabled/>
//                         <button className="btn btn-outline-success" disabled={x.in_stock===x.cart_quantity?true:false} onClick={()=>total_cart_update(i, "+")}>+</button>
//                     </div>
//                 </div>
//                 <div className="position-absolute ">
//                     <button className="btn btn-danger"><i className=" bi bi-trash"/></button>
//                 </div>
                
//             </div>
//             </div>
//                 )
//             }) }
//            </div>
//            <div className="col-sm col-md-5">
//             <div className="mb-3">
//                 <p className="text-success fw-bold">User Details</p>
//             </div>
//              <form >
//                    <div className="mb-3">
//                         <span>Full Name</span>
//                         <input className="form-control"/>
//                     </div> 
//                     <div className="mb-3">
//                         <span>Email</span>
//                         <input className="form-control"/>
//                     </div> 
//                     <div className="mb-3">
//                         <span>Contact Number</span>
//                         <input className="form-control"/>
//                     </div> 
//                     <div className="mb-3">
//                         <span>Delivery Address</span>
//                         <textarea className="form-control"/>
//                     </div> 
//                     <div className="mb-3">
//                         <span><i className="bi bi-info-circle"/><small> Please note delivery for Harare CBD with a 10KM radius is $5, additional KM will be $0.50 paid upon delivery. We will contact you to confirm delivery or you can pickup hampers</small></span>
//                     </div>
//                     <div className="mb-3">
//                         <input type="checkbox" className="input-checkbox"/>
//                         <span> &nbsp; By Proceeding with this transaction you agree to our <Link href="/legal">legal notices</Link></span>
//                     </div>
//                 <button type="submit" className="btn btn-outline-success w-100" >Checkout ${cart_total.toFixed(2)}</button>
//              </form>
//             </div>
//     </div>

// </div>
// </Modal.Body>
//                        </Modal>
//                        {/* CART BTN */}  
//         <div >
//          {cart.length>0 ?  <button type="button" className="btn btn-success rounded-pill cart_btn shadow-lg align-items-center" onClick={()=>set_show_cart(true)}><i className="bi bi-cart"/>&nbsp; View Cart</button>:<></>}
//         </div>
//         </div>
//     )
// }

// export default Store