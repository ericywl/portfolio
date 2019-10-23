# ericywl's portfolio · [![Build Status](https://travis-ci.com/ericywl/ericywl.github.io.svg)](https://travis-ci.com/ericywl/ericywl.github.io)

Welcome to the source code for my personal website. The website is created using using Gatsby / ReactJS and hosted on GitHub Pages. Following are remainders for myself on how to develop the site...

## 🚀 Quick start

1.  **Start developing.**

    ```shell
    gatsby develop
    ```

2.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 💫 Deploy

Travis CI is set up to automatically build and deploy on changes to the `develop` branch. Otherwise, to manually deploy, use `gatsby build && gh-pages -d public -b master`. To avoid triggering CI build on miscellaneous updates like `README.md`, add `[skip ci] / [ci skip]` to the commit messages.
