const BASE_URL = 'https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json';
const AUTHOR_ID = 5;

async function getPosts(search) {
    try {
        const endpoint = BASE_URL + '/wp/v2/posts?_embed&author=' + AUTHOR_ID + '&search=' + search
        const res = await fetch(endpoint)
        const data = await res.json()
        return data
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