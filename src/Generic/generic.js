import react from 'react';
import { GC_IMG } from '../components/Utils/imagePath';      
import GiftPage from '../components/GiftPage/giftpage';

export default function App() {
    return <GiftPage path='/GenericTerms.html' bannerImg={GC_IMG.banner} mbBannerImg={GC_IMG.mbBanner} campaignKey='generic' />;
}
