# TS Cloudflare Worker Skeleton
This repository contains Typescript starter code for a [Cloudflare Worker](https://www.cloudflare.com/products/cloudflare-workers/).
When building and webpacking, the Typescript transpiles to Javascript so it can run in the Workers environment.

This starter code is heavily drawn from John Fawcett's great [blog post](https://blog.cloudflare.com/using-webpack-to-bundle-workers/) 
about webpackaging TS code for Workers. I've added some additional npm support for deploying the worker to your (non-enterprise) CF zone.
If you want to deploy to an ENT zone, check out the [API documentation](https://developers.cloudflare.com/workers/api/config-api-for-enterprise/)
for enterprise.

## Using this Starter Code
First install all the node_modules: 
```bash
npm install
```
To build the orchestrator, run
```bash
npm run build
```
To test a deployment to a Cloudflare Worker environment, but not actually deploy it, run
```bash
npm run preview
```
To actually deploy to a Cloudflare Worker, edit workers.config to include your Cloudflare account information, and run
```bash
npm run deploy
```
After this deploy, the Worker will be available on our Workers editor. Here you can customize the route that leads to the Worker. 