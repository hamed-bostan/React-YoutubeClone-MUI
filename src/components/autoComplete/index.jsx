import Autocomplete from '@mui/material/Autocomplete';
import { Tooltip } from '@mui/material';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import { capitalizeFirstLetter } from '../../utility/Utilities';
import {
    StackContainer, InformationContainer, RenderInputContainer, RenderOptionContainer, StyledButton,
    StyledIconButton, StyledInformation, StyledSearchIcon, StyledTextField, SubmitSearchIcon, StyledInputAdornment,
} from './styles';

export const AutoComplete = ({ isFocus, setIsFocus, }) => {
    const initialData = [
        { id: "1", textInformation: 'react JS tutorial' },
        { id: "2", textInformation: 'learn react with traversy media' },
        { id: "3", textInformation: 'big bang theory best scenes' },
        { id: "4", textInformation: 'jean-luc godard best films' },
        { id: "5", textInformation: "typescript crash course" },
        { id: "6", textInformation: "hamed" },
    ]

    const [searchValue, setSearchValue] = useState("")
    const [storedData, setStoredData] = useState(initialData)

    const removeFunction = (id) => {
        const newStoredData = storedData.filter(item => item.id !== id)
        setStoredData(newStoredData)
    }

    const handleFucos = () => {
        setIsFocus(true)
    }

    const handleBlur = () => {
        setIsFocus(false)
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

    const uniqueStoredData = storedData.filter((obj, index) => {
        return index === storedData.findIndex(o => obj.textInformation === o.textInformation);
    });


    return (
        <StackContainer>
            <Autocomplete
                componentsProps={{
                    popper: {
                        style: {
                            width: '31.5%',
                            // width: '61%%',
                            paddingTop: '0.5rem'
                        }
                    }
                }}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={uniqueStoredData}
                getOptionLabel={(option) => option.textInformation || ""}
                renderOption={(props, option) => (
                    <RenderOptionContainer key={option.id}>
                        <InformationContainer>
                            <RestoreOutlinedIcon />
                            <StyledInformation > {option.textInformation} </StyledInformation>
                        </InformationContainer>
                        <StyledButton
                            variant='text' disableRipple
                            onClick={() => removeFunction(option.id)}>
                            {capitalizeFirstLetter("remove")}
                        </StyledButton>
                    </RenderOptionContainer>
                )}

                renderInput={(params) => (
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
                                        <StyledInputAdornment position="start" isFocus={isFocus}>
                                            {isFocus && <StyledSearchIcon />}
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
                )}
                ListboxProps={{
                    style: {
                        maxHeight: '20rem',
                        padding: "1rem 0",
                        background: '#fff',
                    },
                }}
            />
        </StackContainer >
    );
}

