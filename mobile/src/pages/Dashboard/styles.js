import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const SelectDateContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-height: 50px;
  margin-top: 20px;
`;

export const SelectedDate = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  padding: 0 20px 0 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;
