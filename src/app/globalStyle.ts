import { createGlobalStyle } from 'styled-components';




export const GlobalStyle = createGlobalStyle`
*,::after,::before{
    background-repeat:no-repeat;
    box-sizing:inherit
}
::after,::before{
    text-decoration:inherit;
    vertical-align:inherit
}
@font-face {
    font-family: NewsGothicBTW01-Roman;
    font-weight: 400;
    src: url(../fonts/NewsGothicBTW01Roman) format('woff'),
    url(../fonts/NewsGothicBTW01Roman2) format('woff2');
    font-style: normal;
}
html{
    box-sizing:border-box;
    cursor:default;
    -ms-text-size-adjust:100%;
    -webkit-text-size-adjust:100%
}
article,aside,footer,header,nav,section{
    display:block
}
body{
    margin:0;
    height: 100%;
}
h1{
    font-size:2em;
    margin:.67em 0
}
figcaption,figure,main{
    display:block
}
figure{
    margin:1em 40px
}
hr{
    box-sizing:content-box;
    height:0;
    overflow:visible
}
nav ol,nav ul{
    list-style:none
}
pre{
    font-family:monospace,monospace;
    font-size:1em
}
a{
    text-decoration:none;
    color:inherit;
    background-color:transparent;
    -webkit-text-decoration-skip:objects
}
abbr[title]{
    border-bottom:none;
    text-decoration:underline;
    text-decoration:underline dotted
}
b,strong{
    font-weight:inherit
}
b,strong{
    font-weight:bolder
}
code,kbd,samp{
    font-family:monospace,monospace;
    font-size:1em
}
dfn{
    font-style:italic
}
mark{
    background-color:#ff0;
    color:#000
}
small{
    font-size:80%
}
sub,sup{
    font-size:75%;
    line-height:0;
    position:relative;
    vertical-align:baseline
}
sub{
    bottom:-.25em
}
sup{
    top:-.5em
}
::-moz-selection{
    background-color:#b3d4fc;
    color:#000;
    text-shadow:none
}
::selection{
    background-color:#b3d4fc;
    color:#000;
    text-shadow:none
}
h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
audio,canvas,iframe,img, video{
    vertical-align:middle
}
audio,video{
    display:inline-block
}
audio:not([controls]){
    display:none;
    height:0
}
img{
    border-style:none
}
svg:not(:root){
    overflow:hidden
}
table{
    border-collapse:collapse
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
}

input[type=number] {
  -moz-appearance: textfield;
}
button[type=submit]{border:none}
button {
    border: none;
 }
 button: hover {
    border: none;
 }
 li button span: focus {
    border: none;
 }
 input: focus {
     outline:none
 }
 div button: active {
    border: none;
 }
 div button: visited {
    border: none;
 }
button,input,optgroup,select,textarea{
    margin:0
}
button,input,select,textarea{
    background-color:transparent;
    color:inherit;
    font-size:inherit;
    line-height:inherit
}
a button :focus {
    outline: rgb(251,151,124) auto 1px;
}
button,input{
    overflow:visible
}
div button: focus {
    background-color: rgb(251,151,124);
    color: white;
    outline: none;      
}

 button: focus {
    outline: -webkit-focus-ring-color auto 1px;
    background-color: #f1f3f5;
    color: black;
}
li div button: focus {
    outline: -webkit-focus-ring-color auto 1px;
    background-color: #f1f3f5;
    color: black;
}
ul li button: focus {
    outline: -webkit-focus-ring-color auto 1px;
    background-color: #f1f3f5;
    color: black;
}
button,select{
    text-transform:none
}
#title:hover  span{
    display:inline-block;
}
[type=reset],[type=submit],button,html [type=button]{
    -webkit-appearance:button
}
[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{
    border-style:none;
    padding:0
}
[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{
    outline:1px dotted ButtonText
}
legend{
    box-sizing:border-box;
    color:inherit;
    display:table;
    max-width:100%;
    padding:0;
    white-space:normal
}
progress{
    display:inline-block;
    vertical-align:baseline
}
textarea{
    overflow:auto;
    resize:vertical
}
[type=checkbox],[type=radio]{
    box-sizing:border-box;
    padding:0
}
[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{
    height:auto
}
[type=search]{
    -webkit-appearance:textfield;
    outline-offset:-2px
}
[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{
    -webkit-appearance:none
}
::-webkit-file-upload-button{
    -webkit-appearance:button;
    font:inherit
}
details,menu{
    display:block
}
summary{
    display:list-item
}
canvas{
    display:inline-block
}
template{
    display:none
}
[tabindex],a,area,button,input,label,select,summary,textarea{
    -ms-touch-action:manipulation;
    touch-action:manipulation
}
[hidden]{
    display:none
}
[aria-busy=true]{
    cursor:progress
}
[aria-controls]{
    cursor:pointer
}
[aria-hidden=false][hidden]:not(:focus){
    clip:rect(0,0,0,0);
    display:inherit;
    position:absolute
}
[aria-disabled]{
    cursor:default
}
box-sizing: border-box;
 border: 0 solid #e5e7eb;
button, [role="button"] {
    cursor: pointer;
}
 li{
    list-style-type: none;
}`

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(../fonts/NewsGothicBTW01Roman) format('woff2'),
        url(../fonts/NewsGothicBTW01Roman2) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    *,::after,::before{
        background-repeat:no-repeat;
        box-sizing:inherit
    }
    ::after,::before{
        text-decoration:inherit;
        vertical-align:inherit
    },
    :focus-visible {
        outline: none;
    }
    
    html{
        box-sizing:border-box;
        cursor:default;
        -ms-text-size-adjust:100%;
        -webkit-text-size-adjust:100%
    }
    article,aside,footer,header,nav,section{
        display:block
    }
    body{
        margin:0
    }
    h1{
        font-size:2em;
        margin:.67em 0
    }
    figcaption,figure,main{
        display:block
    }
    figure{
        margin:1em 40px
    }
    hr{
        box-sizing:content-box;
        height:0;
        overflow:visible
    }
    nav ol,nav ul{
        list-style:none
    }
    pre{
        font-family:monospace,monospace;
        font-size:1em
    }
    a{
        text-decoration:none;
        color:inherit;
        background-color:transparent;
        -webkit-text-decoration-skip:objects
    }
    abbr[title]{
        border-bottom:none;
        text-decoration:underline;
        text-decoration:underline dotted
    }
    b,strong{
        font-weight:inherit
    }
    b,strong{
        font-weight:bolder
    }
    code,kbd,samp{
        font-family:monospace,monospace;
        font-size:1em
    }
    dfn{
        font-style:italic
    }
    mark{
        background-color:#ff0;
        color:#000
    }
    small{
        font-size:80%
    }
    sub,sup{
        font-size:75%;
        line-height:0;
        position:relative;
        vertical-align:baseline
    }
    sub{
        bottom:-.25em
    }
    sup{
        top:-.5em
    }
    ::-moz-selection{
        background-color:#b3d4fc;
        color:#000;
        text-shadow:none
    }
    ::selection{
        background-color:#b3d4fc;
        color:#000;
        text-shadow:none
    }
    audio,canvas,iframe,img,svg,video{
        vertical-align:middle
    }
    audio,video{
        display:inline-block
    }
    audio:not([controls]){
        display:none;
        height:0
    }
    img{
        border-style:none
    }
    svg:not(:root){
        overflow:hidden
    }
    table{
        border-collapse:collapse
    }
    button,input,optgroup,select,textarea{
        margin:0
    }
    button,input,select,textarea{
        background-color:transparent;
        color:inherit;
        font-size:inherit;
        line-height:inherit
    }
    button,input{
        overflow:visible
    }
    button,select{
        text-transform:none
    }
    input[type="search"] {
        appearance: textfield;
        box-sizing: content-box;
    }
    [type=reset],[type=submit],button,html [type=button]{
        -webkit-appearance:button
    }
    [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{
        border-style:none;
        padding:0
    }
    [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{
        outline:1px dotted ButtonText
    }
    legend{
        box-sizing:border-box;
        color:inherit;
        display:table;
        max-width:100%;
        padding:0;
        white-space:normal
    }
    progress{
        display:inline-block;
        vertical-align:baseline
    }
    textarea{
        overflow:auto;
        resize:vertical
    }
    [type=checkbox],[type=radio]{
        box-sizing:border-box;
        padding:0
    }
    [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{
        height:auto
    }
    [type=search]{
        -webkit-appearance:textfield;
        outline-offset:-2px
    }
    [type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{
        -webkit-appearance:none
    }
    ::-webkit-file-upload-button{
        -webkit-appearance:button;
        font:inherit
    }
    details,menu{
        display:block
    }
    summary{
        display:list-item
    }
    canvas{
        display:inline-block
    }
    template{
        display:none
    }
    [tabindex],a,area,button,input,label,select,summary,textarea{
        -ms-touch-action:manipulation;
        touch-action:manipulation
    }
    [hidden]{
        display:none
    }
    [aria-busy=true]{
        cursor:progress
    }
    [aria-controls]{
        cursor:pointer
    }
    [aria-hidden=false][hidden]:not(:focus){
        clip:rect(0,0,0,0);
        display:inherit;
        position:absolute
    }
    [aria-disabled]{
        cursor:default
    }
    box-sizing: border-box;
     border: 0 solid #e5e7eb;
    button, [role="button"] {
        cursor: pointer;
    }
     li{
        list-style-type: none;
    }
    
`;