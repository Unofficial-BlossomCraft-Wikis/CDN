# CDN
simply just a CDN (Content Delivery Network) that allows shorter access to content on git.

## Usage
let's say you want to access `https://raw.githubusercontent.com/Unofficial-BlossomCraft-Wikis/SigmaBlossom/main/sigma.css` instead of that, the long link you can you the slightly shorter `cdn.blossomcraft.dovahkiin.xyz/SigmaBlossom/main/sigma.css` (or the main it way of `https://github.com/Unofficial-BlossomCraft-Wikis/SigmaBlossom/blob/main/sigma.css` also will bring up the file)

> You do NOT have to use this when working on official unofficial wikis however it is encouraged.

## Using the code
this code is hosted on Cloudflare Workers and is licensed under the MIT license if you want to use this code you can either:
1. Fork
2. Copy&Paste

### Fork
if you would like to use this using a fork follow these instructions:
  1. make the fork
  2. go into the `src/index.js` file and change the `gitRepoURL` const to what you want
    - this can be anything from `https://raw.githubusercontent.com` for use on the whole site to `https://raw.githubusercontent.com/User or organization/repo/main/folder/.../file` if you only want one file assessable
  3. go into the `wrangler.toml` file and change the name, this will be your worker's name and its URL (this one for me is: `cdn-blossomcraft.altie.workers.dev`)
  4. go into the repo settings -> secrets and variables -> Actions and make a new repo secret (MAKE SURE IT IS A SECRET NOT A VAR) name it CLOUDFLARE_API_TOKEN then go into [cloudflare.com](https://cloudflare.com/), sign in, then go to `My profile` in the upper right-hand corner, click on `API Tokens` -> create -> click on the workers preset, copy the token, paste it into your secret.
  5. go into `Actions` click on the first deployment (should have failed) and hit  `Re-Run`
  6. go to the URL (name.___.workers.dev) and it should be live! 🥳

### Copy&Paste
1. go into the `src/index.js` file and copy its contents
2. go to [cloudflare.com](https://cloudflare.com/) and log in
3. go to `Workers & Pages`
4. create app
5. create worker
6. name your worker & deploy
7. click `edit code`
8. select all of the current code in the js file then paste the contents of `src/index.js` into it
9. change the `gitRepoURL` const to what you want
    - this can be anything from `https://raw.githubusercontent.com` for use on the whole site to `https://raw.githubusercontent.com/User or organization/repo/main/folder/.../file` if you only want one file assessable
10. click `Save and deploy`
11. go to the URL (name.___.workers.dev) and it should be live! 🥳
