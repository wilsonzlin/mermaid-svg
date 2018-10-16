# mermaid-svg

## Installation

```bash
# For npm
npm i --save mermaid-svg
# For yarn
yarn add mermaid-svg
```

## Usage

```typescript
import {generateMermaidSVG} from "mermaid-svg";
import * as fs from "fs";

(async function() {
  const mermaid = `
    graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
  ```;

  const svg = await generateMermaidSVG(mermaid);

  fs.writeFileSync("/diagram.svg", svg);
})();
