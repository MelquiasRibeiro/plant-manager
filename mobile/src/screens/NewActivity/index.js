/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Hearder,
    IconHeader,
    Title,
    FormContainer,
    Label,
    NormalGroup,
    InputDescription,
    PickerStyle,
    DubleColumContainer,
    InputGruopPrice,
    PriceInput,
    PaymentTypeGroup,
    UpLineLinabelsContainer,
    Line,
    AddButton,
    DonwLineLineContainer,
    BlankView,
} from './styles';

import SubmitButton from '../../components/SubmitButton';

const NewActivity = () => {
    const [isSell, setIsSell] = useState(false);
    const [paymentType, setPaymentType] = useState(0);
    const [note, setNote] = useState('');
    const [price, setPrice] = useState(0);
    const [saleItems, setSaleItems] = useState([
        {
            id: 0,
            salePrice: 0,
        },
    ]);

    function addNewItem() {
        setSaleItems([...saleItems, { id: 0, salePrice: 0 }]);
    }
    function setItemValue(field, position, value) {
        const updatePrdductItems = saleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setSaleItems(updatePrdductItems);
    }

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }
    function handleGoToSucess() {
        navigation.navigate('sucess');
    }

    function sendDate() {
        console.log({
            isSell,
            saleItems,
            payment_type: paymentType,
            note,
        });
        handleGoToSucess();
    }

    const produtos = [
        {
            id: 1,
            name: 'suculenta Pote 1',
        },
        {
            id: 2,
            name: 'suculenta Pote 2',
        },
        {
            id: 3,
            name: 'suculenta Pote 3',
        },
        {
            id: 4,
            name: 'suculenta Pote 4',
        },
        {
            id: 5,
            name: 'suculenta Pote 5',
        },
        {
            id: 6,
            name: 'suculenta Pote 6',
        },
        {
            id: 7,
            name: 'suculenta Pote 7',
        },
        {
            id: 8,
            name: 'suculenta Pote 8',
        },
        {
            id: 9,
            name: 'suculenta Pote 9',
        },
        {
            id: 10,
            name: 'suculenta Pote 10',
        },
        {
            id: 11,
            name: 'suculenta Pote 11',
        },
        {
            id: 12,
            name: 'suculenta Pote 12',
        },
        {
            id: 13,
            name: 'suculenta Pote 13',
        },
        {
            id: 14,
            name: 'suculenta Pote 14',
        },
        {
            id: 15,
            name: 'suculenta Pote 15',
        },
    ];

    return (
        <Container>
            <Hearder>
                <IconHeader onPress={handleGoBack}>
                    <Feather name="arrow-left" size={28} color="#1A2F7B" />
                </IconHeader>
                <Title>Cadastrar movimentação</Title>
            </Hearder>
            <FormContainer>
                <NormalGroup>
                    <Label>{'     '}Operação</Label>
                    <PickerStyle>
                        <Picker
                            selectedValue={isSell}
                            style={{
                                height: 40,
                                color: '#031a6e',
                            }}
                            onValueChange={(itemValue) => setIsSell(itemValue)}
                        >
                            <Picker.Item label="Venda" value />
                            <Picker.Item label="Compra" value={false} />
                        </Picker>
                    </PickerStyle>
                </NormalGroup>
                {isSell ? (
                    <>
                        <NormalGroup>
                            <Label>{'     '}Descrição</Label>
                            <InputDescription
                                value={note}
                                onChangeText={(description) =>
                                    setNote(description)
                                }
                            />
                        </NormalGroup>
                        <PaymentTypeGroup>
                            <Label>{'     '} Pagamento</Label>
                            <PickerStyle>
                                <Picker
                                    selectedValue={paymentType}
                                    style={{
                                        height: 40,
                                        color: '#031a6e',
                                    }}
                                    onValueChange={(itemValue) =>
                                        setPaymentType(itemValue)
                                    }
                                >
                                    <Picker.Item label="Dinheiro" value={1} />
                                    <Picker.Item label="Cartão" value={2} />
                                    <Picker.Item label="Outro" value={3} />
                                </Picker>
                            </PickerStyle>
                        </PaymentTypeGroup>
                        <UpLineLinabelsContainer>
                            <Label>{'     '}PRODUTOS</Label>
                            <AddButton onPress={addNewItem}>
                                <Label>+ Novo</Label>
                            </AddButton>
                        </UpLineLinabelsContainer>
                        <Line />
                        <DonwLineLineContainer>
                            {saleItems.map((item, index) => {
                                return (
                                    <>
                                        <NormalGroup>
                                            <Label>{'     '}Item</Label>
                                            <PickerStyle>
                                                <Picker
                                                    selectedValue={item.id}
                                                    style={{
                                                        height: 40,
                                                        color: '#031a6e',
                                                    }}
                                                    onValueChange={(
                                                        itemValue
                                                    ) =>
                                                        setItemValue(
                                                            'id',
                                                            index,
                                                            itemValue
                                                        )
                                                    }
                                                >
                                                    {produtos.map((product) => {
                                                        return (
                                                            <Picker.Item
                                                                key={product.id}
                                                                label={
                                                                    product.name
                                                                }
                                                                value={
                                                                    product.id
                                                                }
                                                            />
                                                        );
                                                    })}
                                                </Picker>
                                            </PickerStyle>
                                        </NormalGroup>
                                        <DubleColumContainer>
                                            <InputGruopPrice>
                                                <Label>{'     '}Preço</Label>
                                                <PriceInput
                                                    value={item.salePrice}
                                                    onChangeText={(Thisprice) =>
                                                        setItemValue(
                                                            'salePrice',
                                                            index,
                                                            Thisprice
                                                        )
                                                    }
                                                />
                                            </InputGruopPrice>
                                            <BlankView />
                                        </DubleColumContainer>
                                    </>
                                );
                            })}
                        </DonwLineLineContainer>
                    </>
                ) : (
                    <>
                        <NormalGroup>
                            <Label>{'     '}Descrição</Label>
                            <InputDescription
                                value={note}
                                onChangeText={(description) =>
                                    setNote(description)
                                }
                            />
                        </NormalGroup>
                        <DubleColumContainer>
                            <InputGruopPrice>
                                <Label>{'     '}Preço</Label>
                                <PriceInput
                                    value={price}
                                    onChangeText={(Itemprice) =>
                                        setPrice(Itemprice)
                                    }
                                />
                            </InputGruopPrice>
                            <PaymentTypeGroup>
                                <Label>{'     '} Pagamento</Label>
                                <PickerStyle>
                                    <Picker
                                        selectedValue={paymentType}
                                        style={{
                                            height: 40,
                                            color: '#031a6e',
                                        }}
                                        onValueChange={(itemValue) =>
                                            setPaymentType(itemValue)
                                        }
                                    >
                                        <Picker.Item
                                            label="Dinheiro"
                                            value={1}
                                        />
                                        <Picker.Item label="Cartão" value={2} />
                                        <Picker.Item label="Outro" value={3} />
                                    </Picker>
                                </PickerStyle>
                            </PaymentTypeGroup>
                        </DubleColumContainer>
                    </>
                )}

                <SubmitButton text="Cadastrar" onPress={sendDate} />
            </FormContainer>
        </Container>
    );
};

export default NewActivity;
