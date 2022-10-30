import React from 'react'
import { useEffect, useState } from 'react'
// import './User.css'
import Info from './Info'
import Loading from './load'
import Pagination from './pagination'


 function User(){
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(1)

  const url = 'https://randomuser.me/api/?results=10&nat=us';

  const fetchData = async () => {
    // enable loading state while fetching data
    setLoading(true)

    // waiting for response from Api Call
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.results.length);

    // disable loading state once data is fetched
    setLoading(false)
    setData(result.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  // get first and last post index

  // if the currentPage is 1 and we have 8 post per page then the last index of the post has to 8
  const lastPostIndex = currentPage * postPerPage;

  // well explanatory enough?
  const firstPostIndex = lastPostIndex - postPerPage;

  // 
  const currentPost = data.slice(firstPostIndex, lastPostIndex)
  console.log(currentPost)

  // display loading component when data is been fetched
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  // 
  return (
    <section className="section-user">
      <Info
        data={currentPost}
      />
      <Pagination 
       totalPost={data.length}
       postPerPage={postPerPage}
       setCurrentPage={setCurrentPage}
       currentPage={currentPage}
      />
    </section>
  )
}

export default User