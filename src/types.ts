type Rating = {
    rate: number,
    count: number
}

export type Product = {
    id: number,
    image: string,
    title: string,
    price: number,
    category: string,
    description: string,
    rating: Rating,
    isFav: boolean
}

export type ProductData = {
    product: Product,
    productQuantity: number
}
