import { Box } from '@mui/material';
import * as React from 'react';
import { HeaderDesktop } from './header-desktop';
import { HeaderMobile } from './header-mobile';

export function Header () {
  return (
    <Box component="header" py={2} textAlign={ 'center' }>
        <HeaderDesktop />
        <HeaderMobile />
    </Box>
  );
}
