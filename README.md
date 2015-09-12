# slurp-some
Slurp some of a stream to a string.  Inspired by clojure's slurp.

# example
``` js
var slurp = require('slurp-some').slurp;

//Stops reading after 2048 bytes and passes the resulting string as content.
//err is null if the stream contained less than 2048 bytes, otherwise err is
//a string specifying the error along with the content read up to the point of
//error.
slurp(input, 2048, function(err, content) {
   console.log(content);
})

```

output:

```
my stream content
```


# install

With [npm](https://npmjs.org) do:

```
npm install slurp-some
```

# license

BSD-3
