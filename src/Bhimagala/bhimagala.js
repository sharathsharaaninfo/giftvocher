import React from 'react'
import { BHIMAGALA_IMG } from '../components/Utils/imagePath';
import GiftPage from '../components/GiftPage/giftpage';

export default function App(){
    return <GiftPage path='/Bhimagalaterms.html' bannerImg={BHIMAGALA_IMG.banner} mbBannerImg={BHIMAGALA_IMG.mbBanner} campaignKey='bhimagala' />;
}



