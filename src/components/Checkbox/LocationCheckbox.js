import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '../../elements';

const LocationCheckbox = () => {
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
              onClick={() => setActive(type)}
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
  '강남구',
  '강동구',
  '강북구',
  '강서구',
  '관악구',
  '광진구',
  '구로구',
  '금천구',
  '노원구',
  '마포구',
  '도봉구',
  '동대문구',
  '동작구',
  '서대문구',
  '서초구',
  '상동구',
  '성북구',
  '송파구',
  '양천구',
  '영등포구',
  '용산구',
  '은평구',
  '종로구',
  '중구',
  '중랑구',
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

export default LocationCheckbox;
