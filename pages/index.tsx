import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../models';
import { HeroSection, RecentPosts, FeatureWorks } from '@/components/home/index';
import Seo from '@/components/common/seo';


const Home: NextPageWithLayout = () => {
  const router = useRouter()
  return (
    <Box>
      <Seo data={{
        title: 'NextJs New Site',
        description: 'This is Demo site work by Nextjs',
        url: '',
        thumbnailUrl: '',
      }} />
       <HeroSection />
       <RecentPosts />
       <FeatureWorks />
    </Box>
  );
}

Home.Layout = MainLayout

export default Home