export const drawerWidth = 240;
export const navItems = ['Home', 'About', 'Contact'];

export const styles = {
  appBar: {
    component: 'nav',
  },
  toolbar: {
    display: 'flex',
  },
  iconButton: {
    mr: 2,
    display: { sm: 'none' },
  },
  logoContainer: {
    flexGrow: 1,
    display: { xs: 'none', sm: 'block' },
    '& svg': {
      height: '40px',
      width: 'auto'
    }
  },
  mobileLogo: {
    my: 2,
    '& svg': {
      height: '40px',
      width: 'auto',
      margin: '0 auto'
    }
  },
  navBox: {
    display: { xs: 'none', sm: 'block' },
  },
  navButton: {
    color: '#fff',
  },
  drawer: {
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: drawerWidth,
    },
  },
  drawerContent: {
    textAlign: 'center',
  },
  listItemButton: {
    textAlign: 'center',
  }
};