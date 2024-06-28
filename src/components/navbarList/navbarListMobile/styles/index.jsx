import { styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SubmitSearchIcon = styled(SearchIcon)(({ theme }) => ({
    color: theme.palette.primary.main,
}))