/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Feather, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
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
    PickerStyle,
} from './styles';

import SubmitButton from '../../components/SubmitButton';

const NewActivity = () => {
    const [isSell, setIsSell] = useState(false);
    const [paymentType, setPaymentType] = useState(0);

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
                <Title>Cadastrar movimentação</Title>
            </Hearder>
            <FormContainer>
                <InputGruopPrice>
                    <Label>{'     '} Operação</Label>
                    <PickerStyle>
                        <Picker
                            selectedValue={isSell}
                            style={{
                                height: 40,
                                color: '#031a6e',
                            }}
                            onValueChange={(itemValue, itemIndex) =>
                                setIsSell(itemValue)
                            }
                        >
                            <Picker.Item label="Venda" value />
                            <Picker.Item label="Compra" value={false} />
                        </Picker>
                    </PickerStyle>
                </InputGruopPrice>
                <InputGruopName>
                    <Label>{'     '} Descrição</Label>
                    <InputName />
                </InputGruopName>
                <PriceAmountContainer>
                    <InputGruopPrice>
                        <Label>{'     '} Preço</Label>
                        <PriceInput />
                    </InputGruopPrice>
                    <InputGruopPrice>
                        <Label>{'     '} Pagamento</Label>
                        <PickerStyle>
                            <Picker
                                selectedValue={paymentType}
                                style={{
                                    height: 40,
                                    color: '#031a6e',
                                }}
                                onValueChange={(itemValue, itemIndex) =>
                                    setPaymentType(itemValue)
                                }
                            >
                                <Picker.Item label="Dinheiro" value={1} />
                                <Picker.Item label="Cartão" value={2} />
                                <Picker.Item label="Outra" value={3} />
                            </Picker>
                        </PickerStyle>
                    </InputGruopPrice>
                </PriceAmountContainer>
                <SubmitButton text="Cadastrar" onPress={handleGoToSucess} />
            </FormContainer>
        </Container>
    );
};

export default NewActivity;
