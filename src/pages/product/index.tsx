import React, {useState} from 'react';
import styles from "./product.module.scss"
import Image from "next/image";
import Stars from "./stars/index"
import InCartButton from "@/pages/product/inCartButton";
import ToCart from "@/pages/product/toCart";
import Favourite from "@/components/favourite";
import Hit from "@/components/hit";
import {globalStore} from "@/store/globalStore";
import {Product} from "@/types";

type ProductProps = {
    product: Product,
    isInCart?: boolean,
    quantity?: number,
}
const Index = (props: ProductProps): JSX.Element => {
    const [count, setCount] = useState<number>(0);
    const [isInCart, setInCart] = useState<boolean>(false);
    const [isFavClicked, setFavClicked] = useState<boolean>(props?.product?.isFav ?? false);

    const onFav = (): void => {
        if (isFavClicked) {
            setFavClicked(false)
            globalStore.updateProductFav(props?.product?.id, false)
            globalStore.deleteProductFromFavList(props?.product?.id)
            return
        }
        setFavClicked(true)
        globalStore.updateProductFav(props?.product?.id, true)
        globalStore.setFavList(props?.product)
    }

    const onPlus = (): void => setCount(count+1);

    const onMinus = (): boolean | void => count > 0 && setCount(count-1);

    const addToCart = async () => {
      setInCart(true)
        console.log("im here")
        await globalStore.setCart({product: props?.product, productQuantity: count})
    }

    return (
        <div className={styles.container}>
            <Image
                blurDataURL={props?.product?.image}
                src={props?.product?.image}
                alt={props?.product?.image}
                width={220}
                height={220}
            />
            {
                props?.product?.rating.count >= 300 &&
                <Hit className={styles.hit} />
            }
            <div className={styles.description}>
                <p className={styles.category}>{props?.product?.category}</p>
                <div className={styles.ratingContainer}>
                    <Stars rate={props?.product?.rating.rate} />
                    <p className={styles.ratingCount}>{`${props?.product?.rating.count} отзывов`}</p>
                </div>
            </div>
            <p className={styles.title}>{props?.product?.title}</p>
           <div className={styles.priceContainer}>
               <h2 className={styles.price}>{`${Math.round(props?.product?.price * 70)} ₽ `}</h2>
               <p className={styles.count}>/шт.</p>
           </div>
            <div className={styles.footer}>
                {
                    !props?.isInCart ? (
                            isInCart ?
                                <InCartButton /> :
                                <ToCart
                                    count={count}
                                    onPlus={onPlus}
                                    onMinus={onMinus}
                                    onClick={addToCart}
                                />
                        )
                        : (
                            <p>{`quantity ${props?.quantity}`}</p>
                        )
                }
                <Favourite isClicked={isFavClicked} onClick={onFav} />
            </div>
        </div>
    );
};

export default Index;
