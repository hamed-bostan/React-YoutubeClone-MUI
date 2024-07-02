import { useUIContext } from '../../context/ui';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { HeadingIcons, ExploreIcons, ShowMoreItems, SubscriptionIcons, YouIcons } from '../../data/SidebarData'
import { capitalizeFirstLetter } from '../../utility/Utilities';
import { useLocation, useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
    StyledListItemButton, StyledListItemIcon, StyledListItemText, TextContainer, StyledTypography,
    StyledAvatar, StyledListContainer, StyledListItemButtonShowMore
} from './styles';

export const SidebarList = () => {
    const { isDrawerOpen, setIsDrawerOpen, isMobileScreen } = useUIContext()
    const [isShowMoreSidebar, setIsShowMoreSidebar] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const handlClick = (path) => {
        navigate(path)
        if (isMobileScreen) {
            setIsDrawerOpen(!isDrawerOpen)
        }
    }

    return (
        <>
            <StyledListContainer disablePadding isDrawerOpen={isDrawerOpen}>
                {HeadingIcons.map((item => (
                    <ListItem key={item.id} disablePadding onClick={() => handlClick(item.path)} >
                        <StyledListItemButton pathname={location.pathname} path={item.path} isDrawerOpen={isDrawerOpen} disableRipple>
                            <StyledListItemIcon isDrawerOpen={isDrawerOpen}>
                                {location.pathname == item.path ? item.iconImageFilled : item.iconImageOutlined}
                            </StyledListItemIcon>
                            <StyledListItemText primary={capitalizeFirstLetter(item.textTitle)}
                                primaryTypographyProps={{ fontSize: isDrawerOpen ? '0.875rem' : '0.625rem' }} />
                        </StyledListItemButton>
                    </ListItem>
                )))}
            </StyledListContainer>
            {isDrawerOpen && <Divider />}

            {isDrawerOpen && (
                <StyledListContainer disablePadding isDrawerOpen={isDrawerOpen}>
                    <TextContainer>
                        <StyledTypography variant='h6'>You</StyledTypography>
                        <ChevronRightIcon />
                    </TextContainer>
                    {YouIcons.map((item => (
                        <ListItem key={item.id} disablePadding onClick={() => handlClick(item.path)}>
                            <StyledListItemButton pathname={location.pathname} path={item.path} isDrawerOpen={isDrawerOpen} disableRipple>
                                <StyledListItemIcon isDrawerOpen={isDrawerOpen}>
                                    {location.pathname == item.path ? item.iconImageFilled : item.iconImageOutlined}
                                </StyledListItemIcon>
                                <StyledListItemText primary={capitalizeFirstLetter(item.textTitle)}
                                    primaryTypographyProps={{ fontSize: isDrawerOpen ? '0.875rem' : '0.625rem' }} />
                            </StyledListItemButton>
                        </ListItem>
                    )))}
                </StyledListContainer>
            )}
            {isDrawerOpen && <Divider />}

            {isDrawerOpen && (
                <>
                    <StyledListContainer disablePadding isDrawerOpen={isDrawerOpen}>
                        <TextContainer>
                            <StyledTypography variant='h6'>
                                Subscriptions</StyledTypography>
                        </TextContainer>
                        {SubscriptionIcons.map((item => (
                            <ListItem key={item.id} disablePadding onClick={() => handlClick(item.path)}>
                                <StyledListItemButton pathname={location.pathname} path={item.path} isDrawerOpen={isDrawerOpen} disableRipple>
                                    <StyledAvatar src={item.avater} />
                                    <StyledListItemText primary={capitalizeFirstLetter(item.textTitle)}
                                        primaryTypographyProps={{ fontSize: isDrawerOpen ? '0.875rem' : '0.625rem' }} />
                                </StyledListItemButton>
                            </ListItem>
                        )))}
                        {!isShowMoreSidebar && (
                            <StyledListItemButtonShowMore isDrawerOpen={isDrawerOpen} disableRipple onClick={() => setIsShowMoreSidebar(true)}>
                                <StyledListItemIcon >
                                    <KeyboardArrowDownIcon />
                                </StyledListItemIcon>
                                <StyledListItemText primary={capitalizeFirstLetter('show more')}
                                    primaryTypographyProps={{ fontSize: isDrawerOpen ? '0.875rem' : '0.625rem' }} />
                            </StyledListItemButtonShowMore>
                        )}

                        {isShowMoreSidebar && (
                            <>
                                {ShowMoreItems.map((item => (
                                    <ListItem key={item.id} disablePadding onClick={() => handlClick(item.path)} >
                                        <StyledListItemButton pathname={location.pathname} path={item.path} isDrawerOpen={isDrawerOpen} disableRipple>
                                            <StyledAvatar src={item.avater} />
                                            <StyledListItemText primary={capitalizeFirstLetter(item.textTitle)}
                                                primaryTypographyProps={{ fontSize: isDrawerOpen ? '0.875rem' : '0.625rem' }} />
                                        </StyledListItemButton>
                                    </ListItem>
                                )))}
                                <StyledListItemButtonShowMore disableRipple isDrawerOpen={isDrawerOpen} onClick={() => setIsShowMoreSidebar(false)}>
                                    <StyledListItemIcon >
                                        <KeyboardArrowUpIcon />
                                    </StyledListItemIcon>
                                    <StyledListItemText primary={capitalizeFirstLetter('show less')}
                                        primaryTypographyProps={{ fontSize: isDrawerOpen ? '0.875rem' : '0.625rem' }} />
                                </StyledListItemButtonShowMore>
                            </>
                        )}
                    </StyledListContainer>
                </>
            )}
            {isDrawerOpen && <Divider />}

            {isDrawerOpen && (
                <StyledListContainer disablePadding isDrawerOpen={isDrawerOpen}>
                    <TextContainer>
                        <StyledTypography variant='h6'>Explore</StyledTypography>
                    </TextContainer>
                    {ExploreIcons.map((item => (
                        <ListItem key={item.id} disablePadding onClick={() => handlClick(item.path)} >
                            <StyledListItemButton pathname={location.pathname} path={item.path} isDrawerOpen={isDrawerOpen} disableRipple>
                                <StyledListItemIcon isDrawerOpen={isDrawerOpen}>
                                    {location.pathname == item.path ? item.iconImageFilled : item.iconImageOutlined}
                                </StyledListItemIcon>
                                <StyledListItemText primary={capitalizeFirstLetter(item.textTitle)}
                                    primaryTypographyProps={{ fontSize: isDrawerOpen ? '0.875rem' : '0.625rem' }} />
                            </StyledListItemButton>
                        </ListItem>
                    )))}
                </StyledListContainer>
            )}
        </>
    )
}
