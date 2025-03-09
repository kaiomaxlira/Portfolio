import { SxProps } from '@mui/material';

export const appStyles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative'
  } as SxProps,

  backgroundContainer: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: { xs: 0, sm: '50%' }, 
    height: '100%',
    zIndex: -1,
    overflow: 'hidden',
    transition: 'width 0.3s ease',
    '& svg': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      right: 0
    }
  } as SxProps,

  mainContent: {
    flex: 1,
    py: 4,
    mt: 8,
    position: 'relative',
    zIndex: 1
  } as SxProps
};