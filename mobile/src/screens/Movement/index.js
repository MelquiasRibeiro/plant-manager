/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
    Foundation,
    FontAwesome5,
    Feather,
    MaterialIcons,
} from '@expo/vector-icons';

import {
    Container,
    Hearder,
    IconHeader,
    Title,
    UpLineContainer,
    NewActivity,
    RevenueContainer,
    RevenuesTitle,
    RevenuesValue,
    Line,
    RevenuesLegend,
    HistoryContainer,
    HistoryTitle,
    ActivityContainer,
    ActivityMainInfoContainer,
    IconContainer,
    TextInfoActivity,
    Info,
    Activity,
    ActivityValue,
} from './styles';

const Movement = () => {
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
            date: 'Dom 20/08/20',
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
            date: 'Dom 20/08/20',
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
            date: 'Dom 20/08/20',
        },
        {
            id: 4,
            saleItems: [
                { id: 2, salePrice: 10 },
                { id: 3, salePrice: 10 },
                { id: 4, salePrice: 50 },
            ],
            payment_type: 'Cratão de Crédito',
            note: 'Posto de gasolina',
            amount: 70,
            sale: false,
            date: 'Dom 20/08/20',
        },
        {
            id: 5,
            saleItems: [
                { id: 2, salePrice: 10 },
                { id: 3, salePrice: 10 },
                { id: 4, salePrice: 50 },
            ],
            payment_type: 'Cratão de Crédito',
            note: 'Posto de gasolina',
            amount: 70,
            sale: true,
            date: 'Dom 20/08/20',
        },
        {
            id: 6,
            saleItems: [
                { id: 2, salePrice: 10 },
                { id: 3, salePrice: 10 },
                { id: 4, salePrice: 50 },
            ],
            payment_type: 'Cratão de Crédito',
            note: 'Posto de gasolina',
            amount: 70,
            sale: false,
            date: 'Dom 20/08/20',
        },
        {
            id: 7,
            saleItems: [
                { id: 2, salePrice: 10 },
                { id: 3, salePrice: 10 },
                { id: 4, salePrice: 50 },
            ],
            payment_type: 'Cratão de Crédito',
            note: 'Posto de gasolina',
            amount: 70,
            sale: true,
            date: 'Dom 20/08/20',
        },
    ];
    return (
        <Container>
            <Hearder>
                <IconHeader>
                    <Foundation name="refresh" size={28} color="#ffffff" />
                </IconHeader>
                <Title>Entradas e saídas</Title>
                <UpLineContainer>
                    <RevenueContainer>
                        <RevenuesTitle>Faturamento </RevenuesTitle>
                        <RevenuesValue>R$ 5.000,00</RevenuesValue>
                    </RevenueContainer>
                    <NewActivity>
                        <FontAwesome5 name="plus" size={16} color="#fafafa" />
                    </NewActivity>
                </UpLineContainer>
                <Line />
                <RevenuesLegend>Referente ao mês vigente</RevenuesLegend>
            </Hearder>
            <HistoryContainer>
                <HistoryTitle>Histórico</HistoryTitle>
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
                                <Info>{activity.payment_type}</Info>
                                <Info>{activity.date}</Info>
                            </TextInfoActivity>
                        </ActivityMainInfoContainer>
                        <ActivityValue sale={activity.sale}>
                            R${activity.amount}
                        </ActivityValue>
                    </ActivityContainer>
                ))}
            </HistoryContainer>
        </Container>
    );
};

export default Movement;
