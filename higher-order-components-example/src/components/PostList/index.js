import {
  getArchivedPosts,
  getPopularPosts,
  getRecentPosts,
} from '../../containers/Posts/api'
import withPosts from './withPosts'
import React from 'react'

const PostList = ({ posts }) => (
  <ol>
    {posts.map((post) => (
      <li key={post.id}>
        <a href={post.href}>{post.title}</a>
        <p>{post.description}</p>
      </li>
    ))}
  </ol>
)

export const RecentPosts = withPosts(PostList, getRecentPosts)
export const PopularPosts = withPosts(PostList, getPopularPosts)
export const ArchivedPosts = withPosts(PostList, getArchivedPosts)
export default PostList
