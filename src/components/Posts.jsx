import React, { useState } from 'react'
import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'BELAJARLAH SAMPAI KE NEGRI CINA',
        desc: 'Aku mau sprei gratis dan Lorem ipsum odor amet, consectetuer adipiscing elit. Tellus egestas laoreet justo himenaeos hendrerit dignissim in penatibus massa. Efficitur volutpat magna velit, dolor. ',
        authorID: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'business',
        title: 'SEKOLA ITU SKEM',
        desc: 'Mekleren lu warna apa bosh, kum hir join academy dangdut, letsgo beli mekleren, borong bitcoin crypto iss everything bruhhhhhhhhh ',
        authorID: 1
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'entertaintment',
        title: 'PENAMPAKAN AMBARUWO DI HUTAN NGAWI',
        desc: 'Hantu Ambaruwo berhasil tertangkap kamera warga yang sedang ronda di malam hari di pinggir hutan Ngawi',
        authorID: 2
    },
    {
      id: '4',
      thumbnail: Thumbnail4,
      category: 'entertaintment',
      title: 'MENGINTIP PROSES PEMBUATAN FILM AMBATRON ',
      desc: 'Film ambatron yang digadang gadang akan menjadi film terlaris di tahun ini kabarnya memakai teknologi CGI terbaru yang paling bagus',
      authorID: 4
  },
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
        <div className="container post__container">
        {
          posts.map(({id, thumbnail, category, title, desc, authorID, }) => <PostItem key={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID}/>)
        }
        </div>
    </section>
  )
}

export default Posts