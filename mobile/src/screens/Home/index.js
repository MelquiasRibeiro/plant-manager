/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
    Foundation,
    FontAwesome,
    MaterialIcons,
    Feather,
} from '@expo/vector-icons';
import {
    Container,
    Hearder,
    IconHeader,
    RevenuesTitle,
    RevenuesValue,
    MainInfoContainer,
    InfoContainer,
    Info,
    IconLabelContainer,
    Label,
    Value,
    HistoryContainer,
    Title,
    DayContainer,
    DayName,
    ActivityContainer,
    ActivityMainInfoContainer,
    IconContainer,
    TextInfoActivity,
    Activity,
    PaymentType,
    ActivityValue,
    HistoryActivityContainer,
} from './styles';

const Home = () => {
    const activities = [
        {
            id: 1,
            saleItems: [
                { id: 2, salePrice: 10 },
                { id: 3, salePrice: 10 },
                { id: 4, salePrice: 50 },
            ],
            payment_type: 'Cratão de Crédito',
            note: 'Rosa do deserto',
            amount: 70,
            sale: true,
        },
        {
            id: 2,
            saleItems: [
                { id: 2, salePrice: 10 },
                { id: 3, salePrice: 10 },
                { id: 4, salePrice: 50 },
            ],
            payment_type: 'Cratão de Crédito',
            note: 'Terra e vasos',
            amount: 70,
            sale: true,
        },
        {
            id: 3,
            saleItems: [
                { id: 2, salePrice: 10 },
                { id: 3, salePrice: 10 },
                { id: 4, salePrice: 50 },
            ],
            payment_type: 'Cratão de Crédito',
            note: 'Posto de gasolina',
            amount: 70,
            sale: false,
        },
    ];

    return (
        <Container>
            <Hearder>
                <IconHeader>
                    <Foundation name="refresh" size={28} color="#031a6e" />
                </IconHeader>
                <RevenuesTitle>Faturamento Atual</RevenuesTitle>
                <RevenuesValue>R$ 5.000,00</RevenuesValue>
            </Hearder>
            <MainInfoContainer>
                <InfoContainer>
                    <Info>
                        <IconLabelContainer>
                            <FontAwesome
                                name="money"
                                size={24}
                                color="#ffffff"
                            />
                            <Label>Lucro</Label>
                        </IconLabelContainer>
                        <Value>R$5000</Value>
                    </Info>
                </InfoContainer>
                <InfoContainer>
                    <Info>
                        <IconLabelContainer>
                            <Feather name="package" size={24} color="#ffffff" />
                            <Label>Vendas</Label>
                        </IconLabelContainer>
                        <Value>R$5000</Value>
                    </Info>
                </InfoContainer>
                <InfoContainer>
                    <Info>
                        <IconLabelContainer>
                            <MaterialIcons
                                name="money-off"
                                size={24}
                                color="#ffffff"
                            />
                            <Label>Gastos</Label>
                        </IconLabelContainer>
                        <Value>R$5000</Value>
                    </Info>
                </InfoContainer>
            </MainInfoContainer>
            <HistoryContainer>
                <HistoryActivityContainer>
                    <Title>Esta semana</Title>
                    <DayContainer>
                        <DayName>Hoje</DayName>
                        {activities.map((activity) => (
                            <ActivityContainer key={activity.id}>
                                <ActivityMainInfoContainer>
                                    <IconContainer>
                                        {activity.sale ? (
                                            <Feather
                                                name="package"
                                                size={24}
                                                color="#ffffff"
                                            />
                                        ) : (
                                            <MaterialIcons
                                                name="money-off"
                                                size={24}
                                                color="#ffffff"
                                            />
                                        )}
                                    </IconContainer>
                                    <TextInfoActivity>
                                        <Activity>{activity.note} </Activity>
                                        <PaymentType>
                                            {activity.payment_type}
                                        </PaymentType>
                                    </TextInfoActivity>
                                </ActivityMainInfoContainer>
                                <ActivityValue sale={activity.sale}>
                                    R${activity.amount}
                                </ActivityValue>
                            </ActivityContainer>
                        ))}
                    </DayContainer>
                    <DayContainer>
                        <DayName>Ontem</DayName>
                        <ActivityContainer>
                            <ActivityMainInfoContainer>
                                <IconContainer>
                                    <Feather
                                        name="package"
                                        size={24}
                                        color="#ffffff"
                                    />
                                </IconContainer>
                                <TextInfoActivity>
                                    <Activity>Combustível</Activity>
                                    <PaymentType>Cartão de crédito</PaymentType>
                                </TextInfoActivity>
                            </ActivityMainInfoContainer>
                            <ActivityValue> -R$1000</ActivityValue>
                        </ActivityContainer>
                    </DayContainer>
                </HistoryActivityContainer>
            </HistoryContainer>
        </Container>
    );
};

export default Home;
