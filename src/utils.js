// mengambil data dar endpoint
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


// function login
async function login(username, password) {
    try {
        const endpoint = BASE_URL + '/jwt-auth/v1/token'
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }
        const res = await fetch(endpoint, option)
        const data = await res.json()
        return data
    } catch (e) {
        console.log('Error', e);
    }
}

// check token login
async function checkAuthToken() {
    try {
        const response = await fetch(`${BASE_URL}/jwt-auth/v1/token/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        const data = await response.json();
        if (data.code === 'jwt_valid_token') {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.error('Error:', error);
    }
}

// create post
async function createPost(data) {
    try {
        if (!data) throw new Error(`parameter data is required! in create post() function.`);

        data = { ...data, status: "publish" }

        const response = await fetch(`${BASE_URL}/wp/v2/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        console.log('Error:', error);
    }
}

// edit post
async function editPost(data, id) {
    try {
        if (!data) throw new Error(`parameter data is required! in create post() function.`);

        const response = await fetch(`${BASE_URL}/wp/v2/posts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        console.log('Error:', error);
    }
}

// delete post
async function deletePost(id) {
    try {
        if (!id) throw new Error('parameter id is required! in deletePost() function.');

        const response = await fetch(`${BASE_URL}/wp/v2/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        const data = await response.json()
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// create media item
async function createMediaItem(data) {
    try {
        if (!data) throw new Error('parameter data is required! in createMediaItem() function.');

        const form = new FormData();
        form.append('file', data);

        const options = {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        }

        options.body = form;
        const response = await fetch(`${BASE_URL}/wp/v2/media`, options);
        const res = await response.json();
        return res;
    } catch (error) {
        console.error('Error:', error);
    }
}



export { getPosts, getSinglePost, login, checkAuthToken, createPost, editPost, deletePost, createMediaItem }