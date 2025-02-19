This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

First configure your app by copying the `.env.example` file to `.env` and substitute the values
for your development environment.

Then, install the dependencies:

```bash
npm install
# or
yarn
```

## Getting Started

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

To setup [Husky](https://typicode.github.io/husky), run:
```bash
yarn prepare
```

## Storybook 📖
Run `yarn storybook` to start Storybook locally and output the address. Depending on your system configuration, it will automatically open the address in a new browser tab, and you'll be greeted by a welcome screen.

[Introduction to Storybook for React](https://storybook.js.org/docs/react/get-started/introduction)

[How to mock applo client](https://storybook.js.org/addons/storybook-addon-apollo-client)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [How to analyze the Next.js app bundles](https://flaviocopes.com/nextjs-analyze-app-bundle/) - Learn more about what's in your Next.js app bundles.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Known Issues and Solutions

#### yarn dev openssl issue

If after running `yarn dev` you see:

```bash
error:0308010C:digital envelope routines::unsupported
```

paste the following into your terminal:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

Then try again.

OS's affected:

- macOS Monterey (M1 Pro)
