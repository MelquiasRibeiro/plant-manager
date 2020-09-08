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

export const InputGruopName = styled.View``;

export const Label = styled.Text`
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #031a6e;
    margin-bottom: 8px;
`;

export const InputName = styled.TextInput.attrs(() => ({
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

export const PriceAmountContainer = styled.View`
    flex-direction: row;
    margin-top: 16px;
`;

export const InputGruopPrice = styled.View`
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
    padding: 0px 16px 0 0;
    flex: 1;
`;
export const InputGruopAmount = styled.View`
    flex: 4;
    margin-left: 16px;
`;

export const InputButtonsGroup = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const AmountInput = styled.TextInput.attrs(() => ({
    autoCorrect: false,
    clearTextOnFocus: true,
    keyboardType: 'number-pad',
    placeholder: '9',
}))`
    height: 40px;
    background: #fafafa;
    border: 1px solid #ff5057;
    border-radius: 21px;
    margin: 0 16px 0 16px;
    text-align: center;
    flex: 1;
`;
export const AmountButton = styled.TouchableOpacity`
    height: 20px;
    width: 20px;
    background: #ff5057;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const InputGroupDescription = styled.View`
    margin-top: 16px;
`;

export const DescriptionInput = styled.TextInput.attrs(() => ({
    autoCorrect: false,
    clearTextOnFocus: true,
    multiline: true,
    placeholder: 'Uma descrição sobre este Produto',
    textAlignVertical: 'top',
}))`
    height: 114px;
    background: #fafafa;
    border: 1px solid #ff5057;
    border-radius: 21px;
    padding: 8px 16px 8px 16px;
`;

export const InputGroupImage = styled.View`
    margin-top: 16px;
`;

export const ImageInput = styled.TouchableOpacity`
    height: 54px;
    align-items: center;
    justify-content: center;
    border: 1px solid #ff5057;
    border-radius: 21px;
`;
