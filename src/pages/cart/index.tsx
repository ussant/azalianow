import React from 'react';
import {toJS} from "mobx";
import ProductComponent from "@/pages/product";
import {globalStore} from "@/store/globalStore";
import styles from './cart.module.scss'

const Index = (): JSX.Element => {
    const productData = toJS(globalStore.cart);

    return (
        <>
            <div className={styles.cart}>
                Cart
            </div>
            <div className={styles.products}>
                {
                    productData.map(productData => (
                        <ProductComponent
                            isInCart={true}
                            key={productData.product.id}
                            product={productData.product}
                            quantity={productData.productQuantity}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Index;
