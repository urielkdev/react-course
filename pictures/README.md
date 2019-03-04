OBS: The node_modules folder is listed in .gitignore, so it is not in git because it is very heavy. 
Additional libraries, other than those created by create-react-app, are listed below, if necessary, use the command lines to install them in the node_module folder (npm commands listed below as well).

------------------------------

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
.then((response) => {  // this can be replaced by async function
    console.log(response.data.results);
});
in this project it is being done in another way, initializing the axios in ./src/api/unsplash and calling the unsplash in the App