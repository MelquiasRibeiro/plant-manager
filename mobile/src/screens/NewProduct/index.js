/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Feather, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { Modal, alert } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
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
    ModalContaner,
    ModalContainerButtons,
    ModalButton,
    ModalButtonText,
} from './styles';

import SubmitButton from '../../components/SubmitButton';
import api from '../../services/api';

const NewProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState();
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState();

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }
    function handleGoToSucess() {
        navigation.navigate('sucess');
    }
    async function submmti() {
        const data = new FormData();

        data.append('image', image);
        data.append('name', name);
        data.append('price', price);
        data.append('description', description);
        data.append('amount', amount);

        await api
            .post('/plants', data)
            .then(() => {
                handleGoToSucess();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async function imageGaleryPickerCall() {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            );

            if (status !== 'granted') {
                alert('Nós precisamos dessa permissão.');
                return;
            }
        }

        const data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
        });

        if (data.cancelled) {
            return;
        }

        if (!data.uri) {
            return;
        }

        setImage(data);
        setModalVisible(false);
    }

    async function imageCameraPickerCall() {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            );

            if (status !== 'granted') {
                alert('Nós precisamos dessa permissão.');
                return;
            }
        }

        const data = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        if (data.cancelled) {
            return;
        }

        if (!data.uri) {
            return;
        }

        setImage(data);
        setModalVisible(false);
    }

    return (
        <Container>
            <Modal
                animationType="slide"
                transparent
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <ModalContaner>
                    <ModalContainerButtons>
                        <ModalButton onPress={imageGaleryPickerCall}>
                            <SimpleLineIcons
                                name="picture"
                                size={32}
                                color="#ffff"
                            />
                            <ModalButtonText>{'  '}Galeria</ModalButtonText>
                        </ModalButton>
                        <ModalButton onPress={imageCameraPickerCall}>
                            <Feather name="camera" size={32} color="#ffff" />
                            <ModalButtonText>{'  '}Câmera</ModalButtonText>
                        </ModalButton>
                    </ModalContainerButtons>
                </ModalContaner>
            </Modal>
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
                    <ImageInput onPress={() => setModalVisible(true)}>
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
