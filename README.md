# use-scramble-text

>

[![NPM](https://img.shields.io/npm/v/use-scramble-text.svg)](https://www.npmjs.com/package/use-scramble-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-scramble-text
```

## Usage

```tsx
import * as React from "react";

import { useScrambleText } from "use-scramble-text";

const Example = () => {
  const myScrambledText = useScrambleText("Hello, world");
  return <div>{myScrambledText}</div>;
};
```

## License

MIT © [samdelacruz](https://github.com/samdelacruz)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
