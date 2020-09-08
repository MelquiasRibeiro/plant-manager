/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
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

import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';

const Stock = () => {
    const plants = [
        {
            id: 1,
            image_url: image1,
            name: 'Cacto pote 8',
            amount: 10,
            description: 'cacto pequeno',
            price: '10',
            createdAt: '2020-08-25T15:30:25.451Z',
            updatedAt: '2020-08-25T15:30:25.451Z',
        },
        {
            id: 2,
            image_url: image2,
            name: 'Cacto pote 11',
            amount: 10,
            description: 'cacto pequeno',
            price: '10',
            createdAt: '2020-08-25T15:30:25.451Z',
            updatedAt: '2020-08-25T15:30:25.451Z',
        },
        {
            id: 3,
            image_url: image1,
            name: 'Cacto pote 8',
            amount: 10,
            description: 'cacto pequeno',
            price: '10',
            createdAt: '2020-08-25T15:30:25.451Z',
            updatedAt: '2020-08-25T15:30:25.451Z',
        },
        {
            id: 4,
            image_url: image2,
            name: 'Cacto pote 11',
            amount: 10,
            description: 'cacto pequeno',
            price: '10',
            createdAt: '2020-08-25T15:30:25.451Z',
            updatedAt: '2020-08-25T15:30:25.451Z',
        },
        {
            id: 5,
            image_url: image1,
            name: 'Cacto pote 8',
            amount: 10,
            description: 'cacto pequeno',
            price: '10',
            createdAt: '2020-08-25T15:30:25.451Z',
            updatedAt: '2020-08-25T15:30:25.451Z',
        },
        {
            id: 6,
            image_url: image2,
            name: 'Cacto pote 11',
            amount: 10,
            description: 'cacto pequeno',
            price: '10',
            createdAt: '2020-08-25T15:30:25.451Z',
            updatedAt: '2020-08-25T15:30:25.451Z',
        },
    ];

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
                            <ProductImage source={product.image_url} />
                            <ProductNameAmountContainer>
                                <ProductName>{product.name}</ProductName>
                                <ProductAmount>
                                    {'   '}
                                    {product.amount} unidades
                                </ProductAmount>
                            </ProductNameAmountContainer>
                            <ProductPrice>R$ {product.price},00</ProductPrice>
                            <ProductButtonEdit>
                                <Entypo name="edit" size={16} color="#031a6e" />
                            </ProductButtonEdit>
                        </ProductContent>
                    </ProductContainer>
                ))}
            </ListProductsContainer>
            <ButtonAddNewProduct>
                <FontAwesome5 name="plus" size={40} color="#fafafa" />
            </ButtonAddNewProduct>
        </Container>
    );
};

export default Stock;
