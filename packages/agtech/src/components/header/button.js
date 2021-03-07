import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Button = ({ state }) => {
    return (
        <>
        <Buttons>
            <Link link="/kontakt-oss/"><button className="wp-block-button__link">Kontakt oss</button></Link>
        </Buttons>
        </>
    );
};

export default connect(Button);

const Buttons = styled.div`
    display: flex;
    align-items: center;
    border-left: 1px solid #e0e0e0;
    padding-left: 1rem;
    padding-right: 1rem;
`;