import react from 'react';
import { HOODI_IMG } from '../components/Utils/imagePath';
import GiftPage from '../components/GiftPage/giftpage';

export default function App() {
    return <GiftPage path='/HoodiTerms.html' bannerImg={HOODI_IMG.banner} mbBannerImg={HOODI_IMG.mbBanner} campaignKey='hoodi' />;
}   