1. What is Emmet?
    Emmet is an extension that is build into VSCode which helps generating the boilerplate code for HTML.
    Ex: !+Enter Generates the HTML boilerplate code

2. Difference between a Library and Framework.
    Library takes minimum effort to put it inside our code. 
    Has lesser rules defined

    Framework takes more effort to setup and it has stricter rules.

3. What is CDN? Why do we use it
    CDN stands for Content Delivery Networks. CDN's are bunch of servers spread across the globe to serve information. They provide the static content quickly to the nearby users. They are available for rent.

4. Why is React known as React?

5. What is crossorigin in the script tag?
    Crossorigin is a attribute that is used on various HTML tags like script, video, audio, img, and link
    It provides support for CORS. It defines how these elements handle the crossorigin requests
    It takes 2 values 'anonymous'/'use-credentials'

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script> ; This tells the browser to execute this script without sending the credentials

    *anonymous:* Request uses CORS header and credentials flag is set to 'same-origin'. There is no exchange of credentials via cookies, TLS certificates or HTTP authentication

    *use-credentials:* Request uses CORS header and credentials flag is set to include. There is always an exchange of user credentials.

6. Diff bw React and ReactDOM
    React is the core library 
    ReactDOM gives access to the browser DOM/ It allows react to interact with browserDOM