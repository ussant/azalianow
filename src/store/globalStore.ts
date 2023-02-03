import {makeAutoObservable} from "mobx";
import {Product, ProductData} from "@/types";

class GlobalStore {
    private _cart = <Array<ProductData>>[];
    private _favList = <Array<Product>>[];
    private _products = <Array<Product>>[]

    constructor() {
        makeAutoObservable(this);
    }

    updateProductFav(id: number, state: boolean): void {
        const cIndex = this.products.findIndex(product => product.id === id)

        if (cIndex !== -1) {
            this._products[cIndex].isFav = state;
        }
    }

    get products(): Array<Product> {
        return this._products
    }

    setProducts(products: Array<Product>) {
        this._products = products
    }

    get cart(): Array<ProductData> {
        return this._cart
    }

    setCart(productData: ProductData): void {
        const cProduct = this.cart.findIndex(product => product.product.id === productData.product.id)
        if (cProduct !== -1) {
            this._cart[cProduct].productQuantity += productData.productQuantity
            return
        }
        this.cart.push(productData)
    }

    get favList(): Array<Product> {
        return this._favList
    }

    deleteProductFromFavList(id: number): void {
        const cIndex = this.favList.findIndex(product => product.id === id)

        if (cIndex !== -1) {
            this._favList.splice(cIndex, 1)
        }
    }

    setFavList(product: Product): void {
        this._favList.push(product)
    }
}

export const globalStore = new GlobalStore()
