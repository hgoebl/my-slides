.<div class="slide">

# Arrays

``` javascript
var array = [ 30, 10, "Jason", new Date() ];

array.push({ prop: "Bourne" });
// equiv. w/ push
array[array.length] = "Last Element";
array.length;        // 6
array[100];          // undefined -> no Exception!
array[1000] = true;
array.length;        // 1001
typeof array;        // 'object'
```

.   <div class="handout">

 * homogeneity is not enforced
 * can have gaps (not all indexes used)
 * should not be iterated by ``for (e in array)``
 * has some handy methods (``push``, ``pop``, ``slice``, ``sort``, ...)
 * ``length`` property means max(index)+1
 * Array type-check is tricky (use library like underscore)

.   </div>

.</div><div class="slide">

# Boolean Expressions

 * JavaScript behaves more like **C**
 * falsy values
   * ``false``
   * ``null``
   * ``undefined`` // BTW: can be changed :-(
   * ``0``
   * ``''`` // empty string
   * ``NaN`` // Not a Number

.</div>
