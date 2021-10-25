# react-simple-matchmedia
![CircleCI](https://img.shields.io/circleci/build/github/egdbear/react-simple-matchmedia/master)
![install size](https://img.shields.io/bundlephobia/min/react-simple-matchmedia)
![npm](https://img.shields.io/npm/dw/react-simple-matchmedia)  

`React hook` used for matching media queries.  
It uses browser's `window.matchMedia`.  
With SSR support :rocket:  



### Install

```sh
$ yarn add react-simple-matchmedia
```

or

```sh
$ npm i react-simple-matchmedia
```

### Usage

[![Edit hopeful-jennings-cho5q](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/hopeful-jennings-cho5q?fontsize=14)


#### Pre-defined media queries:

| media | value |
| ------ | ------ |
| phone | (min-width: 320px) and (max-width: 568px) |
| tablet | (min-width : 768px) and (max-width : 1024px) |
| desktop | (min-width : 1224px) |


#### With pre-defined query:
```
import useReactSimpleMatchMedia from 'react-simple-matchmedia'

const MediaQueryComponent = () => {
  const matched = useReactSimpleMatchMedia('phone');

  return (
    <Fragment>
      { matched && <div>I am only visible and rendered in DOM on phone screen!</div>}
    </Fragment>
  );
}

```

### With custom queries:
```
import useReactSimpleMatchMedia from 'react-simple-matchmedia'

const MediaQueryComponent = () => {
  const matched = useReactSimpleMatchMedia('(min-width: 600) and (max-width: 1200px)');

  return (
    <Fragment>
      { matched && <div>I am only visible and rendered in DOM between 600px and 1200px</div>}
    </Fragment>
  );
}

```

###

Enjoy and have fun!
