import React from 'react';

import { Container, Message } from './styles';

const SubmitButton = ({ text, onPress }) => {
    return (
        <Container onPress={onPress}>
            <Message> {text} </Message>
        </Container>
    );
};

export default SubmitButton;
