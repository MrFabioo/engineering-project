import React from 'react';
import { Wrapper, Bar, FontContainer, Content } from './Alert.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Alert({ error }) {
  return (
    <Wrapper>
      <Bar />
      <FontContainer>
        <FontAwesomeIcon icon={solid('xmark-circle')} />
      </FontContainer>
      <Content>
        <h5>Oops! Something went wrong.</h5>
        <p>{error}</p>
      </Content>
      <FontAwesomeIcon icon={solid('xmark')} />
    </Wrapper>
  );
}
