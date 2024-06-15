import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Button, IconButton, InputAdornment, Typography } from '@mui/material';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

let nextId = 6;


export const AutoCompleteComponent = ({ isFocus, setIsFocus, }) => {
    const [searchValue, setSearchValue] = useState("")
    const [top100Films, setTop100Films] = useState([
        { id: "1", title: 'The Shawshank Redemption' },
        { id: "2", title: 'The Godfather' },
        { id: "3", title: 'The Godfather: Part II' },
        { id: "4", title: 'The Dark Knight' },
        { id: "5", title: "Schindler's List" },
    ])

    console.log(top100Films);

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

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchValue.trim() !== "") {
            top100Films.push({
                id: nextId++,
                title: searchValue
            })
        }
        setSearchValue("")
    }

    return (
        <Stack sx={{ width: '100%' }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films}
                getOptionLabel={(option) => option.title || ""}
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
                                    },
                                }}
                                {...params}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                    disableUnderline: true,
                                    style: {
                                        // borderRadius: 40,
                                        // padding: 0,
                                    },
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ pl: isFocus && 2 }}>
                                            {isFocus && <SearchIcon sx={{ color: '#0f0f0f' }} />}
                                        </InputAdornment>
                                    ),
                                }}

                            />
                            <IconButton type='submit'
                                sx={{
                                    bgcolor: 'red',
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

// const top100Films = [
//     { id: "1", title: 'The Shawshank Redemption' },
//     { id: "2", title: 'The Godfather' },
//     { id: "3", title: 'The Godfather: Part II' },
//     { id: "4", title: 'The Dark Knight' },
//     { id: "5", title: "Schindler's List" },
// ];
