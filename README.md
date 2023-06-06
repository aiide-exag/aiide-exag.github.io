# Experimental AI in Games workshop website

This is the updated website for the AIIDE conference Experimental AI
in games Workshop. It features basic information about the workshop,
submission deadlines, announcements, and the workshop schedule.

## Development

This site is built using [NextJS](https://nextjs.org/). It is a JavaScript framework based on React.

### Package.json scripts

Here are the following scripts available in the `package.json`.

- **yarn dev** - Starts development server on localhost
- **yarn start** - Alias for `yarn dev`.
- **yarn build** - Create production build of the website
- **yarn lint** - Run the code linter
- **yarn clean** - Delete cached files and old build files
- **yarn typecheck** - Run a TypeScript type check to ensure code correctness
- **yarn deploy** - Deploy a production version of the site to the `gh-pages` branch.
  (changes are visible to the public)

### Updating the Call for Papers

The call for papers information lives in the `src/call_for_papers.md`. Next
uses a plugin to convert the content within the Markdown file into HTML.
Here is a cheat sheet for Markdown syntax:
[https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/).

### Updating color styling

Please update this file to change the content on the page. Styling is handled
in the `src/global.scss` file.

### Updating the Paper Database

All paper database entries are managed in `src/paper_data.json`.

To link to papers within this repository use the following download link prefix:

```text
https://github.com/downloads/aiide-exag/aiide-exag.github.io/papers/<PAPER NAME HERE>
```
