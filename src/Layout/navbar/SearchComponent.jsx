import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { useState } from 'react';

export const SearchComponent = () => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <>
      <TextField
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        variant='outlined'
        placeholder='Search'
        autoComplete='off'
        sx={{
          '.MuiInputBase-input': {
            height: 40,
            padding: 0,
            // overflowX: 'hidden',
            width: '30rem',
            // width: '60%',
            // bgcolor: 'green'
          }
        }}

        InputProps={{
          style: {
            borderRadius: 40,
            padding: 0,
          },
          startAdornment: (
            <InputAdornment position="start">
              {isFocus && <SearchIcon color='error' />}
              {/* <SearchIcon color='error' /> */}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Box sx={{
                bgcolor: '#f8f8f8', height: 40, display: 'flex', alignItems: 'center', px: 2,
                borderTopRightRadius: 40, borderBottomRightRadius: 40,
              }}>
                <SearchIcon />
              </Box>
            </InputAdornment>

          )
        }}
      />
    </>
  )
}
