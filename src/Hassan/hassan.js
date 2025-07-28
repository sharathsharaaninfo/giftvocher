import react from 'react';
import { HASSAN_IMG } from '../components/Utils/imagePath';   
import GiftPage from '../components/GiftPage/giftpage';

export default function App() {
    return <GiftPage path='/HassanTerms.html' bannerImg={HASSAN_IMG.banner} mbBannerImg={HASSAN_IMG.mbBanner} campaignKey='hassan' />;
}
