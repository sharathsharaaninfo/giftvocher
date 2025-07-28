import React from 'react';
import { MYSURU_IMG } from '../components/Utils/imagePath';
import GiftPage from '../components/GiftPage/giftpage';

export default function App(){
    return <GiftPage path='/MysoreTerms.html' bannerImg={MYSURU_IMG.banner} mbBannerImg={MYSURU_IMG.mbBanner} campaignKey='mysuru' />;
}