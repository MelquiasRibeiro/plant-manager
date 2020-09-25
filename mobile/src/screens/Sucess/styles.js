import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

export const Instructions = styled.Text`
    font-weight: bold;
    font-size: 32px;
    line-height: 47px;
    color: #ff5057;
    text-align: center;
`;

export const SucessIcon = styled.View`
    margin-top: 96px;
`;
export const ContinueBuntton = styled.TouchableOpacity`
    flex-direction: row;
    width: 200px;
    height: 53px;
    border-radius: 8px;
    background-color: #ff5057;
    align-items: center;
    margin-top: 96px;
    text-align: center;
`;
export const TextButton = styled.Text`
    flex: 1;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
`;
