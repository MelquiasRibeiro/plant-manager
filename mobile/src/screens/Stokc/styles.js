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

export const Title = styled.Text`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #031a6e;
`;

export const ListProductsContainer = styled.ScrollView.attrs(() => ({
    showsVerticalScrollIndicator: false,
}))`
    margin-top: 32px;
`;
export const ProductContainer = styled.View`
    margin-bottom: 32px;
    height: 75px;
    border-bottom-color: #efefef;
    border-bottom-width: 1px;
`;
export const ProductContent = styled.View`
    flex-direction: row;
`;
export const ProductImage = styled.Image`
    border-radius: 6px;
    width: 51.54px;
    height: 50.05px;
    margin-right: 16px;
`;

export const ProductNameAmountContainer = styled.View``;
export const ProductName = styled.Text`
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #222222;
    max-width: 80px;
`;
export const ProductAmount = styled.Text`
    margin-top: 8px;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #534f4f;
`;

export const ProductPrice = styled.Text`
    flex: 1;
    margin-left: 80px;
    margin-top: 16px;
`;

export const ProductButtonEdit = styled.TouchableOpacity``;

export const ButtonAddNewProduct = styled.TouchableOpacity`
    margin-top: 550px;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    background: #ff5057;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    position: absolute;
`;
