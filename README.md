# React Twitter Buttons

A simple way to create your own twitter buttons with react.

[Live Demo](https://codesandbox.io/s/quizzical-mountain-lr0r3?file=/src/App.js)

<img src="https://i.imgur.com/J9h8YRI.png" />



## Install

npm

```
npm install --save react-twitter-button
```


## Importing

ES6 imports :

```js
import TwitterButton from "react-twitter-button";
```


## Usage


```jsx
<TwitterButton />
```


## Custom Your Own Button

You can create your own button.

```jsx

const config = {
    iconType: 'bird-cute',
    text: 'As Above, So Below',
    style: {
        background: 'rgb(193, 19, 19)',
        boxShadow: 'none'
    },
    hoverStyle: {
        background: '#000',
        right: '0',
        bottom: '0'
    }
};

<TwitterButton config={config}/>
```


## Icon Types

#### Text

```jsx
<TwitterButton config={{iconType: "text"}}/>
```

#### Text-Line

```jsx
<TwitterButton config={{iconType: "text-line"}}/>
```

#### Text-Circle

```jsx
<TwitterButton config={{iconType: "text-circle"}}/>
```

#### Bird-Cute

```jsx
<TwitterButton config={{iconType: "bird-cute"}}/>
```

#### Bird-Weird

```jsx
<TwitterButton config={{iconType: "bird-weird"}}/>
```

#### Bird-Furry

```jsx
<TwitterButton config={{iconType: "bird-furry"}}/>
```

#### Bird-Circle

```jsx
<TwitterButton config={{iconType: "bird-circle"}}/>
```

#### Bird-Circle2

```jsx
<TwitterButton config={{iconType: "bird-circle2"}}/>
```

#### Bird-Square


```jsx
<TwitterButton config={{iconType: "bird-square"}}/>
```

#### Bird-Casual

```jsx
<TwitterButton config={{iconType: "bird-casual"}}/>
```

## Props


| Attribute    |   Type    |  Default  | Description                                                 |
| :----------- | :-------: | :-------: | :---------------------- |
| iconType     | `string`  | `primary` | Define the icon you like|        |
| text         | `string`  | `false`   | Custom button text      |
| style        | `object`  | `23`      | Custom button style     |
| disabled     | `bool`    | `false`   | Disabled button         |
| onClick      | `object`  | `null`    | Will trigger when click |





## Events

- `onClick`
- `onMouseOver`
- `onMouseOut`


## Contribution

Welcome to issues and pull requests on https://github.com/yschen25/react-twitter-button


## Versions

##### version 1.0.0

- Add new buttons for twitter
- Offer different kinds of icons
- Feel free to custom button

##### version 1.0.1

- Add Readme.md

##### version 1.0.2

- Remove unused files

#### version 1.0.3

- Change the description of props

#### version 1.0.4

- Change image to base64

#### version 1.0.5

- Change description

#### version 1.0.6

- Change bird-circle img and add live demo

#### version 1.0.7

- Fix test

#### version 1.0.8 and 1.0.9

- Modified config

## Thanks

- [Iconfinder](https://www.iconfinder.com/)

