import { SxProps, Theme } from '@mui/material';

export const drawerWidth = 240;
export const navItems = ['Sobre-me', 'Preojetos', 'Experiências'];

export const styles = {
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: '0px',
    position: 'relative'
  } as SxProps,
  toolbar: {
    backgroundColor: 'transparent',
    minHeight: '64px',
    padding: '0 2rem'
  } as SxProps,
  menuButton: {
    mr: 2,
    display: { sm: 'none' },
    color: 'text.primary',
  } as SxProps,
  logoContainer: {
    flexGrow: 1,
    display: { xs: 'none', sm: 'flex' },
    alignItems: 'center',
    marginLeft: '5rem'
  } as SxProps,
  navItemsContainer: {
    display: { xs: 'none', sm: 'flex' },
    gap: '2rem',
    marginRight: '5rem'
  } as SxProps,
  navButton: {
    color: 'text.primary',
    textTransform: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
    backgroundColor: 'transparent',
    '&:hover': {
      color: '#7E3EFF',
      backgroundColor: 'transparent'
    }
  } as SxProps,
  drawer: {
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: drawerWidth,
      backgroundColor: '#ffffff',
    } as SxProps<Theme>
  } as SxProps<Theme>,
  mobileLogo: {
    my: 2,
    textAlign: 'center'
  } as SxProps,
  mobileMenuItem: {
    textAlign: 'center',
    px: 4,
    py: 2
  } as SxProps
};