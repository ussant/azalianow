import React from 'react';
import styles from "./stars.module.scss"
import Star from "@/components/star";

const starsIndex = [1, 2, 3, 4, 5];

type StarProps = {
    rate: number
}

const Index = (props: StarProps): JSX.Element => {
    return (
        <div className={styles.container}>
            {
                starsIndex.map(si => {
                    if (Math.round(props.rate) < si) {
                        return <Star key={si} />
                    }
                    return <Star key={si} fill={"#F26A61"} />
                })
            }
        </div>
    );
};

export default Index;
