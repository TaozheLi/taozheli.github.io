# Taozhe Li — Personal Website

Personal portfolio for Taozhe Li, a Computer Science Ph.D. student at the University of Oklahoma.

Live website: https://taozheli.github.io

## Content

Edit `src/profile.json` to update personal information, education, experience, projects, publications, and awards. Contact/social navigation is in `src/config.js`.

## Development

This adaptation retains Gatsby 3. Use Node.js 16.20.2 for compatibility with this legacy dependency tree.

```sh
yarn install --frozen-lockfile
yarn develop
```

Production build: `yarn build`. GitHub Actions builds and deploys to GitHub Pages on pushes to `main`.

Node.js 16 is end-of-life; a future dependency migration is recommended. No application server is exposed by this static website.

## Credits

Adapted from [Brittany Chiang v4](https://github.com/bchiang7/v4). Original design by [Brittany Chiang](https://brittanychiang.com). MIT license retained in `LICENSE`.
