# Lab Results Timeline - eHealth Sask

A single self-contained page that turns a lab-results export from a ehealth portal into
charts: one trend line per test, reference ranges shaded, out-of-range results flagged,
plus a table for one-off tests and qualitative results.

No build step, no server, no accounts, no analytics, no external requests of any kind.

## Files

| File | What it is |
|---|---|
| `lab-timeline.html` | The app. |
| `lab-results.js` | Your data. **Replace this with your own export** (see below). |
| `README.md` | This file. |

## Using your own data

1. Export your results from the health portal as JSON. You may need to use the browser's network tab to find the request
2. Open `lab-results.js` in a text editor and replace everything between `const LAB_RESULTS =`
   and the trailing `;` with your exported JSON, unchanged — so the file reads:

   ```js
   const LAB_RESULTS = [ /* ...your exported JSON array, pasted as-is... */ ];
   ```

3. Save it as `lab-results.js`, in the same folder as `lab-timeline.html`.
4. Open (or reload) `lab-timeline.html`.

### Why a `.js` file instead of a plain `.json` file?

Browsers block a web page from reading local files with `fetch()`/`XMLHttpRequest` when
that page was opened directly from disk (`file://…`) — this is a deliberate security
restriction in Chrome and Safari, with no per-page way to opt out, and it's the reason a
plain `data.json` next to the page can't be auto-loaded that way. A `<script src="…">`
tag isn't subject to that restriction, so wrapping the export as a `const LAB_RESULTS =
[...]` JavaScript file is what lets this work with a plain double-click and no server.

If `lab-results.js` is missing, unreadable, or doesn't define a non-empty `LAB_RESULTS`
array, the page just shows a "no data loaded yet" message.

### Hosting more than one person's data

Pass `?file=` in the URL to point at a different script, e.g. `lab-timeline.html?file=mom.js`,
with `mom.js` in the same folder using the same `const LAB_RESULTS = [...]` format.

## Expected data shape

The page expects the JSON shape this portal's own export uses: a top-level array, where
each item is one visit/draw date with results grouped into panels:

```jsonc
[
  {
    "labResultDate": "2024-02-02T09:00:00",
    "group": [
      {
        "groupName": "Renal Function Panel",           // becomes a category on the page
        "results": [
          {
            "clinicalCode": { "text": "Creatinine" },   // becomes the test/chart name
            "values": {
              "value": "91",                            // numeric -> charted as a trend point
              "unitText": "µmol/L",
              "rangeDisplayText": "55-110",              // parsed into the shaded reference band
              "isValueInRange": true
            }
          }
        ]
      }
    ]
  }
]
```

- A test needs **at least two** numeric results (across visits) to get its own chart;
  fewer than that, or purely qualitative results (e.g. `values.displayValue` instead of
  `values.value`, as urinalysis dipstick/microscopy results usually are), go into the
  table at the bottom instead.
- Flags are read from `interpretationCode` or `abnormalityIndicator` when present (`H`,
  `L`, `HH`, `LL`, `A` / "Above High Normal" / "Abnormal" etc.); if a result only sets
  `values.isValueInRange: false` with no direction given, the page infers high vs. low
  by comparing the value to the parsed range itself.
- Two reference lines (eGFR ≥ 60, urine albumin/creatinine ratio ≥ 3) are drawn using this
  provider's own standardized test codes (`EGFR1`, `MACRT`) when present — this is a
  clinical constant, not anything specific to one person's data.
- A file that doesn't match this shape (e.g. an export from a different portal) will
  either show nothing or show it inaccurately — the parser only understands this schema.

## What's bundled

`lab-results.js` ships with a small, entirely fictional example (three visits, made-up
numbers) so the page has something to show before you swap in your real export. It is
not real lab data.

This is a personal reference tool, not medical advice. Reference ranges and flags are
copied straight from the source reports, and ranges can shift between labs or over time
as methods change, so a single value crossing a line matters less than the trend around
it. Discuss anything that concerns you with your care provider.

## License

[PolyForm Noncommercial 1.0.0](LICENSE) — free to use, share, and modify for any
noncommercial purpose. Commercial use requires a separate license from the author.
