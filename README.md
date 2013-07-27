# Backbone.getters.setters AMD

[![Build Status](https://travis-ci.org/shovon/backbone.getters.setters-amd.png)](https://travis-ci.org/shovon/backbone.getters.setters-amd)

A custom getters and setters plugin for [Backbone.js](http://documentcloud.github.com/backbone), with support for AMD. A fork of [backbone.getters.setters](https://github.com/berzniz/backbone.getters.setters), by [@berzniz](https://github.com/berzniz).

## Getting started

Requires [AMD Backbone.js](https://github.com/amdjs/backbone), Underscore.js/Lodash.js, and jQuery. **Will not work with plain-vanilla Backbone.js**.

### Configure getters on the Model

Your model should extend Backbone.GSModel instead of Backbone.Model in order to support getters:

```javascript
define(["backbone.getters.setters"], function (GSModel) {
  var MyModel = GSModel.extend({
    // ...
  });
});
```

Configure your getters by adding a getter function for each attribute:

```javascript
var MyModel = GSModel.extend({
  getters: {
    fullName: function() {
      return this.get('firstName') + ' ' + this.get('lastName');
    }
  },

  defaults: {
    firstName: 'Lady',
    lastName: 'Gaga'
  }
});
```

Then simply call the regular get method:

```js
var someModel = new MyModel();
alert(someModel.get('fullName'));
```

The output of the above will be an alert with the text: 'Lady Gaga'.

### Configure setters on the Model

Your model should extend Backbone.GSModel instead of Backbone.Model in order to support setters:

```javascript
define(["backbone.getters.setters"], function (GSModel) {
  var MyModel = GSModel.extend({
    // ...
  });
});
```

Configure your setters by adding a setter function for each attribute:

```js
var MyModel = GSModel.extend({
  setters: {
    firstName: function(value) {
      return value.toUpperCase();
    },
    lastName:: function(value) {
      return value.toLowerCase();
    }
  },

  defaults: {
    firstName: 'Lady',
    lastName: 'Gaga'
  }
});
```

In the above example, the setters were already called by the defaults hash.

The value of 'firstName' is now 'LADY', the value of 'lastName' is now 'gaga'.

You can also call the set method as usual:

```js
someModel.set('firstName', 'letters');
```

And now the value of 'firstName' is 'LETTERS'.

You can also set multiple attributes as regular:

```js
someModel.set({
  'firstName': 'everything',
  'lastName': 'NUMBERS'
});
```

And now the value of 'firstName' is 'EVERYTHING' and the value of 'lastName' is 'numbers'.

## License

Unless stated otherwise, the license is in the [`LICENSE`](https://github.com/shovon/backbone.getters.setters-amd/blob/master/LICENSE) file.