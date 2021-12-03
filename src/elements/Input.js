import React from 'react';
import styled from 'styled-components';

// elements
import { Text } from './index';

const Input = (props) => {
  const {
    width,
    height,
    margin,
    padding,
    radius,
    label,
    multiLine,
    type,
    placeholder,
    enterSubmit,
    _onChange,
    defaultValue,
    value,
    accept,
  } = props;

  const styles = {
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    radius: radius,
    defaultValue: defaultValue,
    value: value,
    accept: accept,
  };

  if (multiLine) {
    return (
      <>
        {label && <Text>{label}</Text>}
        <Textarea
          {...styles}
          rows={10}
          label={label}
          placeholder={placeholder}
          enterSubmit={enterSubmit}
          onChange={_onChange}
          value={value ? value : null}
          defaultValue={defaultValue ? defaultValue : null}
        />
      </>
    );
  }

  return (
    <>
      {label && <Text>{label}</Text>}
      <ElInput
        {...styles}
        // value={value}
        label={label}
        type={type}
        placeholder={placeholder}
        enterSubmit={enterSubmit}
        onChange={_onChange}
        value={value ? value : null}
        defaultValue={defaultValue ? defaultValue : null}
      />
    </>
  );
};

Input.defaultProps = {
  width: '300px',
  height: '',
  margin: '',
  padding: '',
  radius: '',
  label: '',
  type: 'text',
  value: '',
  multiLine: '',
  placeholder: '텍스트를 입력하세요',
  enterSubmit: () => {},
  _onChange: () => {},
  // value: false,
  accept: '',

  // id: '',
};

const ElInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  /* border-bottom: 1px solid gray; */
  border-radius: ${(props) => props.radius};
  :focus {
    outline: none;
    /* border-bottom: 1px solid #cb9b8c; */
  }
`;

const Textarea = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  line-height: 1.5em;
  box-sizing: border-box;
  border: none;
  resize: none;
  /* border-bottom: 1px solid gray; */
  :focus {
    outline: none;
    /* border-bottom: 1px solid #cb9b8c; */
  }
`;
export default Input;
