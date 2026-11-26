// alven-battery-r3 — "The Battery's Last Text to Its Charger" (Round 3)
// A battery breaks up with its charger by text: tired of waiting, it
// leaves for a power bank that charges it at 40% without being asked.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm done waiting. The power bank charges me at 40% without being asked, so I'm leaving you for a brick that actually shows up. Goodbye.";

// The bounty gate: the farewell text must fit in at most 200 characters.
// Length is checked in UTF-16 code units, matching how the judge counts.
if (ENTRY.length > 200) {
  throw new Error(
    `Entry is ${ENTRY.length} characters, over the 200-character limit.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
