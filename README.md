# html5template [![Build Status](https://travis-ci.org/Urucas/html5template.svg?branch=master)](https://travis-ci.org/Urucas/html5template)
A simple html5 boilerplate that creates a base html5 template from cli
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Your title</title>
  <meta name="description" content="your meta description">
  <meta name="author" content="the author">

  <link rel="stylesheet" href="yourstylesheet.css">

</head>

<body>
</body>
</html>
```

Install
=======

npm install -g html5template


Usage
=====

```bash
html5template
```

```bash
html5template --name template.phtml
```

```bash
html5template --name template2.html --path ./templates
```

```javascript
import html5template from "html5template";
html5template({name:name, path:path});
```

