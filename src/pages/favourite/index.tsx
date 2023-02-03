import React from 'react';
import {toJS} from "mobx";
import ProductComponent from "@/pages/product";
import {globalStore} from "@/store/globalStore";
import styles from "@/pages/favourite/favourite.module.scss";

const Index = (): JSX.Element => {
    const productData = toJS(globalStore.favList);

    return (
        <>
            <div className={styles.favList}>
                Favourite List
            </div>
            <div className={styles.products}>
                {
                    productData.map(productData => (
                        <ProductComponent
                            key={productData.id}
                            product={productData}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Index;
