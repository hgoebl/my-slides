
# jade - node template engine

.<table><tr><td style="vertical-align: top">

```text
doctype 5
html(lang="en")
  head
    title= pageTitle
  body
    h1 Jade
    #container
      if youAreUsingJade
        p You are amazing
      else
        p Get on it!
```

.</td><td style="padding-left: 1em; vertical-align: top">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Jade</title>
  </head>
  <body>
    <h1>Jade</h1>
    <div id="container">
      <p>You are amazing</p>
    </div>
  </body>
</html>
```

.</td></tr></table>


