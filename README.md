# GitHub Linkify

> Browser extension that displays a link to GitHub profiles and repos from GitHub Pages

GitHub profile and repo links are sometimes front and center, but not always. This extension detects whenever you're visiting a GitHub Pages site, and adds a quick link to the corresponding profile or repo in the address bar.


## How it works

GitHub Pages are usually hosted on the github.io domain. Whenever you visit someprofile.github.io, this extension will link you to the corresponding profile at github.com/someprofile. If there is a directory path in the URL, such as someprofile.github.io/someproject, the link will bring you to github.com/someprofile/someproject.

### Caveats

If the directory is actually a directory, the link will be incorrect. I'm working on adding GitHub API requests to verify that the directory corresponds to a repo or not.

## Other GitHub extensions

Here are some other GitHub-oriented extensions in the wild.

* [Octotree](https://github.com/buunguyen/octotree)
* [GitHub Notifier](https://github.com/sindresorhus/github-notifier-chrome)
* [GitHub Tab Size](https://github.com/sindresorhus/github-tab-size)
* [GitHub Hide Files](https://github.com/sindresorhus/github-hide-files)
* [GitHub Markdown Menu](https://github.com/willklein/github-markdown-menu)
