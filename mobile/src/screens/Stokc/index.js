/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Foundation, Entypo, FontAwesome5 } from '@expo/vector-icons';

import {
    Container,
    Hearder,
    IconHeader,
    Title,
    ListProductsContainer,
    ProductContainer,
    ProductContent,
    ProductImage,
    ProductNameAmountContainer,
    ProductName,
    ProductAmount,
    ProductPrice,
    ProductButtonEdit,
    ButtonAddNewProduct,
} from './styles';
import api from '../../services/api';

const Stock = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        api.get('/plants').then((response) => {
            setPlants(response.data.serializedPlants);
        });
    }, []);

    const navigation = useNavigation();

    function handleNavigateToNewProduct() {
        navigation.navigate('newProduct');
    }

    return (
        <Container>
            <Hearder>
                <IconHeader>
                    <Foundation name="refresh" size={28} color="#031a6e" />
                </IconHeader>
                <Title>Produtos</Title>
            </Hearder>
            <ListProductsContainer>
                {plants.map((product) => (
                    <ProductContainer key={product.id}>
                        <ProductContent>
                            <ProductImage source={{ uri: product.image_url }} />
                            <ProductNameAmountContainer>
                                <ProductName>{product.name}</ProductName>
                                <ProductAmount>
                                    {'   '}
                                    {product.Stock.amount} unidades
                                </ProductAmount>
                            </ProductNameAmountContainer>
                            <ProductPrice>R$ {product.price}</ProductPrice>
                            <ProductButtonEdit>
                                <Entypo name="edit" size={16} color="#031a6e" />
                            </ProductButtonEdit>
                        </ProductContent>
                    </ProductContainer>
                ))}
            </ListProductsContainer>
            <ButtonAddNewProduct onPress={handleNavigateToNewProduct}>
                <FontAwesome5 name="plus" size={40} color="#fafafa" />
            </ButtonAddNewProduct>
        </Container>
    );
};

export default Stock;
