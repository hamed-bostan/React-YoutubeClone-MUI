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


    return (
        <Stack sx={{ width: '100%' }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films}
                getOptionLabel={(option) => option.title}
                renderOption={(props, option) => (
                    <Box key={option.id}
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1 }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}>
                            <RestoreOutlinedIcon />
                            {option.title}
                        </Box>
                        <Button variant='text'>remove</Button>
                    </Box>
                )
                }

                renderInput={(params) => (
                    <TextField
                        variant='standard'
                        placeholder='Serach'
                        onFocus={handleFucos}
                        onBlur={handleBlur}
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
                                    {isFocus && <SearchIcon color='error' />}
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
                        }
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
