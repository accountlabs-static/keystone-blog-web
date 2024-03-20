import React, { FC } from 'react';
import { Description, Explore, Links, MainSiteInfo, MainSiteModuleWrapper, Title } from './index.style';
import Image from 'next/image';
import ArrowRight from '../ArrowRight';

const mediaLogo = [
  {
    mediaName: 'twitter',
    logo: '/twitter.svg',
    link: ''
  },
  {
    mediaName: 'discord',
    logo: '/discord.svg',
    link: ''
  },
  {
    mediaName: 'telegram',
    logo: '/telegram.svg',
    link: ''
  },
  {
    mediaName: 'reddit',
    logo: '/reddit.svg',
    link: ''
  }
]
const MainSiteModule: FC = () => {
  return <MainSiteModuleWrapper>
    <MainSiteInfo>
      <Links>
        {mediaLogo.map(media => (<Image src={media.logo} key={media.mediaName} height={32} width={32} alt={media.mediaName} />))}
      </Links>
      <Title>
        Keystone Hardware Wallet
      </Title>
      <Description>
        Full Open Source
      </Description>
      <Explore href={process.env.CDN_DOMAIN}>
        Explore Keystone
        <ArrowRight height='18' width='18' />
      </Explore>
    </MainSiteInfo>
    <Image src='/keystone3.png' alt='keystone' width={320} height={320} />
  </MainSiteModuleWrapper>
}

export default MainSiteModule;