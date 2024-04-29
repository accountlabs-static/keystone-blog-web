import React from 'react'
import { render, screen } from '@testing-library/react'
import PostDetail from './index.page'
import '@testing-library/jest-dom'
import { getPublishTime } from './utils'

describe('<PostDetail />', () => {
  test('renders the example component', () => {
    const mockPost = {
      body_text: 'This is a post',
      title: 'title',
      category: 'Bitcoin',
      createdAt: '2024-03-20T05:30:57.799Z',
      updatedAt: '2024-03-20T05:30:57.799Z',
      publishedAt: '2024-03-20T05:30:57.799Z',
      locale: 'en',
      slug: 'this-is-a-post',
      hero_image: {
        data: {
          id: '1',
          attributes: {
            name: 'keystone',
            url: 'keyst.one',
          },
        },
      },
      published_at: '2024-03-20',
    }
    render(<PostDetail post={mockPost} />)
    const postDetail = screen.getByText(mockPost.title)
    expect(postDetail).toBeInTheDocument()
  })

  test('should get correct time format', () => {
    const publishedAt = '2024-03-20T05:30:57.799Z'
    const publishTime = 'Mar 20, 2024'
    expect(getPublishTime(publishedAt)).toEqual(publishTime)
  })
})
