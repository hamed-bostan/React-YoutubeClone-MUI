import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Button, IconButton, InputAdornment, Typography } from '@mui/material';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import { capitalizeFirstLetter } from '../../utility/Utilities';

export const AutoCompleteComponent = ({ isFocus, setIsFocus, }) => {
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
        <Stack sx={{ width: '100%' }}>
            <Autocomplete
                componentsProps={{ popper: { style: { width: '31.5%', paddingTop: '0.5rem' } } }}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={uniqueStoredData}
                getOptionLabel={(option) => option.textInformation || ""}
                renderOption={(props, option) => (
                    <Box key={option.id}>
                        <Box
                            sx={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 1,
                                ":hover": {
                                    bgcolor: 'rgba(0,0,0,0.1)'
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}>
                                <RestoreOutlinedIcon />
                                <Typography sx={{ cursor: 'default' }}> {option.textInformation} </Typography>
                            </Box>
                            <Button
                                onClick={() => removeFunction(option.id)}
                                variant='text' disableRipple
                                sx={{
                                    textTransform: 'none',
                                    "&.MuiButtonBase-root:hover": {
                                        bgcolor: "transparent"
                                    }
                                }}
                            > {capitalizeFirstLetter("remove")}
                            </Button>
                        </Box>
                    </Box>
                )
                }

                renderInput={(params) => (
                    <form onSubmit={handleSubmit} >
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <TextField
                                variant='standard'
                                placeholder='Serach'
                                onFocus={handleFucos}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                sx={{
                                    width: '100%',
                                    '.MuiInputBase-input': {
                                        padding: 0,
                                        ml: !isFocus && 1
                                    },
                                }}
                                {...params}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                    disableUnderline: true,
                                    style: {
                                        // borderRadius: '10rem',
                                        // padding: 0,
                                    },
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ pl: isFocus && 2 }}>
                                            {isFocus && <SearchIcon sx={{ color: '#0f0f0f', cursor: 'default' }} />}
                                        </InputAdornment>
                                    ),
                                }}

                            />
                            <IconButton type='submit' disableRipple
                                sx={{
                                    bgcolor: '#f8f8f8',
                                    borderRadius: 0, borderTopRightRadius: 40, borderBottomRightRadius: 40,
                                    px: 2, borderLeft: '1px solid rgba(0,0,0,0.05)',
                                    ":hover": { bgcolor: 'rgba(0,0,0,0.1)' },
                                }} >
                                <SearchIcon sx={{
                                    color: "#0f0f0f",
                                }} />
                            </IconButton>

                        </Box>
                    </form>
                )}
                ListboxProps={
                    {
                        style: {
                            maxHeight: '20rem',
                            padding: "1rem 0",
                            background: '#fff',
                        },

                    }
                }
            />
        </Stack >
    );
}

