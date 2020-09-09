import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;
export const Hearder = styled.View`
    background: #ff5057;
    padding: 44px 20px 0px 20px;
`;

export const IconHeader = styled.TouchableOpacity`
    align-items: flex-end;
    margin-right: 15px;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
`;
export const UpLineContainer = styled.View`
    flex-direction: row;
    margin-top: 32px;
    align-items: center;
    justify-content: space-between;
`;
export const NewActivity = styled.TouchableOpacity`
    width: 48px;
    height: 48px;
    background: #b53e43;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;
export const RevenueContainer = styled.View``;
export const RevenuesTitle = styled.Text`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
`;
export const RevenuesValue = styled.Text`
    margin-top: 4px;
    font-weight: bold;
    margin-left: 8px;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
`;

export const Line = styled.View`
    height: 0px;
    opacity: 0.15;
    border: 1px solid #ffffff;
    margin: 16px 0 8px 0;
`;
export const RevenuesLegend = styled.Text`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    margin: 8px 0 40px 0;
`;

export const HistoryContainer = styled.ScrollView.attrs(() => ({
    showsVerticalScrollIndicator: false,
}))`
    margin: 20px 20px 0px 20px;
`;
export const HistoryActivityContainer = styled.View``;

export const HistoryTitle = styled.Text`
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #1a2f7b;
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
    justify-content: center;
`;
export const Activity = styled.Text`
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #1a2f7b;
`;
export const Info = styled.Text`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #a0a0a0;
    margin-top: 4px;
`;
export const ActivityValue = styled.Text`
    font-size: 18px;
    line-height: 21px;
    color: ${(props) => (props.sale ? '#5CBC71' : '#ff1c25')};
    margin-right: 8px;
`;
