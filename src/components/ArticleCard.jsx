import { NavLink } from "react-router-dom"

export default function ArticleCard() {
    return (
        <div className="card bg-base-100 shadow-xl rounded w-48 md:w-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Article</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <NavLink to={'/article/single-article'} className="btn btn-primary">Selengkapnya</NavLink>
                </div>
            </div>
        </div>
    )
}