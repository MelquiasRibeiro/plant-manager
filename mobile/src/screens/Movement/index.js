/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import {
    Foundation,
    FontAwesome5,
    Feather,
    MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
import api from '../../services/api';

const Movement = () => {
    const [activities, setActivities] = useState([]);

    const navigation = useNavigation();

    function handleNavigateToNewProduct() {
        navigation.navigate('newActivity');
    }
    useEffect(() => {
        api.get('/sale').then((response) => {
            setActivities(response.data);
        });
    }, []);

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
                    <NewActivity onPress={handleNavigateToNewProduct}>
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
                                {activity.is_sell ? (
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
                                <Info />
                                <Info>{activity.createdAt}</Info>
                            </TextInfoActivity>
                        </ActivityMainInfoContainer>
                        <ActivityValue sale={activity.is_sell}>
                            R${activity.sale_price}
                        </ActivityValue>
                    </ActivityContainer>
                ))}
            </HistoryContainer>
        </Container>
    );
};

export default Movement;
