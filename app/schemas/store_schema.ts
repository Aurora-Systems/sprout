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

export const test_data:Array<StoreInterface> = [
    {
        item_name:"Apple Pine Hamper",
        image_id:"fffdgdg",
        category_id:342,
        description:"Please note delivery for Harare CBD with a 10KM radius is $5, additional KM will be $0.50 paid upon delivery. We will contact you to confirm delivery or you can pickup hampers",
        in_stock:10,
        price:5.00,
        user_id:"fjghjdgdjg",
        id:5
    },
    {
        item_name:"Shona Fruits Hamper",
        image_id:"fffdgdg",
        category_id:342,
        description:"Please note delivery for Harare CBD with a 10KM radius is $5, additional KM will be $0.50 paid upon delivery. We will contact you to confirm delivery or you can pickup hampers",
        in_stock:10,
        price:5.00,
        user_id:"fjghjdgdjg",
        id:5
    },
    {
        item_name:"Nkosi Hamper",
        image_id:"fffdgdg",
        category_id:342,
        description:"Please note delivery for Harare CBD with a 10KM radius is $5, additional KM will be $0.50 paid upon delivery. We will contact you to confirm delivery or you can pickup hampers",
        in_stock:10,
        price:5.00,
        user_id:"fjghjdgdjg",
        id:5
    },
]


