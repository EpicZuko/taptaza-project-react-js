import React, { forwardRef } from "react";
import styled from "styled-components";

const Input = forwardRef(function Input(props, ref) {
  return (
    <div>
      <InputStyled
        ref={ref}
        variant={props.variant}
        {...props}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
      />
    </div>
  );
});

export default Input;

const InputStyled = styled.input`
  width: ${(props) => (props.variant === "email" ? "368.61px" : "401px")};
  height: ${(props) => (props.variant === "email" ? "55.45px" : "46px")};
  border-radius: 10px;
  font-family: Cormorant Garamond;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.8px;
  text-align: left;
  padding: 18px 0px 18px 15px;
  outline: none;
  margin-bottom: 20px;
  border: ${(props) =>
    props.variant === "" && "2px solid rgba(193, 193, 193, 1)"};
  @media (max-width: 778px) {
    width: 400px;
  }
  @media (max-width: 432px) {
    width: 280px;
  }
`;
