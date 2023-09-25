import React, { useState, useEffect } from 'react'

function withPosts(Component, getPosts) {
  return function (props) {
    const [posts, setPost] = useState([])

    useEffect(() => {
      setPost(getPosts())
    }, [])

    return <Component posts={posts} {...props} />
  }
}

export default withPosts
