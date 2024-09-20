'use client'

import React, { useState } from 'react'
import Popover from '@/components/Popover'
import Media from '@/components/Media'
import { BLOG_HOME_PAGE } from '@/constants/links'
import { Post } from '@/types/postDetailPageType'
import { Share } from './index.style'
import Notification from '@/components/Notification'

export default function ShareMedia({ post }: { post: any }) {
  const [isShowNotification, setIsShowNotification] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <>
      <Popover
        placement="topRight"
        transition="slide bottom-10"
        content={
          <Media
            url={`${BLOG_HOME_PAGE}/${post.attributes.slug}`}
            setIsShowNotification={() => setIsShowNotification(true)}
            setMessage={setMessage}
          />
        }
      >
        <Share>
          <span>Share</span>
          <picture>
            <img src="/share.svg" className="default" alt="" loading="lazy" />
            <img
              src="/share-active.svg"
              className="active"
              alt=""
              loading="lazy"
            />
          </picture>
        </Share>
      </Popover>
      {isShowNotification && (
        <Notification
          onClose={() => setIsShowNotification(false)}
          message={message}
          type="success"
        />
      )}
    </>
  )
}
