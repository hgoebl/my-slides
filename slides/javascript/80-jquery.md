.<div class="slide">

# jQuery Examples

<div class="fs50" style="color: #888; margin-bottom: 0.5em">From: [jQuery Fundamentals](http://github.com/rmurphey/jqfundamentals) by Rebecca Murphey</div>

``` javascript
$('#menu li').hover(function() {
    $(this).toggleClass('hover');
});
```

<br/>

``` javascript
$('div.funtimes').animate(
    {
        left : [ "+=50", "swing" ],
        opacity : [ 0.25, "linear" ]
    },
    300
);
```

.</div>
