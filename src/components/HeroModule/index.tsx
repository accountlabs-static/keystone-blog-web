import { HeroModuleWrapper } from './index.style';
import React, { FC }  from 'react';
import { PostModel } from '../../pages/utils';
import HeroCard from '../HeroCard';
import SubHeroCard from '../SubHeroCard';

interface HeroModuleProps {
  heroPost: PostModel;
  subHeroFirst: PostModel;
  subHeroSecond: PostModel;
}
const HeroModule: FC<HeroModuleProps> = ({heroPost, subHeroFirst, subHeroSecond}) => {
  return <HeroModuleWrapper>
    <HeroCard post={heroPost} />
    <SubHeroCard post={subHeroFirst} />
    <SubHeroCard post={subHeroSecond} />
  </HeroModuleWrapper>
}

export default HeroModule;