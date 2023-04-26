import styled, { css } from "styled-components";

const StyledSection = styled.div`
  padding: 1rem;

  ${({ variant }) => {
    switch (variant) {
      case "links":
        return css`
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding: 0;
          width: 5rem;
          gap: 0.3rem;
        `;
      case "detail":
        return css`
          grid-template: repeat(7, 1fr) / repeat(4, 1fr);
        `;
      case "search":
        return css`
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 100%;
          padding: 0;
          padding-bottom: 0.5rem;
        `;
      case "filter":
        return css`
          display: grid;
          grid-template: repeat(2, 1fr) / repeat(3, 1fr);
          gap: 0.5rem;
          width: 100%;
          padding: 0.5rem;
        `;
      case "filter favorite":
        return css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
          width: 90%;
          padding: 0;
          padding-bottom: 0.5rem;
        `;
      case "tags":
        return css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0;
          margin-bottom: 1rem;
        `;
      case "heading preview":
        return css`
          grid-row: 5;
          grid-column: 1 / 7;
          margin: auto;
        `;
      case "picture":
        return css`
          grid-row: 1 / 3;
          grid-column: 1 / 4;
          margin: auto;
          padding: 0.5rem;
        `;
      case "picture preview":
        return css`
          grid-row: 1 / 4;
          grid-column: 1 / 7;
          padding: 0;
          margin: auto;
        `;
      case "rating":
        return css`
          grid-row: 1 / 3;
          grid-column: 4 / 6;
        `;
      case "datetime preview":
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
      case "datetime":
        return css`
          grid-row: 1;
          grid-column: 1 / 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `;
      case "city preview":
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
      case "numbers":
        return css`
          grid-row: 1 / 3;
          grid-column: 6 / 7;
        `;
      case "address":
        return css`
          grid-row: 4 / 5;
          grid-column: 1 / 5;
          font-weight: bold;
          text-align: center;
          margin: auto;
        `;
      case "favorite":
        return css`
          grid-row: 3 / 6;
          grid-column: 5 / 7;
          margin: auto;
        `;
      case "favorite preview":
        return css`
          grid-row: 3;
          grid-column: 5;
          padding: 0;
          margin: auto;
        `;
      case "widget":
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
      case "widget preview":
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
      case "widget preview venue":
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
      case "more":
        return css`
          grid-row: 5;
          grid-column: 2 / 4;
          width: 100%;
          background: #f0f0f0;
          border-radius: 50px;
          padding: 0.1rem;
          margin: auto;
        `;
      case "review buttons":
        return css`
          grid-row: 1;
          grid-column: 5 / 7;
          display: flex;
          align-items: center;
          padding: 0;
          background: #f0f0f0;
          border-radius: 5px;
        `;
      case "review rating":
        return css`
          grid-row: 1;
          grid-column: 3 / 5;
          display: flex;
          align-items: center;
          padding: 0.2rem;
        `;
      case "review title":
        return css`
          grid-row: 2;
          grid-column: 1 / 7;
          display: flex;
          align-items: center;
          padding: 0;
        `;
      case "review user":
        return css`
          grid-row: 1;
          grid-column: 1 / 3;
          display: flex;
          align-items: center;
          padding: 0.2rem;
        `;
      case "review text":
        return css`
          grid-row: 3;
          grid-column: 1 / 7;
          padding: 0;
        `;
      case "review attended":
        return css`
          grid-row: 4;
          grid-column: 1 / 3;
          display: flex;
          align-items: center;
          padding: 0;
        `;
      case "review date":
        return css`
          grid-row: 4;
          grid-column: 4 / 7;
          display: flex;
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
