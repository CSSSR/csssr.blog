# CSSSR blog

This repo contains the source code for [blog.csssr.com](https://blog.csssr.com).

*Readme is also available in [Russian](README.ru.md).*

## Description

We chose to build our blog using:
- [Next.js](https://nextjs.org/)
because it is evolving quickly, suits both developers and product needs, and has an amazing support
- [markdown](https://www.markdownguide.org/)
because it is easy to use and widespread
- [markdown-to-jsx](https://probablyup.com/markdown-to-jsx/)
because it adds more flexibility to md allowing us to integrate complex custom React components in it
- [imgproxy](https://imgproxy.net/)
because it is fast, reliable and helps us automate tedious image processing work
- [emotion](https://emotion.sh/docs/introduction)
because it is the most advanced CSS-in-JS library out there
- [github actions](https://github.com/features/actions)
because they are right here on github making CI easier than ever before
- [static html export](https://nextjs.org/docs/advanced-features/static-html-export)
because it helps us to achieve optimal performance and simplify deployment requirements

We hope that this repo will be helpful to anyone building a Next.js app or those especially interested in building a blog.

## Getting started

### Prerequisites

1. [Git](https://git-scm.com/download)
1. [Node.js LTS](https://nodejs.org/en/download/): any 12.x version starting with v12.0.0 or greater
1. [Yarn](https://yarnpkg.com/lang/en/docs/install/)
1. [Set up token for private github packages](https://confluence.csssr.io/display/DT/Github+packages)
*Currently it is restricted to company employees only, but we are preparing to share our internal npm packages with everyone!*

### Installation

1. Clone this repository
1. Run `yarn` in project root to install npm dependencies

### Running locally

1. Run `yarn dev` to start dev server
1. Open `localhost:3000` in browser

## License

The CSSSR blog site is an open source project released under the [MIT License](https://github.com/CSSSR/csssr.blog/LICENSE).
