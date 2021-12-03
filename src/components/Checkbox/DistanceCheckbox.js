import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '../../elements';

const DistanceCheckbox = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <React.Fragment>
      <Grid mainFlex>
        <ButtonGroup>
          {types.map((type) => (
            <ButtonToggle
              value={type}
              key={type}
              active={active === type}
              onChange={() => {
                setActive(type);
              }}
              onClick={() => {
                console.log(type);
                setActive(type);
              }}
            >
              {type}
            </ButtonToggle>
          ))}
        </ButtonGroup>
      </Grid>
    </React.Fragment>
  );
};

const types = [
  '1KM이내',
  '1KM~3KM',
  '3KM~5KM',
  '5KM 이상',
  '거리는 상관없어요',
];

const Button = styled.button``;

const ButtonToggle = styled(Button)`
  opacity: 0.4;
  width: 132px;
  height: 44px;
  margin: 6px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    color: white;
    background-color: #333333;
    border-radius: 10px
    font-size: 14px;
    `};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default DistanceCheckbox;
