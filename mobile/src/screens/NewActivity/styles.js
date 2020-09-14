import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin: 20px;
`;
export const Hearder = styled.View`
    margin-top: 24px;
`;

export const IconHeader = styled.TouchableOpacity`
    align-items: flex-start;
    margin: 8px 0 8px 0;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #031a6e;
`;

export const FormContainer = styled.ScrollView.attrs(() => ({
    showsVerticalScrollIndicator: false,
}))`
    margin-top: 32px;
`;

export const Label = styled.Text`
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #031a6e;
    margin-bottom: 8px;
`;
export const NormalGroup = styled.View`
    margin-bottom: 16px;
`;

export const PickerStyle = styled.View`
    height: 40px;
    background: #fafafa;
    border: 1px solid #ff5057;
    border-radius: 21px;
    padding: 0px 16px 0 16px;
`;
export const InputDescription = styled.TextInput.attrs(() => ({
    autoCorrect: false,
    clearTextOnFocus: true,
    placeholder: 'Suculenta pote 10',
}))`
    height: 40px;
    background: #fafafa;
    border: 1px solid #ff5057;
    border-radius: 21px;
    padding: 0px 16px 0 16px;
`;

export const DubleColumContainer = styled.View`
    flex-direction: row;
    margin-bottom: 16px;
`;

export const InputGruopPrice = styled.View`
    flex: 2;
`;

export const PaymentTypeGroup = styled.View`
    flex: 2;
`;
export const PriceInput = styled.TextInput.attrs(() => ({
    autoCorrect: false,
    clearTextOnFocus: true,
    keyboardType: 'number-pad',
    placeholder: '10,50',
    textAlign: 'center',
}))`
    height: 40px;
    background: #fafafa;
    border: 1px solid #ff5057;
    border-radius: 21px;
    text-align: center;
    padding: 0px 0px 0 0;
    flex: 1;
    margin-right: 16px;
`;
export const InputGruopType = styled.View`
    flex: 4;
    margin-left: 16px;
`;
export const UpLineLinabelsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;
`;
export const Line = styled.View`
    height: 1px;
    background: #ff5057;
`;

export const AddButton = styled.TouchableOpacity`
    padding-right: 16px;
`;

export const DonwLineLineContainer = styled.View`
    margin-top: 16px;
`;
export const BlankView = styled.View`
    flex: 2;
`;
