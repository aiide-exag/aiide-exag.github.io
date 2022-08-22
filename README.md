# Experimental AI in Games workshop website

This is the updated website for the AIIDE conference Experimental AI
in games Workshop. It features basic information about the workshop,
submission deadlines, announcements, and workshop schedule.

## Development

This site is built using [GatsbyJS](https://www.gatsbyjs.com/) as
JavaScript framework that uses react to generate static websites.

Here are resources for learning more about Gatsby:

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

To begin development first clone the repo and install the dependencies
using [Yarn](https://yarnpkg.com/).

### Package.json scripts

Here are the following scripts available in the `package.json`.

- **yarn develop** - Start development Gatsby server on localhost
- **yarn start** - See `yarn develop`
- **yarn build** - Create production build of the website
- **yarn serve** - Serve a production build of the website on localhost
- **yarn clean** - Delete cached files and old build files
- **yarn typecheck** - Run a TypeScript type check to ensure code correctness
- **yarn deploy** - Deploy a production version of the site to the `gh-pages` branch. (changes are visible to the public)

### Updating the Call for Papers

The call for papers information lives in the `content` directory. Gatsby
uses a plugin to convert the content within the Markdown file into HTML.
Here is a cheat sheet for Markdown syntax: [https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/).

Please update this file to change the content on the page. Styling is handled
in the `src/global.scss` file.
