import styled from 'styled-components/native';

import Button from '~/Components/Button';

export const Container = styled.View`
  display: flex;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

export const Banner = styled.Image`
  height: 150px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Content = styled.View`
  display: flex;
  background: #fff;
  margin-bottom: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 15px;
`;

export const TimeContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Time = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  margin-left: 5px;
`;

export const LocationContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Location = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  margin-left: 5px;
`;

export const OrganizerContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Organizer = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  margin-left: 5px;
`;

export const SubscriptionButton = styled(Button)`
  align-self: stretch;
  margin-top: 15px;
  background: #f94d6a;
`;
