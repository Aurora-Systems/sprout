import db from "../init/supabase"

const BgImg=(image_source:string)=>{
    return({
        backgroundImage:`url(${image_source})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"100%",
        width:"100%",
    })
}

export  const show_img=(image_id:string)=>{
    return db.storage.from("images").getPublicUrl(image_id).data.publicUrl
}

export default BgImg