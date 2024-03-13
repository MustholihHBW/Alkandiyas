import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SectionAdminDashboard() {
    return (
        <section className=''>
            <div className='container py-5'>
                <p className='font-bold text-base md:text-xl mb-5'>
                    My Post
                </p>

                <div className="mb-5 text-sm md:text-base">
                    <table className='w-full flex flex-col gap-3'>
                        {/* artikel 1 */}
                        <tr className='flex justify-between items-center'>
                            <td>artikel 1</td>
                            <div className='flex gap-2 md:gap-4'>
                                <td>
                                    <NavLink to={'/admin/edit-post'}>
                                        <button className='bg-blue-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                            Edit
                                        </button>
                                    </NavLink>
                                </td>
                                <td>
                                    <button className='bg-red-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                        Delete
                                    </button>
                                </td>
                            </div>
                        </tr>
                        {/* artikel 1 */}
                        <tr className='flex justify-between items-center'>
                            <td>artikel 1</td>
                            <div className='flex gap-2 md:gap-4'>
                                <td>
                                    <NavLink to={'/admin/edit-post'}>
                                        <button className='bg-blue-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                            Edit
                                        </button>
                                    </NavLink>
                                </td>
                                <td>
                                    <button className='bg-red-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                        Delete
                                    </button>
                                </td>
                            </div>
                        </tr>
                        {/* artikel 1 */}
                        <tr className='flex justify-between items-center'>
                            <td>artikel 1</td>
                            <div className='flex gap-2 md:gap-4'>
                                <td>
                                    <NavLink to={'/admin/edit-post'}>
                                        <button className='bg-blue-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                            Edit
                                        </button>
                                    </NavLink>
                                </td>
                                <td>
                                    <button className='bg-red-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                        Delete
                                    </button>
                                </td>
                            </div>
                        </tr>
                        {/* artikel 1 */}
                        <tr className='flex justify-between items-center'>
                            <td>artikel 1</td>
                            <div className='flex gap-2 md:gap-4'>
                                <td>
                                    <NavLink to={'/admin/edit-post'}>
                                        <button className='bg-blue-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                            Edit
                                        </button>
                                    </NavLink>
                                </td>
                                <td>
                                    <button className='bg-red-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                        Delete
                                    </button>
                                </td>
                            </div>
                        </tr>
                        {/* artikel 1 */}
                        <tr className='flex justify-between items-center'>
                            <td>artikel 1</td>
                            <div className='flex gap-2 md:gap-4'>
                                <td>
                                    <NavLink to={'/admin/edit-post'}>
                                        <button className='bg-blue-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                            Edit
                                        </button>
                                    </NavLink>
                                </td>
                                <td>
                                    <button className='bg-red-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                        Delete
                                    </button>
                                </td>
                            </div>
                        </tr>
                        {/* artikel 1 */}
                        <tr className='flex justify-between items-center'>
                            <td>artikel 1</td>
                            <div className='flex gap-2 md:gap-4'>
                                <td>
                                    <NavLink to={'/admin/edit-post'}>
                                        <button className='bg-blue-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                            Edit
                                        </button>
                                    </NavLink>
                                </td>
                                <td>
                                    <button className='bg-red-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                        Delete
                                    </button>
                                </td>
                            </div>
                        </tr>
                        {/* artikel 1 */}
                        <tr className='flex justify-between items-center'>
                            <td>artikel 1</td>
                            <div className='flex gap-2 md:gap-4'>
                                <td>
                                    <NavLink to={'/admin/edit-post'}>
                                        <button className='bg-blue-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                            Edit
                                        </button>
                                    </NavLink>
                                </td>
                                <td>
                                    <button className='bg-red-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                        Delete
                                    </button>
                                </td>
                            </div>
                        </tr>
                        {/* artikel 1 */}
                        <tr className='flex justify-between items-center'>
                            <td>artikel 1</td>
                            <div className='flex gap-2 md:gap-4'>
                                <td>
                                    <NavLink to={'/admin/edit-post'}>
                                        <button className='bg-blue-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                            Edit
                                        </button>
                                    </NavLink>
                                </td>
                                <td>
                                    <button className='bg-red-500 rounded p-1 md:p-2 text-sm md:text-base w-14 md:w-20'>
                                        Delete
                                    </button>
                                </td>
                            </div>
                        </tr>

                    </table>
                </div>
            </div>

        </section>
    )
}
