/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // new url: https://cdn.jsdelivr.net/gh/Unofficial-BlossomCraft-Wikis: https://cdn.jsdelivr.net/gh/Unofficial-BlossomCraft-Wikis/SigmaBlossom@main/dist/css/sigma.min.css
  const gitRepoURL = 'https://cdn.jsdelivr.net/gh/Unofficial-BlossomCraft-Wikis';
  const requestURL = new URL(request.url);
  let path = requestURL.pathname;

  // Remove '/blob' from the path
  path = path.replace('/blob/', '@');

  // Construct the Git URL based on the request path
  const gitFetchURL = `${gitRepoURL}${path}`;

  // Fetch content from Git
  const gitResponse = await fetch(gitFetchURL);

  // Return the Git response
  return new Response(gitResponse.body, {
    status: gitResponse.status,
    statusText: gitResponse.statusText,
    headers: gitResponse.headers,
  });
}
