# Markdown-It Plugin Template

[![ci-badge]][ci-link]
[![npm-badge]][npm-link]

Additional [markdown-it](https://github.com/markdown-it/markdown-it) plugins required for the MyST specification.

## Usage

As a Node module:

```javascript
import MarkdownIt from "markdown-it"
import { mystBlockPlugin, colonFencePlugin } from "markdown-it-myst-extras"

const text = MarkdownIt().use(mystBlockPlugin).render("+++")
```

In the browser:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example Page</title>
    <script src="https://cdn.jsdelivr.net/npm/markdown-it@12/dist/markdown-it.min.js"></script>
    <script src="https://unpkg.com/markdown-it-myst-extras"></script>
  </head>
  <body>
    <div id="demo"></div>
    <script>
      const text = window
        .markdownit()
        .use(window.markdownitMystExtra.mystBlockPlugin)
        .render("+++")
      document.getElementById("demo").innerHTML = text
    </script>
  </body>
</html>
```

## Development

### Features

- TypeScript
- Code Formatting ([prettier])
- Code Linting ([eslint])
- Testing and coverage ([vitest])
- Continuous Integration ([GitHub Actions])
- Bundled as both UMD and ESM ([rollup])
- Upload as [NPM] package and [unpkg] CDN
- Simple demonstration website ([GitHub Pages])

### Getting Started

1. Create a GitHub repository [from the template](https://docs.github.com/en/github-ae@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template).
2. Replace package details in the following files:
   - `package.json`
   - `LICENSE`
   - `README.md`
   - `rollup.config.js`
3. Install the `node_module` dependencies: `npm install` or `npm ci` (see [Install a project with a clean slate](https://docs.npmjs.com/cli/v7/commands/npm-ci)).
4. Run code formatting; `npm run format`, and linting: `npm run lint:fix`.
5. Run the unit tests; `≈`, or with coverage; `npm test -- --coverage`.

Now you can start to adapt the code in `src/index.ts` for your plugin, starting with the [markdown-it development recommendations](https://github.com/markdown-it/markdown-it/blob/master/docs/development.md).

Modify the test in `tests/fixtures.spec.ts`, to load your plugin, then the "fixtures" in `tests/fixtures`, to provide a set of potential Markdown inputs and expected HTML outputs.

On commits/PRs to the `main` branch, the GH actions will trigger, running the linting, unit tests, and build tests.
Additionally setup and uncomment the [codecov](https://about.codecov.io/) action in `.github/workflows/ci.yml`, to provide automated CI coverage.

Finally, you can update the version of your package, e.g.: `npm version patch -m "🚀 RELEASE: v%s"`, push to GitHub; `git push --follow-tags`, build; `npm run build`, and publish; `npm publish`.

Finally, you can adapt the HTML document in `docs/`, to load both markdown-it and the plugin (from [unpkg]), then render text from an input area.
This can be deployed by [GitHub Pages].

## Design choices

### Why is markdown-it only in devDependencies?

From the [markdown-it development recommendations](https://github.com/markdown-it/markdown-it/blob/master/docs/development.md):

> Plugins should not require the `markdown-it` package as a dependency in `package.json`.

Note, for typing, we import this package with `import type`, to ensure the imports are not present in the compiled JavaScript.

### Why Vitest?

There are a number of JavaScript unit testing frameworks (see [this comparison](https://raygun.com/blog/javascript-unit-testing-frameworks/), [jest] is easy to setup/use, flexible, and well used in large projects however does not currently have [native support for ESM](https://github.com/jestjs/jest/issues/9430). [vitest] was chosen for out-of-the box compatibility with [jest], however, it is both more performant and is currently easier to integrate with ESM/TypeScript packages.

### Why Rollup?

The three main bundlers are; Webpack, Rollup and Parcel, with the functionality gap between all of these bundlers narrowing over the years.
Essentially, Rollup provides a middle ground between features and complexity, and is good for bundling libraries (it is what `markdown-it` itself [uses](https://github.com/markdown-it/markdown-it/blob/064d602c6890715277978af810a903ab014efc73/support/rollup.config.js)).

See for example:

- <https://medium.com/@PepsRyuu/why-i-use-rollup-and-not-webpack-e3ab163f4fd3>
- <https://medium.com/js-imaginea/comparing-bundlers-webpack-rollup-parcel-f8f5dc609cfd>
- <https://betterprogramming.pub/the-battle-of-bundlers-6333a4e3eda9>

[ci-badge]: https://github.com/executablebooks/markdown-it-myst-extras/workflows/CI/badge.svg
[ci-link]: https://github.com/executablebooks/markdown-it--plugin-template/actions
[npm-badge]: https://img.shields.io/npm/v/markdown-it-myst-extras.svg
[npm-link]: https://www.npmjs.com/package/markdown-it-myst-extras
[github actions]: https://docs.github.com/en/actions
[github pages]: https://docs.github.com/en/pages
[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[vitest]: https://vitest.dev/
[jest]: https://facebook.github.io/jest/
[rollup]: https://rollupjs.org
[npm]: https://www.npmjs.com
[unpkg]: https://unpkg.com/
