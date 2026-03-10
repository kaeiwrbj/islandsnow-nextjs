import IslandSnowLogo from '@/components/IslandSnowLogo';
import { TopMenu } from '@/components/TopMenu';
import {FullWidthImage } from '@/components/FullWidthImage';
import { MiddleMenu } from '@/components/MiddleMenu';
import { FooterMenu } from '@/components/FooterMenu';
import './style.css';

/** The Home page. */
const Home = () => (
  <main>
    <TopMenu />
    <IslandSnowLogo />
    <MiddleMenu />
    <FullWidthImage />
    <FooterMenu />
  </main>
);

export default Home;
