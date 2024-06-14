import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

export const SearchComponent = ({ isFocus, setIsFocus }) => {

  const handleFucos = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }




  return (
    <>
      <TextField
        onFocus={handleFucos}
        onBlur={handleBlur}
        onClick={handleClick}
        variant='outlined'
        placeholder='Search'
        autoComplete='off'
        sx={{
          width: '100%',
          '.MuiInputBase-input': {
            height: 40,
            padding: 0,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0,0,0,0.05)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0,0,0,0.05)',
            },
            '&.Mui-focused fieldset': {
              border: '1px solid blue'
            },
          },
        }}

        InputProps={{
          style: {
            borderRadius: 40,
            padding: 0,
          },
          startAdornment: (
            <InputAdornment position="start" sx={{ pl: isFocus && 2 }}>
              {isFocus && <SearchIcon color='error' />}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">

              <Box sx={{
                bgcolor: '#f8f8f8', height: 40, px: 2, display: 'flex', alignItems: 'center',
                borderTopRightRadius: 40, borderBottomRightRadius: 40,
                borderLeftColor: 'red'
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
