# The Email — archive (unpublished)

*The Email* was a weekly curated-links newsletter Tasos wrote under the
**HeadScratch** banner. Eight issues, October 2015 → March 2016.

| Issue | Date |
|---|---|
| #1 | 2015-10-16 |
| #2 | 2015-10-23 |
| #3 | 2015-10-30 |
| #4 | 2015-11-06 |
| #5 | 2015-11-13 |
| #6 | 2015-11-20 |
| #7 | 2015-11-27 |
| #8 | 2016-03-10 |

## What's here

- `Emails/<date>/<date>.md` — the issue text, Markdown, ready to become posts
- a few issues also carry `.pdf` / `.html` renders and inline images
- `Managerial/Logos/` — HeadScratch header artwork (jpg, png, Pixelmator source)
- `export-tsangiotis.com-2016-03-31.xml` — WordPress export of the old
  tsangiotis.com, taken 31 Mar 2016

## Why it is not published

The directory name starts with `_` and is **not** declared in `_config.yml`
under `collections:`, so Jekyll ignores it entirely — nothing here is built
or served. It is version-controlled source material, parked until you decide
what to do with it.

## If you decide to publish

Roughly: add `the_email` to `collections:` in `_config.yml` with
`output: true`, give each `.md` front matter (`title`, `date`, `layout`),
flatten `Emails/<date>/<date>.md` to `_the_email/<date>.md`, and move the
inline images into `assets/`. The 2016 WordPress XML is a separate question —
it holds the old site's posts, not the newsletter.
