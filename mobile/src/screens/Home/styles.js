import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin: 20px;
`;
export const Hearder = styled.View`
    margin-top: 24px;
`;

export const IconHeader = styled.TouchableOpacity`
    align-items: flex-end;
    margin-right: 15px;
`;

export const RevenuesTitle = styled.Text`
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #ff5057;
    margin-left: 8px;
`;
export const RevenuesValue = styled.Text`
    margin-top: 16px;
    font-weight: bold;
    margin-left: 8px;
    font-size: 36px;
    line-height: 42px;
`;

export const MainInfoContainer = styled.View`
    margin-top: 24px;
`;
export const InfoContainer = styled.View`
    height: 67px;
    background: #ff5057;
    border-radius: 21px;
    justify-content: center;
    margin-bottom: 24px;
`;
export const Info = styled.View`
    flex-direction: row;
`;
export const IconLabelContainer = styled.View`
    flex: 2;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const Label = styled.Text`
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
`;
export const Value = styled.Text`
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    flex: 2;
    text-align: right;
    margin-right: 32px;
`;

export const HistoryContainer = styled.ScrollView.attrs(() => ({
    showsVerticalScrollIndicator: false,
}))`
    margin-top: 24px;
`;
export const HistoryActivityContainer = styled.View``;
export const Title = styled.Text`
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #1a2f7b;
`;
export const DayContainer = styled.View``;
export const DayName = styled.Text`
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #1a2f7b;
    margin: 16px 0 0 8px;
`;
export const ActivityContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    height: 72px;
    background: #ffffff;
    border-radius: 15px;
    align-items: center;
    margin: 8px 0 8px 0;
`;
export const ActivityMainInfoContainer = styled.View`
    flex-direction: row;
    flex: 1;
    margin-left: 8px;
`;
export const IconContainer = styled.View`
    width: 56.82px;
    height: 52.52px;
    background: #ff5057;
    border-radius: 21px;
    align-items: center;
    justify-content: center;
`;
export const TextInfoActivity = styled.View`
    margin-left: 8px;
`;
export const Activity = styled.Text`
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #1a2f7b;
`;
export const PaymentType = styled.Text`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #a0a0a0;
`;
export const ActivityValue = styled.Text`
    font-size: 18px;
    line-height: 21px;
    color: #ff1c25;
    margin-right: 8px;
`;
