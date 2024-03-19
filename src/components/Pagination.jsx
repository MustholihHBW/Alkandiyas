import React from 'react'

export default function Pagination({ currentPage = 1, totalPage = 0, handlePrev, handleNext }) {
    return (

        // membuat pagination
        < div className="join" >

            {/* tombol prev */}
            <button on onClick={handlePrev} disabled={currentPage === 1} className="join-item btn">
                «
            </button>

            {/* tombol current page */}
            <button onClick={currentPage} className="join-item btn">
                Page {currentPage}
            </button>

            {/* tombol next page */}
            <button onClick={handleNext} disabled={currentPage === totalPage} className="join-item btn">
                »
            </button>
        </div >
    )
}
