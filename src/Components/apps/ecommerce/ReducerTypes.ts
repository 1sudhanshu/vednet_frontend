export interface bookMarkType {
    id: number,
    fillstar: boolean,
    image: string,
    title: string,
    website_url: string,
    desc: string,
    collection: string
}



interface valueInterface {
    min: number, max: number
}
export interface filterInterface {
    color: string
    searchBy:string
    value: valueInterface,
    sortBy: string,
    category: string[],
    brand: string[]

}
interface FilterReducerType {
    IsFilter?: boolean,
    filter?: any
    colClassName: number
    listView: boolean
    sideBarOn: boolean

}

interface variantsInterface {
    color: string
    images: string
}
export interface productItemInterface {
    id: number,
    img: string,
    name: string
    note: string
    discription: string
    discountPrice: string
    status: string
    price: number,
    stock: string,
    review: string
    category: string
    colors: string[]
    size: string[]
    tags: string[]
    variants: variantsInterface[]
    ribbonClassName?: string
}

export interface ProductReducerType {
    productItem: [] | productItemInterface[],
    symbol: string
    isVertical: boolean
}
export interface EcommerceRootState {
    FilterReducer: FilterReducerType
    ProductReducer: ProductReducerType
    CartReducer: CartReducerType
}

interface CartReducerType {
    cart: cartType[]
}
interface variantsType {
    color: string
    images: string
}
export interface cartType {
    variants: variantsType[]
    qty?: any, 
    sum?: number
    id: number
    img: string
    name: string
    note: string
    discription: string
    discountPrice: string
    price: number
    status: string
    ribbonClassName?: string
    stock: string
    review: string
    rating: number
    category: string
    colors: string[]
    size: string[]
    tags: string[]
}