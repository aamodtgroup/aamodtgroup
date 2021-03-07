import React from "react";
import { connect } from "frontity";
import Mailchimp from "react-mailchimp-form";

const Newsletter = ({ state }) => {
    return (
        <>
        <Mailchimp
        action='https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX'
        fields={[
            {
                name: 'EMAIL',
                placeholder: 'Email',
                type: 'email',
                required: true
            },
        ]}
        className="newsletter"
        />
        </>
    );
};

export default connect(Newsletter);