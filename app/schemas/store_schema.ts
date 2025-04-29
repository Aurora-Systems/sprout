export interface StoreInterface{
    item_name:string,
    in_stock:number,
    category_id:number|null,
    description:string,
    image_id:string,
    price:number,
    user_id:string,
    id:number|null
}

export const store_default:StoreInterface={
    item_name:"",
    image_id:"",
    category_id:null,
    description:"",
    in_stock:0,
    price:0.00,
    user_id:"",
    id:null
}
