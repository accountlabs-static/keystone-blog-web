import React, { FC } from 'react'
import {
  Description,
  Explore,
  Links,
  MainSiteInfo,
  MainSiteModuleWrapper,
  Title,
} from './index.style'
import Image from 'next/image'
import ArrowRight from '../ArrowRight'
import {
  DISCORD,
  IMAGE_CDN,
  MAIN_SITE,
  REDDIT,
  TELEGRAM,
  TWITTER,
} from '../../constants/links'

const mediaLogo = [
  {
    mediaName: 'twitter',
    logo: '/mainSiteModule/twitter.svg',
    logoC: '/mainSiteModule/twitter_c.svg',
    link: TWITTER,
  },
  {
    mediaName: 'discord',
    curr: '/mainSiteModule/discord.svg',
    logo: '/mainSiteModule/discord.svg',
    logoC: '/mainSiteModule/discord_c.svg',
    link: DISCORD,
  },
  {
    mediaName: 'telegram',
    logo: '/mainSiteModule/telegram.svg',
    logoC: '/mainSiteModule/telegram_c.svg',
    link: TELEGRAM,
  },
  {
    mediaName: 'reddit',
    logo: '/mainSiteModule/reddit.svg',
    logoC: '/mainSiteModule/reddit_c.svg',
    link: REDDIT,
  },
]
const MainSiteModule: FC = () => {
  return (
    <MainSiteModuleWrapper>
      <MainSiteInfo>
        <Links>
          {mediaLogo.map((media) => (
            <a href={media.link} key={media.mediaName}>
              <Image
                src={media.logo}
                height={32}
                width={32}
                alt={media.mediaName}
              />
              <Image
                className="hovered"
                src={media.logoC}
                height={32}
                width={32}
                alt={media.mediaName}
              />
            </a>
          ))}
        </Links>
        <Title>Keystone Hardware Wallet</Title>
        <Description>Full Open Source</Description>
        <Explore href={MAIN_SITE}>
          Explore Keystone
          <ArrowRight height="18" width="18" />
        </Explore>
      </MainSiteInfo>
      <Image
        src={`${IMAGE_CDN}/k3.png`}
        alt="keystone"
        width={320}
        height={320}
        unoptimized={true}
      />
    </MainSiteModuleWrapper>
  )
}

export default MainSiteModule
