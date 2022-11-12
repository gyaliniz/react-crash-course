# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`Available Scripts`

- `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 1.Create A React Component

In `shared/Box.jsx`, I created a react component, which you can see below.

![hello-world](./images/hello-world.png)

- You can set the styling of a component inside of it. You need to use camelcase for the properties of the item (`boxStyle`).

```jsx
import React from "react";

function Box({ children, bgColor = "teal" }) {
  const boxStyle = {
    color: "white",
    backgroundColor: bgColor,
    width: 180,
    height: 180,
    margin: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <div style={boxStyle}>{children}</div>;
}

export default Box;
```

- `children is a special, automatically passed prop that you can use to render the content when you give it as a property to the component.

```jsx
<Box> Hello World </Box>
```
