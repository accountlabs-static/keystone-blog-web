import React, { FC, useState } from 'react'
import { MediaWrapper } from './index.style'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'
import Image from 'next/image'

const Media: FC<{ url: string }> = ({ url }) => {
  const [isCopied, setIsCopied] = useState(false)
  const copyLink = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => setIsCopied(true))
      .catch((e) => setIsCopied(false))
  }
  return (
    <MediaWrapper>
      <FacebookShareButton url={url}>
        <Image src="/facebook-circle.svg" alt="facebook" width={24} height={24} />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <Image src="/twitter-circle.svg" alt="twitter" width={24} height={24}/>
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <Image src="/linkedin-circle.svg" alt="linkedin" width={24} height={24}/>
      </LinkedinShareButton>
      <Image src="/link-circle.svg" alt="copy link" onClick={copyLink} width={24} height={24}/>
    </MediaWrapper>
  )
}

export default Media
