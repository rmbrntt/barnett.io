



function getBlogArticles() {
    return fetch('http://127.0.0.1:8000/articles/').then((response) => response.json()).then((responseJson) => {
        //console.log(responseJson);
        return responseJson;
    }).catch((error) => {
        console.error(error);
    })
}

export default getBlogArticles;
