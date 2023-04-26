import styled, { css } from "styled-components";

const StyledForm = styled.form`
  background: #f0f0f0;
  border-radius: 12px;
  padding: 1rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ variant }) => {
    if (variant === "edit") {
      return css`
        background: #e2b8ec;
      `;
    }
  }}

  legend {
    font-weight: bold;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: none;
  }

  label {
    font-weight: bold;
  }

  input {
    border-radius: 50px;
    border: none;
    outline: 2px solid grey;
  }

  input[type="checkbox"] {
    outline: none;
  }

  textarea {
    border-radius: 8px;
    outline: 2px solid grey;
    border: none;
    resize: none;
  }

  fieldset fieldset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.1rem;
  }

  button[type="submit"] {
    width: 95%;
    border-radius: 8px;
    border: none;
    box-shadow: 0px 0px 2px hsl(0deg 0% 0% / 0.5);
    background: var(--accent);
    color: white;
    font-weight: bold;
  }
`;

export default StyledForm;
