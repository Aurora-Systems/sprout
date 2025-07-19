import { db } from "../api/supabase"

export const ShowImage=(value:string)=>{
    return db.storage.from("images").getPublicUrl(value).data.publicUrl
}