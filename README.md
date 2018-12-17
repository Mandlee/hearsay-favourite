
# My favorite contacts
Take-home assignment for Hearsay Budapest Sites Developer Candidates


### Installation
- Before you start working please install the npm packages:
```
npm install
```

### Build prod and serve application
- Serving application on: http://localhost:8888   

```
npm start
```

### Run development mode
With hot reloaded. Project is running at http://localhost:8080/

```
npm run dev
```

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.


## General guideline
- You have 24 hours to send back your solution, you should be able to complete the actual work in 2-3 hours.
- Make sure:
    - Your app builds and runs
    - The code is clean, organized and understandable
    - The logic in your app implements the specifications exactly
    - The look of your app matches the visual mock-up


## Specifications
Your task is to implement a simple list of favorite contacts based on the user's call history.
- The list must include every contact from the call history only once (```callHistory.json```)
- Each list item must display the first name, last name (in bold) and the time since the last call in days
    - The last call can be calculated from the ```called``` UNIX timestamp (seconds) value
- The list must be ordered by the call counts of each contact in a descending order
    - If the call counts of calls of two contacts are equal, then the contact with the latest last call precedes the other one
- The header should be always visible, even if the user scrolls

```
1. Contact U - 4 calls
2. Contact X - 3 calls
       last call: Aug 8, 2018
3. Contact Y - 3 calls
       last call: Jun 30, 2018
4. Contact Z - 2 calls
...
```

### Visual design
Please refer to the mock-up image in the ```mockup``` folder. Colors, padding, margins and font sizes don't need to be exact.

### Nice to have
If you are comfortable with webpack and its configuration then change the application to use SASS/SCSS instead of plain CSS. (This is not mandatory)
