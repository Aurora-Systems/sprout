import Image from "next/image"
import Link from "next/link"

const Navbar=()=>{
    return(
        <div className="border-bottom  overflow-hidden sticky-top p-2">
            <div className=" d-flex  justify-content-between text-center gap-5  align-items-center  ">
            <div >
                <Image src="https://ngratesc.sirv.com/sprout/Sprout%20%26%20Co.png" className="img-fluid" width="50" height="0" alt="Sprout & Co"/>
            </div>
            <div className="" >
                <div className="d-flex justify-content-center gap-5">
                    <Link href="/" className="text-decoration-none text-dark">Shop</Link>
                    <Link href="/about" className="text-decoration-none text-dark">About</Link>
                    <Link href="/legal" className="text-decoration-none text-dark">Legal</Link>
                    <Link href="/contact" className="text-decoration-none text-dark">Contact</Link>
                </div>
            </div>
            <div>
                <button className="btn btn-outline-success w-100 rounded-pill"><i className="bi bi-telephone"></i> Call Us</button>
            </div>
            </div>
        </div>
    )
}

export default Navbar