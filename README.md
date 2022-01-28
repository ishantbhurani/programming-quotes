# Programming Quotes Generator

Read funny, inspiring, wise programming quotes by the greatest minds (powered by [programming-quotes-api](https://github.com/skolakoda/programming-quotes-api))

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
  - [Features](#features)
- [Run Locally](#run-locally)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Credits](#credits)

## Overview

### Screenshots

<kbd>![chrome-tablet-preview](https://user-images.githubusercontent.com/67356291/151599364-4bb6d18b-7585-4d03-a827-16dbc710ba98.png)</kbd>

<kbd>![firefox-tablet-preview](https://user-images.githubusercontent.com/67356291/151599369-2d8a10d5-3fde-47ac-9361-2606d22359ce.png)
</kbd>

<kbd>![chrome-mobile-preview](https://user-images.githubusercontent.com/67356291/151599353-385f12a5-a174-46fc-8969-33ad07878312.png)</kbd>

<kbd>![firefox-mobile-preview](https://user-images.githubusercontent.com/67356291/151599359-ae0cb541-33c8-4ebf-8fdf-4cc27ccdb2e5.png)
</kbd>

### Links

- Live Site URL: [https://random-programming-quotes.netlify.app/](https://random-programming-quotes.netlify.app/)

### Features

- Fetching programming quotes using Fetch API
- Fully responsive
- Fully supported with fallback styles

## Run Locally

Clone the project

```bash
git clone git@github.com:ishantbhurani/programming-quotes.git
```

Go to the project directory

```bash
  cd programming-quotes
```

Run

```bash
  npm start
```

## My process

### Built with

- ReactJS
- JSX
- CSS

### What I learned

- Glassmorphic card with `backdrop-filter: blur()` property
- Checking browser supported styles within CSS

```css
@supports (backdrop-filter: blur(0.625em)) or
  (-webkit-backdrop-filter: blur(0.625em)) {
  /* styles */
}
```

### Useful resources

- [@supports CSS rule on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)

## Author

- Twitter - [@IShaunt](https://twitter.com/IShaunt)

## Credit

- [programming-quotes-api](https://github.com/skolakoda/programming-quotes-api)
- [Background image by Oskar Yildiz from Unsplash](https://unsplash.com/photos/gy08FXeM2L4)
