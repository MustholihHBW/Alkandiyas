const BASE_URL = 'https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json';

async function getPosts() {
    try {
        const endpoint = BASE_URL + '/wp/v2/posts?author=5'
        const res = await fetch(endpoint)
        const data = await res.json()
        return data
    } catch (e) {
        console.log('Error:', error);
    }
}

export { getPosts }