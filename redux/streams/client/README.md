<h2>Redux diagram</h2>
<img src="./redux-diagram.PNG" alt="Redux diagram"/>

------------------------------

<h1>Semantic UI:</h1>
It's a library used to improve css production, comes with cool styles
<h3>Documentation:</h3>
https://semantic-ui.com/
<h3>How to use:</h3>
Go to this site: https://cdnjs.com/libraries/semantic-ui and get the 'semantic.min.css' link
add this link in the file ../public/index.html in a tag to be able to use it, like this:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
```

------------------------------

<h1>OAuth google login:</h1>
<h3>Documentation:</h3>
https://developers.google.com/api-client-library/javascript/reference/referencedocs
<h3>How to use:</h3>
Go to: https://console.developers.google.com/.
Create project, go into credentials, go on the OAuth consent screen and create, then go back to credentials and create credential OAuth client id, select web application and put link from website, in case it is http://localhost:3000
add a script tag in ../public/index.html:

```html
<script src="https://apis.google.com/js/api.js"></script>
```

------------------------------

<h1>React Router:</h1>
npm install --save react-router-dom@next
The normal version is bugged, then you have to @next to get the beta version

<h2>Router paths scheme</h2>
<img src="./path-scheme.PNG" alt="router paths"/>

------------------------------

<h1>Redux and React-Redux:</h1>

command: npm install --save redux react-redux

------------------------------

<h1>Redux Form:</h1>

command: npm install redux-form@8.1.0
using this version because the current one apparently has some bugs
<img src="./redux-diagram.PNG" alt="Redux Form scheme"/>

------------------------------

<h1>Redux DevTools:</h1>
Help with debugging the application, helping with the state for example
<h3>Documentation:</h3>
https://github.com/zalmoxisus/redux-devtools-extension