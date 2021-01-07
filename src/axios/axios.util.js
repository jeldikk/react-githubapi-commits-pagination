import axios from 'axios'

export const fetchData = async (owner, reponame, itemsPerPage, pageNumber) => {
    const config = {
        method: 'GET',
        url: `https://api.github.com/repos/${owner}/${reponame}/commits`,
        params:{
            per_page: itemsPerPage,
            page: pageNumber
        },
        headers:{
            Accept: 'application/vnd.github.v3+json'
        }
        
    }
    const response = await axios(config)
    return response
}