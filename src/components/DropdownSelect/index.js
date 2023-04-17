import { useSelect } from "downshift";
import styled from "styled-components";
import { ExpandBig, ExpandLessBig } from "../../utils/icons";

const StyledContainer = styled.div``;

const StyledLabelContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 2rem;
  padding: 0.5rem;
  margin-right: auto;
  border-radius: 50px;
  font-weight: bold;

  &:hover {
    background: var(--accent);
    color: white;

    &:first-child {
      fill: white;
    }
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  text-align: center;
  list-style: none;
`;

const StyledListItem = styled.li`
  border-radius: 50px;
  margin-top: 0.5rem;
  &:hover {
    background: var(--accent);
    color: white;
  }
`;

export default function DropdownSelect({ items, initItem, onChangeItem }) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) =>
      onChangeItem(newSelectedItem),
  });

  return (
    <StyledContainer>
      <StyledLabelContainer {...getToggleButtonProps()} {...getLabelProps()}>
        {selectedItem ?? initItem}
        {isOpen ? <ExpandLessBig /> : <ExpandBig />}
      </StyledLabelContainer>
      <StyledList {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <StyledListItem
              aria-label={`filter by ${selectedItem}`}
              style={
                highlightedIndex === index
                  ? { backgroundColor: "#be4bdb", color: "white" }
                  : {}
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item}</span>
            </StyledListItem>
          ))}
      </StyledList>
      <div tabIndex="0" />
    </StyledContainer>
  );
}
