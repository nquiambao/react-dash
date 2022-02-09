# React With Styled Components

- configure styled components
- extensions for styled components (snippets)
- create global stylesheet
- styled component, use createGlobalStyle
- 
```js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #ccc;
    }
`
export {GlobalStyles}

```