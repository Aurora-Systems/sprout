const BgImg=(image_source:string)=>{
    return({
        backgroundImage:`url(${image_source})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"100%",
        width:"100%",
    })
}

export default BgImg