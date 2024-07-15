import { AdminLayout, MainLayout } from '@/components/layout';
import { Box, Typography } from '@mui/material';
import * as React from 'react';

export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {
  return (
        <Box>
            <Typography component="h1" variant='h3' color="primary.main">About Us</Typography>
        </Box>
  );
}

AboutPage.Layout = AdminLayout

export async function getStaticProps(){
  console.log('get static props')
  
  return {
    props: {},
  }
}