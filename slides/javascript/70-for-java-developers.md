.<div class="slide">

# JavaScript in Facelets (1)

 * Facelets are XML
 * JavaScript is not always valid XML (>, <, &)
 * Browser should be able to detect the scripts

<br/>&rArr;<br/><br/>

 * use CDATA-Section (recommended)

 or

 * encode ``<`` ``>`` ``&`` with ``&lt;`` ``&gt;`` ``&amp;``

.</div><div class="slide">

# JavaScript in Facelets (2)

``` javascript
<script type="text/javascript">
// <![CDATA[

  if ($.browser.msie &&
      parseInt($.browser.version, 10) <= 11) {
    alert('Wrong browser!');
  }

// ]]>
</script>
```

.</div>
