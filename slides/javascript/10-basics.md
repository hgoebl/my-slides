
# Object Literals

``` javascript
var obj = {
    name: "String",
    "while": "keyword as property name",
    flag: true,
    root2: 1.414213562,
    method: function () {
        return new Date();
    },
    lines: [ 1, 2, "abc" ]
};
```


# Objects

Objects are associative arrays

``` javascript
var obj = {};     // new Object() no longer used
obj.prop = 'Jason';
obj['prop'] = 'Bourne';
'prop' in obj;    // true
obj.prop = null;
'prop' in obj;    // true
delete obj.prop;
'prop' in obj;    // false
obj.prop;         // undefined
```


# JSON

``` javascript
[ 30, 10, "Jason" ]
```

<br/>

``` javascript
{ "prop1": "value", "prop2": 1.414213562,
  "prop3": null,    "prop4": true,
  "prop5": [ 30, 10, "Jason" ],
  "prop6": { "x": 10, "y": -1 }
}
```

<br/>

``` javascript
true
```

.   <div class="handout">

 * JSON := JavaScript Object Notation
 * stricter than Object literals
   * Property names must be quoted with &quot;
   * simple values like boolean, string, number, null
   * no representations for Date, RegExp
   * **no functions!**
 * heavily used in RESTful services with mobile clients
 * ``JSON.parse()`` and ``JSON.stringify()``

.   </div>

