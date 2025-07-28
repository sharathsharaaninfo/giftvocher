import react from 'react';
import { MADURAI_IMG } from '../components/Utils/imagePath';
import GiftPage from '../components/GiftPage/giftpage';

export default function App() {
    return <GiftPage path='/MadhuraiTerms.html' bannerImg={MADURAI_IMG.banner} mbBannerImg={MADURAI_IMG.mbBanner} campaignKey='madurai' />;
}