Semantic UI:
Is a library used to improve css production, comes with cool styles
documentation:
https://semantic-ui.com/

how to use:
go to this site: https://cdnjs.com/libraries/semantic-ui and get the 'semantic.min.css' link
add this link in the file ../public/index.html in a tag to be able to use it, like this:
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />

------------------------------

Axios library:
Used to make the API Request.
command: npm install --save axios

------------------------------

Unsplash API:
In this application, this API is used to get photos information in JSON from a search term. In this case it is called with the help of Axios.

documentation:
https://unsplash.com/developers

how to use:
create a developer account on the above site and create a project.
make a request with Axios, like this:
axios.get('https://api.unsplash.com/search/photos', {
    params: {
        query: 'term to search'
    }
    headers: {
            Authorization: 'Client-ID YOUR_ACCESS_KEY'
        }
})
.then((response) => {
    console.log(response.data.results);
});