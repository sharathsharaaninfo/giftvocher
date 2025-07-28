import react from 'react';
import { UDUPI_IMG } from '../components/Utils/imagePath';
import GiftPage from '../components/GiftPage/giftpage';

export default function App() {
    return <GiftPage path='/conditions.html' bannerImg={UDUPI_IMG.banner} mbBannerImg={UDUPI_IMG.mbBanner} campaignKey='udupi' />;
}
