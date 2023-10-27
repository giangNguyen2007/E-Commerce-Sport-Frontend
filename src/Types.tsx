
export type User = {
    _id : String
    username: String
    email: String
    akatsuki: String
    accessToken? : String
}

// product fetched from backend : size and color in array, have not been selected by user
export interface IProduct {
    _id : string
    title : string
    desc : string
    img : string
    size: string[]
    color: string[]
    price: number
}

// product in cart : size and color have been selected and no longer in Array, key property added
export interface ICartProduct {
    _id : string
    key: string
    title : string
    img : string
    size: string
    color: string
    price: number
}

// product in cart saved in backend DB, including also quantity
export interface ICartProductBackend {
    productId : string
    key: string
    size: string
    color: string
    quantity: number
}

// cart data per user , received from backend
export interface ICartBackend {
    userId : string
    products : ICartProductBackend[]
}