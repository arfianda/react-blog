import React, { useState } from 'react'
import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'Mana sprei gratis yang kau janjikan itu hah',
        desc: 'Aku mau sprei gratis',
        authorId: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'business',
        title: 'Sekolah itu skem Ayo main kripto',
        desc: 'Mekleren lu warna apa bosh',
        authorId: 1
    },

]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
        {
            posts.map(({id, thumbnail, category, title, description, authorID})=> <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID}/>)
        }
    </section>
  )
}

export default Posts