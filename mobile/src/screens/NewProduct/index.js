/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Feather, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Hearder,
    IconHeader,
    Title,
    FormContainer,
    InputGruopName,
    InputName,
    Label,
    InputGruopPrice,
    PriceAmountContainer,
    PriceInput,
    InputGruopAmount,
    InputButtonsGroup,
    AmountInput,
    AmountButton,
    InputGroupDescription,
    DescriptionInput,
    InputGroupImage,
    ImageInput,
} from './styles';

import SubmitButton from '../../components/SubmitButton';

const NewProduct = () => {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }
    function handleGoToSucess() {
        navigation.navigate('sucess');
    }
    return (
        <Container>
            <Hearder>
                <IconHeader onPress={handleGoBack}>
                    <Feather name="arrow-left" size={28} color="#1A2F7B" />
                </IconHeader>
                <Title>Cadastrar um produto</Title>
            </Hearder>
            <FormContainer>
                <InputGruopName>
                    <Label>{'     '} Nome</Label>
                    <InputName />
                </InputGruopName>
                <PriceAmountContainer>
                    <InputGruopPrice>
                        <Label>{'     '} Preço</Label>
                        <PriceInput />
                    </InputGruopPrice>
                    <InputGruopAmount>
                        <Label>{'             '} Quantidade</Label>
                        <InputButtonsGroup>
                            <AmountButton>
                                <FontAwesome5
                                    name="minus"
                                    size={16}
                                    color="#fafafa"
                                />
                            </AmountButton>
                            <AmountInput />
                            <AmountButton>
                                <FontAwesome5
                                    name="plus"
                                    size={16}
                                    color="#fafafa"
                                />
                            </AmountButton>
                        </InputButtonsGroup>
                    </InputGruopAmount>
                </PriceAmountContainer>
                <InputGroupDescription>
                    <Label>{'     '} Descrição</Label>
                    <DescriptionInput />
                </InputGroupDescription>
                <InputGroupImage>
                    <Label>{'     '} Imagem</Label>
                    <ImageInput>
                        <SimpleLineIcons
                            name="picture"
                            size={32}
                            color="#ff5057"
                        />
                    </ImageInput>
                </InputGroupImage>
                <SubmitButton text="Cadastrar" onPress={handleGoToSucess} />
            </FormContainer>
        </Container>
    );
};

export default NewProduct;
