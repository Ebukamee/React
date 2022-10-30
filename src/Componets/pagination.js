import React from 'react'
import '../Styles/users.css'

 export default function Pagination ({ totalPost, postPerPage, setCurrentPage, currentPage }) {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className='button'>
            {currentPage !== 1 && <button onClick={() => setCurrentPage(currentPage - 1)}> Prev</button>}
            {pages.map((page, i) => {

                const switchPage = () => {
                    setCurrentPage(page)
                }
                const style = page === currentPage ? 'pagination-btn active' : 'pagination-btn'
                return (
                    <>
                        <button key={i} className={style} onClick={switchPage} type='button'>{page}</button>
                    </>
                )
            })}
            {currentPage !== 10 && <button onClick={() => setCurrentPage(currentPage + 1)}> Next</button>}
        </div>
    )
}