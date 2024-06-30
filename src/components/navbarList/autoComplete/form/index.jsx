import { Tooltip } from "@mui/material"
import { v4 as uuid } from 'uuid'
import { RenderInputContainer, StyledIconButton, StyledInputAdornment, StyledSearchIcon, StyledTextField, SubmitSearchIcon } from "../styles"
import { useState } from "react"
import { useUIContext } from "../../../../context/ui"

export const Form = ({ params, setStoredData, storedData }) => {
    const [searchValue, setSearchValue] = useState("")
    const { isSearchBarFocused, setIsSearchBarFocused, } = useUIContext()


    const handleFucos = () => {
        setIsSearchBarFocused(true)
    }

    const handleBlur = () => {
        setIsSearchBarFocused(false)
    }

    const handleChange = (e) => {
        const value = e.target.value
        setSearchValue(value)
    }


    const handleSubmitWithPush = (e) => {
        // push method mutates the data
        e.preventDefault()
        if (searchValue.trim() !== "") {
            storedData.push({
                id: uuid(),
                textInformation: searchValue
            })
        }
        setSearchValue("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchValue.trim() !== "") {
            setStoredData([
                { id: uuid(), textInformation: searchValue },
                ...storedData,
            ]
            );
        }
        setSearchValue("")
    }

    return (
        <form onSubmit={handleSubmit} >
            <RenderInputContainer>

                <StyledTextField
                    variant='standard'
                    placeholder='Serach'
                    onFocus={handleFucos}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    {...params}
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        disableUnderline: true,
                        startAdornment: (
                            <StyledInputAdornment position="start" isSearchBarFocused={isSearchBarFocused}>
                                {isSearchBarFocused && <StyledSearchIcon />}
                            </StyledInputAdornment>
                        ),
                    }} />
                <Tooltip title='Search'>
                    <StyledIconButton type='submit' disableRipple >
                        <SubmitSearchIcon />
                    </StyledIconButton>
                </Tooltip>

            </RenderInputContainer>
        </form>
    )
}
