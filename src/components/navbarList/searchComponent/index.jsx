import { useUIContext } from "../../../context/ui"
import { AutoComplete } from "../../autoComplete"
import { MicComponent } from "../micComponent"
import { AutoCompleteContainer, SearchContainer } from "../styles"

export const SearchComponent = () => {
    const { isSearchBarFocused, isDesktopScreen, isMobileScreen } = useUIContext()

    return (
        <SearchContainer isDesktopScreen={isDesktopScreen} isMobileScreen={isMobileScreen}>
            {isDesktopScreen && <MicComponent />}
            <AutoCompleteContainer isSearchBarFocused={isSearchBarFocused}>
                <AutoComplete />
            </AutoCompleteContainer>
        </SearchContainer>
    )
}
