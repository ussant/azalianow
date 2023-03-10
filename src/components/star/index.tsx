import React from 'react';
import styles from './star.module.scss'
import {Colors} from "@/const/colors";

type StarProps = {
    fill?: string
}

const Index = (props: StarProps): JSX.Element => {
    return (
        <svg
            className={styles.container}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 0L8.61892 5.12352L14 5.08673L9.62155 8.21419L11.3233 13.3101L7 10.1183L2.67674 13.3101L4.37845 8.21419L0 5.08673L5.38108 5.12352L7 0Z"
                fill={props.fill ?? Colors.mournMountainSnow}
            />
        </svg>
    );
};

export default Index;
