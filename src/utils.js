const BASE_URL = 'https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json';
const AUTHOR_ID = 5;

async function getPosts(search, page) {
    try {
        const endpoint = BASE_URL + '/wp/v2/posts?_embed&author=' + AUTHOR_ID + '&search=' + search + '&page=' + page

        // fetch data post
        const res = await fetch(endpoint)

        // mendapatkan data post dari body response
        const data = await res.json()

        // mendapatkan total page dari header response
        const totalPage = parseInt(res.headers.get('X-WP-TotalPages'))


        return { data, totalPage }
    } catch (e) {
        console.log('Error:', error);
    }
}

// mendapatkan data post berdasarkan id
async function getSinglePost(id) {
    try {
        const endpoint = BASE_URL + '/wp/v2/posts/' + id + '?_embed'
        const res = await fetch(endpoint)
        const data = await res.json()
        return data
    } catch (e) {
        console.log('Error:', error);
    }
}

export { getPosts, getSinglePost }