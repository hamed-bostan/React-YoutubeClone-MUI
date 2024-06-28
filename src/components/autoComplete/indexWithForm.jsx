import Autocomplete from '@mui/material/Autocomplete';
import { Tooltip } from '@mui/material';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import { useState } from 'react';
import { capitalizeFirstLetter } from '../../utility/Utilities';
import {
    StackContainer, InformationContainer, RenderInputContainer, RenderOptionContainer, StyledButton,
    StyledInformation, StyledSearchIcon, StyledTextField, StyledInputAdornment, StyledIconButton, SubmitSearchIcon, StyledAutocomplete
} from './styles';
import { theme } from '../../theme';
import { useUIContext } from '../../context/ui';
import { Form } from './form';

export const AutoComplete = ({ isFocus, setIsFocus }) => {
    const initialData = [
        { id: "1", textInformation: 'react JS tutorial' },
        { id: "2", textInformation: 'learn react with traversy media' },
        { id: "3", textInformation: 'big bang theory best scenes' },
        { id: "4", textInformation: 'jean-luc godard best films' },
        { id: "5", textInformation: "typescript crash course" },
        { id: "6", textInformation: "hamed" },
    ]

    const [storedData, setStoredData] = useState(initialData)
    const { isDesktopScreen } = useUIContext()

    const removeFunction = (id) => {
        const newStoredData = storedData.filter(item => item.id !== id)
        setStoredData(newStoredData)
    }





    const uniqueStoredData = storedData.filter((obj, index) => {
        return index === storedData.findIndex(o => obj.textInformation === o.textInformation);
    });



    return (
        <StackContainer>
            <StyledAutocomplete
                componentsProps={{
                    popper: {
                        style: {
                            width: isDesktopScreen && '31.5%',
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
                    <Form isFocus={isFocus} setIsFocus={setIsFocus} params={params} setStoredData={setStoredData} storedData={storedData} />
                )}
                ListboxProps={{
                    style: {
                        maxHeight: '20rem',
                        padding: "1rem 0",
                        background: theme.palette.primary.light,
                    },
                }}
            />
        </StackContainer >
    );
}

