type HitProps = {
    className?: string;
}

const Index = (props: HitProps): JSX.Element => {
    return (
        <svg className={props.className} width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M64 0H14L0 24H64V0Z" fill="#F23C30"/>
            <path d="M64 0L50 24H64V0Z" fill="white"/>
            <path d="M50 24L64 0H50V24Z" fill="#D9362B"/>
            <path d="M21.7227 7.46875L23.7734 10.7383L25.8242 7.46875H27.1426L24.4473 11.6934L27.207 16H25.877L23.7734 12.666L21.6699 16H20.3398L23.0996 11.6934L20.4043 7.46875H21.7227ZM29.5215 14.2832L32.4453 9.66016H33.5352V16H32.4453V11.377L29.5215 16H28.4434V9.66016H29.5215V14.2832ZM37.8594 9.66016V16H36.7695V9.66016H37.8594ZM39.9863 9.66016V10.5391H34.6836V9.66016H39.9863Z" fill="white"/>
        </svg>
    );
};

export default Index;
