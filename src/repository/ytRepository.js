import Repository from "./Repository";

const resource = "";

export default {

    get(url) {
        return Repository.get(`${resource}/information`, {
            params: {
                url_info: url
            }
        })
    },

    download(url, id) {
        return Repository.get('/download', {
            params: {
                url: url,
                format_id: id
            },
            responseType: 'blob'
        })
    }

}
