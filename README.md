# react-simple-matchmedia
React component used for matching media queries.
(It doesn't show in DOM if media query is not matched)

### Install

```sh
$ yarn add react-simple-matchmedia
```

### Usage

[![Edit 1z02pl6xqq](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/1z02pl6xqq)

```
import SimpleMatchMedia from 'react-simple-matchmedia'

 // somewhere in render

<SimpleMatchMedia media="phone">
  I am only able to be visible and rendered in DOM on phone screen!
</SimpleMatchMedia>
```
#### With custom query

```
<SimpleMatchMedia media="(min-width: 200px) and (max-width: 600px)">
  I am only able to be visible and rendered in DOM on screen with query of (min-width: 200px) and (max-width: 600px)!
</SimpleMatchMedia>
```


#### With render prop

```
<SimpleMatchMedia media="(min-width: 600px)">
    {matched =>
      matched ? (
        I am matching (min-width: 600px)
      ) : (
        "Warning. I am not maching (min-width: 600px)"
      )
    }
</SimpleMatchMedia>
```

###

Enjoy and have fun!