import { useUIContext } from "../../../context/ui"
import { AutoComplete } from "../autoComplete"
import { MicComponent } from "../micComponent"
import { AutoCompleteContainer, SearchContainer, SearchWraper } from "../styles"

export const SearchComponent = () => {
    const { isDesktopScreen, isMobileScreen, isSearchBarFocused } = useUIContext()

    return (
        <SearchWraper isDesktopScreen={isDesktopScreen}>
            <SearchContainer isDesktopScreen={isDesktopScreen} isMobileScreen={isMobileScreen} isSearchBarFocused={isSearchBarFocused}>
                <AutoCompleteContainer>
                    <AutoComplete />
                </AutoCompleteContainer>
                {isDesktopScreen && <MicComponent />}
            </SearchContainer>
        </SearchWraper>
    )
}
