/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
    Wrapper,
    SucessIcon,
    ContinueBuntton,
    TextButton,
    Instructions,
} from './styles';

const Sucess = () => {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <Wrapper>
            <Instructions>Registro realizado com sucesso!</Instructions>
            <SucessIcon>
                <AntDesign name="checkcircleo" size={150} color="#ff5057" />
            </SucessIcon>
            <ContinueBuntton onPress={handleGoBack}>
                <TextButton>Continuar</TextButton>
            </ContinueBuntton>
        </Wrapper>
    );
};

export default Sucess;
