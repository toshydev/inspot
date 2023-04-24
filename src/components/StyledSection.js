import styled, { css } from "styled-components";

const StyledSection = styled.section`
  padding: 1rem;

  ${({ variant }) => {
    if (variant === "links") {
      return css`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        padding: 0;
        width: 5rem;
        gap: 0.3rem;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "detail") {
      return css`
        grid-template: repeat(7, 1fr) / repeat(4, 1fr);
      `;
    }
  }}

${({ variant }) => {
    if (variant === "search") {
      return css`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 0;
        padding-bottom: 0.5rem;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "filter") {
      return css`
        display: grid;
        grid-template: repeat(2, 1fr) / repeat(3, 1fr);
        gap: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        padding-bottom: 0.5rem;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "filter favorite") {
      return css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
        width: 90%;
        padding: 0;
        padding-bottom: 0.5rem;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "tags") {
      return css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        padding: 0;
        margin-bottom: 1rem;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "heading preview") {
      return css`
        grid-row: 5;
        grid-column: 1 / 7;
        margin: auto;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "picture") {
      return css`
        grid-row: 1 / 3;
        grid-column: 1 / 4;
        margin: auto;
        padding: 0.5rem;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "picture preview") {
      return css`
        grid-row: 1 / 4;
        grid-column: 1 / 7;
        padding: 0;
        margin: auto;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "rating") {
      return css`
        grid-row: 1 / 3;
        grid-column: 4 / 6;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "datetime preview") {
      return css`
        grid-row: 1;
        grid-column: 1 / 3;
        z-index: 1;
        background: white;
        border-radius: 0 0 50px 0;
        height: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "datetime") {
      return css`
        grid-row: 1;
        grid-column: 1 / 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "city preview") {
      return css`
        grid-row: 1;
        grid-column: 1 / 4;
        z-index: 1;
        background: white;
        border-radius: 0 0 50px 0;
        height: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "numbers") {
      return css`
        grid-row: 1 / 3;
        grid-column: 6 / 7;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "address") {
      return css`
        grid-row: 4 / 5;
        grid-column: 1 / 5;
        font-weight: bold;
        text-align: center;
        margin: auto;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "favorite") {
      return css`
        grid-row: 3 / 6;
        grid-column: 5 / 7;
        margin: auto;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "favorite preview") {
      return css`
        grid-row: 3;
        grid-column: 5;
        padding: 0;
        margin: auto;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "widget") {
      return css`
        grid-row: 6 / 8;
        grid-column: 1 / 7;
        width: 100%;
        height: 3rem;
        padding: 0.5rem;
        background: #f0f0f0;
        display: flex;
        flex-direction: column;
        align-items: center;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "widget preview") {
      return css`
        padding: 0;
        grid-row: 4;
        grid-column: 1 / 7;
        width: 100%;
        background: #f0f0f0;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "widget preview venue") {
      return css`
        padding: 0.5rem;
        grid-row: 4;
        grid-column: 1 / 7;
        width: 100%;
        background: #f0f0f0;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "more") {
      return css`
        grid-row: 5;
        grid-column: 2 / 4;
        width: 100%;
        background: #f0f0f0;
        border-radius: 50px;
        padding: 0.1rem;
        margin: auto;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "review buttons") {
      return css`
        grid-row: 1;
        grid-column: 5 / 7;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        background: #f0f0f0;
        border-radius: 5px;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "review rating") {
      return css`
        grid-row: 1;
        grid-column: 3 / 5;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.2rem;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "review title") {
      return css`
        grid-row: 2;
        grid-column: 1 / 7;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "review user") {
      return css`
        grid-row: 1;
        grid-column: 1 / 3;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.2rem;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "review text") {
      return css`
        grid-row: 3;
        grid-column: 1 / 7;
        padding: 0;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "review attended") {
      return css`
        grid-row: 4;
        grid-column: 1 / 3;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
      `;
    }
  }}

${({ variant }) => {
    if (variant === "review date") {
      return css`
        grid-row: 4;
        grid-column: 4 / 7;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        margin-left: auto;
        background: #f0f0f0;
        border-radius: 5px;
      `;
    }
  }}

${({ gap }) => {
    return css`
      gap: ${gap};
    `;
  }}

${({ divider }) => {
    if (divider) {
      return css`
        border-bottom: 1px solid #c0c0c0;
      `;
    }
  }}
`;

export default StyledSection;
