// import { FormEvent, useState } from "react"
// import emailjs from "@emailjs/browser"

// export default function Contact(){
//     const [loading,set_loading] = useState<boolean>(false)
//     const handleSubmit=(e:FormEvent)=>{
//         e.preventDefault()
//         try{

//         }catch{
//             set_loading(false)
//         }
//     }


//     return(
//         <div>
//             <h1>Contact Us</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="row">
//                     <div className="col-sm mb-2">
//                         <span>Full name</span>
//                         <input type="text" placeholder="John Doe" className="col-sm"/>
//                     </div>
//                      <div className="col-sm mb-2">
//                         <span>Email</span>
//                         <input type="email" placeholder="john@email.com" className="col-sm"/>
//                     </div>
//                      <div className="col-sm mb-2">
//                         <span>Contact Number</span>
//                         <input type="tel" placeholder="+263 77 xxx xxxx" className="col-sm"/>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-sm">
//                         <span>Your Message</span>
//                         <textarea>

//                         </textarea>
//                     </div>
//                 </div>
//                 <div>
//                     <button type="submit" disabled={loading}>{loading?"Send":"Sending"}</button>
//                 </div>
//             </form>           
//         </div>
//     )
// }