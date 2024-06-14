import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Button, InputAdornment, Typography } from '@mui/material';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import SearchIcon from '@mui/icons-material/Search';

export const AutoCompleteComponent = ({ isFocus, setIsFocus, }) => {
    const handleFucos = () => {
        setIsFocus(true)
    }

    const handleBlur = () => {
        setIsFocus(false)
    }


    const handleChange = (e) => {
        console.log("handle change is working");
        const value = e.target.value
        console.log(value);
    }

    return (
        <Stack sx={{ width: '100%' }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films}
                getOptionLabel={(option) => option.title}
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
                                <Typography sx={{ cursor: 'default' }}> {option.title} </Typography>
                            </Box>
                            <Button variant='text' disableRipple
                                sx={{
                                    "&.MuiButtonBase-root:hover": {
                                        bgcolor: "transparent"
                                    }
                                }}
                            > remove
                            </Button>
                        </Box>
                    </Box>
                )
                }

                renderInput={(params) => (
                    <TextField
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
                            style: {
                                borderRadius: 40,
                                padding: 0,
                            },
                            startAdornment: (
                                <InputAdornment position="start" sx={{ pl: isFocus && 2 }}>
                                    {isFocus && <SearchIcon sx={{ color: '#0f0f0f' }} />}
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            width: '100%',
                            '.MuiInputBase-input': {
                                padding: 0,
                            },
                        }}
                    />
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

const top100Films = [
    { id: "1", title: 'The Shawshank Redemption' },
    { id: "2", title: 'The Godfather' },
    { id: "3", title: 'The Godfather: Part II' },
    { id: "4", title: 'The Dark Knight' },
    { id: "5", title: "Schindler's List" },
];
