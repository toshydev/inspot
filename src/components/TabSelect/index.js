import StyledLabel from "../StyledLabel";
import styled, { css } from "styled-components";

const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 50px;

  &:hover {
    border-radius: 50px;
    background: #e2b8ec;
  }

  ${({ variant }) => {
    if (variant === "Arts & Theatre") {
      return css`
        grid-column: 1 / 3;
        grid-row: 1;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "Film") {
      return css`
        grid-column: 3 / 4;
        grid-row: 1;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "Miscellaneous") {
      return css`
        grid-column: 1 / 2;
        grid-row: 2;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "Music") {
      return css`
        grid-column: 2 / 3;
        grid-row: 2;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "Sports") {
      return css`
        grid-column: 3 / 4;
        grid-row: 2;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "Events") {
      return css`
        grid-column: 1;
        grid-row: 1;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "Venues") {
      return css`
        grid-column: 2;
        grid-row: 1;
      `;
    }
  }}
`;

export default function TabSelect({
  children,
  variant,
  label,
  id,
  name,
  checked,
  disabled,
  onChange,
  isActive,
  text,
}) {
  return (
    <StyledTab variant={variant}>
      <StyledLabel htmlFor={id} isActive={isActive}>
        {text ? text : label}
        {children}
        <input
          id={id}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          hidden={true}
        />
      </StyledLabel>
    </StyledTab>
  );
}
