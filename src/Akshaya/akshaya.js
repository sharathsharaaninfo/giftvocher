import react from 'react';
import { AKSHAYA_IMG } from '../components/Utils/imagePath';      
import GiftPage from '../components/GiftPage/giftpage';

export default function App() {
    return <GiftPage path='/terms.html' bannerImg={AKSHAYA_IMG.banner} mbBannerImg={AKSHAYA_IMG.mbBanner} campaignKey='akshaya' />;
}
