import { NavLink } from "react-router-dom"

export default function ArticleCard({ data }) {
    const default_thumbnail = 'https://placehold.co/300x200'

    // jika wp:featuredmedia ada, maka ambil source_url, jika tidak ada maka ambi default_thumbnail
    const thumbnail =
        data._embedded['wp:featuredmedia']
            ? data._embedded['wp:featuredmedia']['0'].source_url
            : default_thumbnail


    return (
        <div className="card bg-base-100 shadow-xl rounded w-48 md:w-full">
            <figure><img className="aspect-video object-cover" src={thumbnail} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{data.title.rendered}</h2>
                <p className="line-clamp-3" dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}></p>
                <div className="card-actions justify-end">
                    <NavLink to={'/article/' + data.id} className="btn btn-sm btn-primary">Selengkapnya</NavLink>
                </div>
            </div>
        </div>
    )
}