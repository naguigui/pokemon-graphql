import styled from "styled-components/native";

export const CardContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 10;
  padding-left: 10;
`;

export const CardWrapper = styled.View`
  background-color: #fff;
  height: 250;
  border-width: 1;
  border-radius: 6;
  border-color: #3e3e3f;
  align-items: center;
`;

export const CardIdText = styled.Text`
  font-size: 24;
  font-family: Helvetica;
`;

export const CardNameText = styled.Text`
  font-size: 16;
  font-family: Helvetica;
  font-weight: 500;
  margin-bottom: 10;
`;

export const CardAbilitiesText = styled.Text`
  font-size: 16;
  font-family: Helvetica;
`;

export const CardSpriteImage = styled.Image`
  width: 100;
  height: 100;
`;
