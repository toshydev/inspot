import { useEffect } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import { useMapStore } from "../../store";
import StyledInputContainer from "../StyledInputContainer";
import StyledList from "../StyledList";
import StyledListItem from "../StyledListItem";
import StyledSearchBar from "../StyledSearchBar";

export default function PlacesAutocomplete({ onAddressSelect }) {
  const isMapScriptLoaded = useMapStore((state) => state.isMapScriptLoaded);

  const { init } = usePlacesAutocomplete({ initOnMount: false });

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "DE" },
      types: ["geocode"],
    },
    debounce: 300,
    cache: 86400,
  });

  useEffect(() => {
    if (isMapScriptLoaded) {
      init();
    }
  }, [isMapScriptLoaded, init]);

  function renderSuggestions() {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <StyledListItem
          aria-label={`select location: ${main_text}`}
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
        >
          <strong style={{ margin: "1rem" }}>{main_text}</strong>
          <small style={{ marginRight: "1rem" }}>{secondary_text}</small>
        </StyledListItem>
      );
    });
  }

  return (
    <>
      <StyledInputContainer variant="places">
        <StyledSearchBar
          aria-label="location search"
          type="search"
          value={value}
          disabled={!ready}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Silicon Valley"
        />
      </StyledInputContainer>
      {status === "OK" && <StyledList>{renderSuggestions()}</StyledList>}
    </>
  );
}
