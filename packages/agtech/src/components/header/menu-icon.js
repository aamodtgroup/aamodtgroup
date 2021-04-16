import React from "react";

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

export const DarkModeIcon = ({ size, color }) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 29 29"
      color={color}
      className="darkmodesvg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Darkmode</title>
      <g fill="currentColor">
        <path d="M14.3 0C6.5 0 0 6.5 0 14.3c0 7.9 6.5 14.3 14.3 14.3 7.9 0 14.3-6.5 14.3-14.3C28.7 6.5 22.2 0 14.3 0zm0 3.6c6 0 10.8 4.8 10.8 10.8 0 6-4.8 10.8-10.8 10.8V3.6z" />
      </g>
    </svg>
  );
};

export const TextSizeIcon = ({ size, color }) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 25 20"
      color={color}
      className="textsizesvg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Text Size</title>
      <g fill="currentColor">
        <path d="M10.667 2.637v15.825H8V2.637H0V0h18.667v2.637h-8zM24 9.231h-9.333v2.637H18v6.594h2.667v-6.594H24V9.231z" />
      </g>
    </svg>
  );
};
