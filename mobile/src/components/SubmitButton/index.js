import React from 'react';

import { Container, Message } from './styles';

const SubmitButton = ({ text }) => {
    return (
        <Container>
            <Message> {text} </Message>
        </Container>
    );
};

export default SubmitButton;
