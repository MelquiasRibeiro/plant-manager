/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
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
    const [name, setName] = useState('');
    const [description, setDescription] = useState();
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState();

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }
    function handleGoToSucess() {
        navigation.navigate('sucess');
    }
    function submmti() {
        console.log({
            name,
            price,
            description,
            amount,
        });
        handleGoToSucess();
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
                    <InputName
                        value={name}
                        onChangeText={(productname) => setName(productname)}
                    />
                </InputGruopName>
                <PriceAmountContainer>
                    <InputGruopPrice>
                        <Label>{'     '} Preço</Label>
                        <PriceInput
                            value={price}
                            onChangeText={(productPrice) =>
                                setPrice(productPrice)
                            }
                        />
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
                            <AmountInput
                                value={amount}
                                onChangeText={(productAmount) =>
                                    setAmount(productAmount)
                                }
                            />
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
                    <DescriptionInput
                        value={description}
                        onChangeText={(productDescription) =>
                            setDescription(productDescription)
                        }
                    />
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
                <SubmitButton text="Cadastrar" onPress={submmti} />
            </FormContainer>
        </Container>
    );
};

export default NewProduct;
