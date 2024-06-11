import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

export const SearchComponent = ({ isFocus, setIsFocus }) => {

  return (
    <>
      <TextField
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        variant='outlined'
        placeholder='Search'
        autoComplete='off'
        sx={{
          width: '100%',
          '.MuiInputBase-input': {
            height: 40,
            padding: 0,
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
