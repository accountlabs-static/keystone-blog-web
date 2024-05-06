import React, { FC } from 'react'
import { MediaWrapper } from './index.style'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'
import Image from 'next/image'

interface MediaProps {
  url: string,
  setIsShowNotification: Function,
  setMessage: Function,
}

const Media: FC<MediaProps> = ({ url, setIsShowNotification, setMessage }) => {
  const copyLink = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setIsShowNotification()
        setMessage('Link copied!')
      })
      .catch((e) => {
        setIsShowNotification()
        setMessage('Copy link failed!')
      })
  }
  return (
    <MediaWrapper>
      <TwitterShareButton url={url}>
        <Image src="/twitter-circle.svg" alt="twitter" width={24} height={24}/>
      </TwitterShareButton>
      <FacebookShareButton url={url}>
        <Image src="/facebook-circle.svg" alt="facebook" width={24} height={24} />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <Image src="/linkedin-circle.svg" alt="linkedin" width={24} height={24}/>
      </LinkedinShareButton>
      <Image src="/link-circle.svg" alt="copy link" onClick={copyLink} width={24} height={24}/>
    </MediaWrapper>
  )
}

export default Media
