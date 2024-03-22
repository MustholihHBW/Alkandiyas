import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getPosts, deletePost } from '../utils'
import Pagination from '../components/Pagination';



export default function SectionAdminDashboard() {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);


    async function fetchdata() {
        const data = await getPosts(search, currentPage);
        if (data !== false) {
            setPosts(data.data);
            setTotalPage(data.totalPage)
        }
    }


    async function handleDelete(id) {
        if (
            confirm("apakah anda yakin?")
        ) {
            const data = await deletePost(id)
            alert("data berhasil dihapus " + data.title.rendered)
            fetchdata()
        }
    }

    // function handle search post
    function handleSearch(e) {
        e.preventDefault();
        console.log('search')
        console.log(search)
        fetchdata();
    }

    // functon handle prev untuk pagination
    function handlePrev() {
        setCurrentPage(currentPage - 1)
    }

    // function handle next untuk pagination
    function handleNext() {
        setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        fetchdata();
    }, [currentPage])

    return (
        <section className=''>
            <div className='container py-5'>
                <p className='font-bold text-base md:text-xl mb-5'>
                    My Post
                </p>

                <div className="mb-5 text-sm md:text-base">
                    <table className='w-full flex flex-col gap-3'>


                        {
                            // jika data post lebih dari 0, maka tampilkan data post
                            posts.length > 0
                                ? posts.map((item) => {
                                    return (
                                        <tr className='flex justify-between items-center' key={item.id}>
                                            <td>{item.title.rendered}</td>
                                            <div className='flex gap-2 md:gap-4'>
                                                <td>
                                                    <NavLink to={'/admin/edit-post/' + item.id}>
                                                        <button className='bg-blue-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                                            Edit
                                                        </button>
                                                    </NavLink>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDelete(item.id)} className='bg-red-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                                        Delete
                                                    </button>
                                                </td>
                                            </div>
                                        </tr>
                                    )
                                }) : "kosong"}

                    </table>

                    {/* pagination */}
                    <Pagination currentPage={currentPage} totalPage={totalPage} handlePrev={handlePrev} handleNext={handleNext} />
                </div>
            </div>

        </section>
    )
}
