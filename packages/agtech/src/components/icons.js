import React from 'react';

export const HamburgerIcon = ({ size, color }) => {
    return (
        <svg
            height={size}
            width={size}
            color={color}
            className="opensvg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Open menu</title>
            <g fill="currentColor">
                <rect height="3" width="23" rx="1" ry="1" x=".5" y="2.5" />
                <rect height="3" width="23" rx="1" ry="1" x=".5" y="10.5" />
                <rect height="3" width="23" rx="1" ry="1" x=".5" y="18.5" />
            </g>
        </svg>
    );
};

export const CloseIcon = ({ size, color }) => {
    return (
        <svg
            height={size}
            width={size}
            viewBox="0 0 24 24"
            color={color}
            className="closesvg"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Close Menu</title>
            <g fill="currentColor">
                <path d="M14.3 12.179a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.442L12.177 9.7a.25.25 0 0 1-.354 0L2.561.442A1.5 1.5 0 0 0 .439 2.563L9.7 11.825a.25.25 0 0 1 0 .354L.439 21.442a1.5 1.5 0 0 0 2.122 2.121l9.262-9.263a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 0 0 2.122-2.121z" />
            </g>
        </svg>
    );
};

export const DarkModeIcon = ({ size, color, className }) => {
    return (
        <svg
            height={size}
            width={size}
            viewBox="0 0 29 29"
            color={color}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Darkmode</title>
            <g fill="currentColor">
                <path d="M14.3 0C6.5 0 0 6.5 0 14.3c0 7.9 6.5 14.3 14.3 14.3 7.9 0 14.3-6.5 14.3-14.3C28.7 6.5 22.2 0 14.3 0zm0 3.6c6 0 10.8 4.8 10.8 10.8 0 6-4.8 10.8-10.8 10.8V3.6z" />
            </g>
        </svg>
    );
};

export const TextSizeIcon = ({ size, color, className }) => {
    return (
        <svg
            height={size}
            width={size}
            viewBox="0 0 25 20"
            color={color}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Text Size</title>
            <g fill="currentColor">
                <path d="M10.667 2.637v15.825H8V2.637H0V0h18.667v2.637h-8zM24 9.231h-9.333v2.637H18v6.594h2.667v-6.594H24V9.231z" />
            </g>
        </svg>
    );
};

export const SearchIcon = ({ size, color, className }) => {
    return (
        <svg
            height={size}
            width={size}
            viewBox="-2 2 25 20"
            color={color}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="currentColor">
                <path
                    d="M38.710696,48.0601792 L43,52.3494831 L41.3494831,54 L37.0601792,49.710696 C35.2632422,51.1481185 32.9839107,52.0076499 30.5038249,52.0076499 C24.7027226,52.0076499 20,47.3049272 20,41.5038249 C20,35.7027226 24.7027226,31 30.5038249,31 C36.3049272,31 41.0076499,35.7027226 41.0076499,41.5038249 C41.0076499,43.9839107 40.1481185,46.2632422 38.710696,48.0601792 Z M36.3875844,47.1716785 C37.8030221,45.7026647 38.6734666,43.7048964 38.6734666,41.5038249 C38.6734666,36.9918565 35.0157934,33.3341833 30.5038249,33.3341833 C25.9918565,33.3341833 22.3341833,36.9918565 22.3341833,41.5038249 C22.3341833,46.0157934 25.9918565,49.6734666 30.5038249,49.6734666 C32.7048964,49.6734666 34.7026647,48.8030221 36.1716785,47.3875844 C36.2023931,47.347638 36.2360451,47.3092237 36.2726343,47.2726343 C36.3092237,47.2360451 36.347638,47.2023931 36.3875844,47.1716785 Z"
                    transform="translate(-20 -31)"
                />
            </g>
        </svg>
    );
};

export const AccessabilityIcon = ({ size, color }) => {
    return (
        <svg 
            height={size}
            width={size}
            viewBox="0 0 100 131.3"
            color={color}
            className="textsizesvg"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
        >
            <g fill="currentColor">
                <path d="M71.6,131.3c1,0,2.1-0.3,3.1-0.8c3.9-1.8,5.5-6.2,3.6-10.1c0,0-14.3-32.7-16.9-44.7c-1-4.2-1.6-15.3-1.8-20.5c0-1.8,1-3.4,2.6-3.9l32-9.6c3.9-1,6.2-5.5,5.2-9.4c-1-3.9-5.5-6.2-9.4-5.2c0,0-29.6,9.6-40.3,9.6c-10.4,0-39.8-9.4-39.8-9.4c-3.9-1-8.3,0.8-9.6,4.7c-1.3,4.2,1,8.6,5.2,9.6l32,9.6c1.6,0.5,2.9,2.1,2.6,3.9c-0.3,5.2-0.8,16.4-1.8,20.5c-2.6,12-16.9,44.7-16.9,44.7c-1.8,3.9,0,8.3,3.6,10.1c1,0.5,2.1,0.8,3.1,0.8c2.9,0,5.7-1.6,6.8-4.4l15.3-31.2l14.6,31.4C66.1,129.7,68.7,131.3,71.6,131.3z" />
            </g>
            <circle style={{fill: '#fff'}} cx="50.3" cy="14.6" r="14.6" />
        </svg>
    );
};