import { LayoutProps } from '@/models/common';
import { Box, Container, Stack } from '@mui/material';
import { ReactElement } from 'react';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps): ReactElement {
  return (
    <Stack minHeight={'100vh'} >
      <Header />
        <Box component="main" flexGrow={1}>
          <Container sx={{ bgcolor:'primary.main' }}></Container>
          {children}
        </Box>
        <Footer />
    </Stack>
  );
}
