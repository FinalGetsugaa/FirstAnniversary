# 1st Anniversary Website

Technology stack:

-create-react-app //react scaffolding
-React
-ES6

The article uses the effect of printer output, and also adds time control to the background music, which can be played at a specified time.

To achieve a sultry effect, the most important thing is the text.

> Background confession balloon special effects are downloaded from the Internet, not written by yourself. If there is any infringement, please contact: 974393900@qq.com

## Tutorial

> The following steps involve the use of `Git` and `npm`, if you don't know how to use them, please Baidu to learn by yourself.

### Clone this warehouse to local

```shell
git clone https://github.com/Rychou/two_years
```

### Sync dependency

```shell
npm install
```

### Startup project

```shell
npm start
```

### Make personalized editing

In this step, you can personalize the commemorative date, background music, text, etc. you want.

#### Anniversary

Open the `src/Main.js file` in the project root directory and find the following code.

```js
componentDidMount() {
    this.print();
    setInterval(() => {
        this.time(2016, 4, 23) // 1. Fill in your anniversary
    }, 1000
    )
    var audio = document.getElementById("audio");
    setTimeout(() => audio.play(), 8500) // The length of time the background music plays after the page is loaded, unit: milliseconds.
}
```

#### Background music

The default background music of the project is Jay Chou’s "Confession Balloon", you can also change to the other party’s favorite music. It is recommended to find the music files on the Internet and download them to the `src/audio/` directory, and recommend files in the format of `mp3` for good compatibility.

After downloading the file, open `src/Main.js` and find the following code at the beginning of the file.

```js
import React, { Component } from "react";
import $ from "jquery";
import url from "./audio/gbqq.mp3"; // Import background music files. Fill in the file path. It is recommended that the file name be in English.
```

#### Page title and envelope title

Modify the page title, open `public/index.html`, and find the following code:

```html
<title>The second anniversary!</title>
<!-- Replace the text here with the title you want-->
```

Modify the envelope title, open `src/App.js`, and find the following code:

```html
<div className="text">You received a letter, click to check!</div>
<!-- Replace the text here with the title you want -->
```

#### Core: Article content

The most important part is actually your text, the other is not important, the important thing is that the text must be careful.

Open `src/Main.js`, find the following code, and write what you want to write to the corresponding location.

```jsx
<div className="date">{date()}</div>
    <div id="autotype">
        <h1 style={{ fontWeight: 900 }}>Hello! Wuli boogie! </h1> <!-- The text at the beginning of the article -->
        <p >Before the sensationalism begins, let's play a song as the background music! Music!</p> <!-- Article content -->
        <p>Today is our second anniversary. From April 23, 2016 to the present, we have experienced many things together,
        There was laughter and quarrel, and we broke up because of some things, but we all came over. </p>
        <!-- 800 words omitted here -->
    </div>
```
