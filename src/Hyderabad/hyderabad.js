import react from 'react';
import { HYD_IMG } from '../components/Utils/imagePath';    
import GiftPage from '../components/GiftPage/giftpage';

export default function App() {
    return <GiftPage path='/HyderabadTerms.html' bannerImg={HYD_IMG.banner} mbBannerImg={HYD_IMG.mbBanner} campaignKey='hyderabad' />;
}