Simple design to practice the use of redux and some tools with the react.

------------------------------

<h1>Organization of Components:</h1>
<img src="./components_organization.PNG" alt="organization of components"/>

<h1>Used Tools</h1>
<img src="./tools.PNG" alt="used tools"/>

------------------------------

Redux, React-Redux and Redux-Thunk
command npm install --save redux react-redux redux-thunk

------------------------------

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
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
```

------------------------------

Axios library:
Used to make the API Request.
command: npm install --save axios