.<div class="slide">

# jQuery Mobile - head

```
<!DOCTYPE html>
<html lang="en">
<head>
    <link href="jquery.mobile-1.1.0.css"
          rel="stylesheet"/>
    <script src="jquery-1.7.1.js"></script>
    <script src="jquery.mobile-1.1.0.js"></script>
    <script src="my-application.js"></script>
</head>
```

.</div><div class="slide">

# jQuery Mobile - body

```
<section id="home" data-role="page">
  <header data-role="header">
    <h1>nerdshow rc</h1>
  </header>
  <div data-role="content">
    <a data-role="button" href="#"
       data-icon="arrow-r" id="btn-next">
      Next</a>
  </div>
</section>
<section id="help" data-role="page">
...
</section>
```

.</div><div class="slide">

# jQuery Mobile - code

``` javascript
$('#home').live('pagebeforecreate', function() {
    $.mobile.showPageLoadingMsg();
    myapp.load(function (error) {
        $.mobile.hidePageLoadingMsg();
        if (error) {alert(error);}
    });
    // ...
});
// connect behavior to form elements
$(function () {
    $('#btn-next').click(function () {
        myapp.nextSlide();
    });
});
```

.</div>
