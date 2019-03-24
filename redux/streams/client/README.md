
<h2>Router paths scheme</h2>
<img src="./path-scheme.PNG" alt="router paths"/>
<h2>Redux diagram</h2>
<img src="./redux-diagram.PNG" alt="Redux diagram"/>


npm install --save react-router-dom@next
versão normal ta bugada, então tem que botar o @next pra pegar a versão beta


------------------------------

<h1> Semantic UI:</h1>
It's a library used to improve css production, comes with cool styles
<h3>Documentation:</h3>
https://semantic-ui.com/
<h3>How to use:</h3>
Go to this site: https://cdnjs.com/libraries/semantic-ui and get the 'semantic.min.css' link
add this link in the file ../public/index.html in a tag to be able to use it, like this:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
`

------------------------------

OAuth google login
<h3>Documentation:</h3>
https://developers.google.com/api-client-library/javascript/reference/referencedocs
<h3>How to use:</h3>
https://console.developers.google.com/
Criar projeto, ir em credenciais, ir na tela de consentimento OAuth e criar, dps voltar para credenciais e criar credencial id do cliente OAuth, selecionar aplicativo web e colocar o link do site, no caso é http://localhost:3000
adicionar uma script tag em ../public/index.html:

```html
<script src="https://apis.google.com/js/api.js"></script>
`

------------------------------

Redux and React-Redux

command: npm install --save redux react-redux

------------------------------

Redux DevTools
<h3>Documentation:</h3>
https://github.com/zalmoxisus/redux-devtools-extension