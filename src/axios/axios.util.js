import axios from 'axios'
// import {URL} from 'url'
import urlParse from "url-parse"

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

export const getTotalCommitCount = (linkString) => {
    // console.log({linkString})
    console.log("getTotalCommitCount Called ")
    let linksList = linkString.split(',');
    let lastLink = linksList.filter((link) => link.includes('rel=\"last\"'))[0];
    lastLink = lastLink.trim().split(';')[0]
    lastLink = lastLink.replace('>','').replace('<','')
    
    let parse = urlParse(lastLink, true)
    const {page, per_page} = parse.query;
    return page*per_page
    
}