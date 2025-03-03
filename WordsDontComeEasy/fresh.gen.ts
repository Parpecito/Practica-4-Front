// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $HiR from "./routes/HiR.tsx";
import * as $_pagesection_ from "./routes/[pagesection].tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $index from "./routes/index.tsx";
import * as $CustomHeader from "./islands/CustomHeader.tsx";
import * as $HiButton from "./islands/HiButton.tsx";
import * as $Hihihi from "./islands/Hihihi.tsx";
import * as $start from "./islands/start.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/HiR.tsx": $HiR,
    "./routes/[pagesection].tsx": $_pagesection_,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/CustomHeader.tsx": $CustomHeader,
    "./islands/HiButton.tsx": $HiButton,
    "./islands/Hihihi.tsx": $Hihihi,
    "./islands/start.tsx": $start,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
