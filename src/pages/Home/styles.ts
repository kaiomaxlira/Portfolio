// src/pages/Home/styles.ts
import { SxProps, Theme } from '@mui/material';

export const homeStyles = {
  container: {
    padding: '20px',
    marginTop: '64px' // Altura do AppBar
  } as SxProps<Theme>,
  title: {
    color: 'primary.main',
    textAlign: 'center'
  } as SxProps<Theme>
};

// Ou se preferir estilo padrão:
// export default {
//   homeStyles: { ... }
// };