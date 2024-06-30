import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import { StackContainer, InformationContainer, RenderOptionContainer, StyledButton, StyledInformation } from './styles';
import { Form } from './form';
import { capitalizeFirstLetter } from '../../../utility/Utilities';
import { theme } from '../../../theme';
import { useUIContext } from '../../../context/ui';
import { Autocomplete } from '@mui/material';

export const AutoComplete = () => {
    const { isDesktopScreen, isMobileScreen, storedData, setStoredData } = useUIContext()

    const removeFunction = (id) => {
        const newStoredData = storedData.filter(item => item.id !== id)
        setStoredData(newStoredData)
    }

    const uniqueStoredData = storedData.filter((obj, index) => {
        return index === storedData.findIndex(o => obj.textInformation === o.textInformation);
    });

    return (
        <StackContainer>
            <Autocomplete
                componentsProps={{ popper: { style: { width: isDesktopScreen ? '32%' : isMobileScreen && '62%', paddingTop: '0.5rem' } } }}
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
                        <StyledButton variant='text' disableRipple onClick={() => removeFunction(option.id)}>
                            {capitalizeFirstLetter("remove")}
                        </StyledButton>
                    </RenderOptionContainer>
                )}
                renderInput={(params) => (<Form params={params} setStoredData={setStoredData} storedData={storedData} />)}
                ListboxProps={{ style: { maxHeight: '20rem', padding: "1rem 0", background: theme.palette.primary.light, } }}
            />
        </StackContainer >
    );
}

