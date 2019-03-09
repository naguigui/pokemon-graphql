import React, { Component } from "react";
import {
  CardContainer,
  CardWrapper,
  CardIdText,
  CardNameText,
  CardAbilitiesText,
  CardSpriteImage
} from "./Card.styled";

class Card extends Component {
  renderAbilities = () => {
    const { abilities } = this.props;
    return abilities.map((abilities, id) => (
      <CardAbilitiesText key={id}>{abilities.ability.name}</CardAbilitiesText>
    ));
  };

  renderTypes = () => {
    const { types } = this.props;
    return types.map((types, id) => (
      <CardAbilitiesText key={id}>{types.type.name}</CardAbilitiesText>
    ));
  };

  render() {
    const { id, name, image } = this.props;
    return (
      <CardContainer>
        <CardWrapper>
          <CardIdText>{`#${id}`}</CardIdText>
          <CardSpriteImage source={{ uri: image }} />
          <CardNameText>{name}</CardNameText>
          {this.renderAbilities()}
          {this.renderTypes()}
        </CardWrapper>
      </CardContainer>
    );
  }
}

export default Card;
