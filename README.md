# WeatherApp - Started with Create Next.js 13, Oxylabs, TailwindCSS, Tremore, Typescript and Skeleton

GoogleShoppingApp is an ambitious project that leverages the power of Next.js 13, a robust React framework, to create a dynamic Google Shopping App. The application is designed to efficiently gather external data through the integration of Oxylabs, potentially for web scraping, ensuring up-to-date and comprehensive product information. For an appealing and user-friendly front-end interface, TailwindCSS takes charge of styling and design, while TypeScript provides a strong foundation for codebase reliability, reducing errors and enhancing maintainability. To elevate the user experience during data retrieval, the project also seamlessly incorporates the Skeleton library, creating smooth skeleton loading screens. On the backend, a Next.js-based API has been meticulously crafted to oversee various server-side tasks, such as data management and routing. 

The user-friendly interface offers a search bar and a set of four filters (pages, sorting, minimum price, and maximum price) to allow users to precisely tailor their search results. Users can easily initiate product searches, and the results gracefully showcase vital product details. The left sidebar further enhances customization by offering filter options, ensuring a seamless shopping experience. Clicking on a product opens up a world of comprehensive information, including multiple images, pricing, detailed descriptions, specifications, user reviews, and product highlights, empowering users to make informed purchasing decisions.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How to create Next App

```sh
npx create-next-app@latest
```

## How to clone this repo

```sh
git clone https://github.com/nikul6/google-shopping.git
```

and then install node-modules

```sh
npm install
```

Create an account on [Oxylabs](https://oxylabs.io/), and then select the E-Commerce Scraper API. Choose the free trial option and create a username and password. Afterward, create an .env file for your project.

```bash
OXYLABS_USERNAME=username
OXYLABS_PASSWORD=password
```

You can fill in the actual username and password you obtained during the registration process on Oxylabs' platform.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 UI
You can watch the video [here](https://drive.google.com/file/d/1u0XS1w8y5-ftEuNra7XpiXPMekkumZ-k/view?usp=sharing)

## 📝 Notes

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn TailwindCSS: Docs](https://tailwindcss.com/)
- [Oxylabs API: Docs](https://developers.oxylabs.io/scraper-apis/e-commerce-scraper-api/google-shopping/shopping-search)
- [Tremor: Docs](https://www.tremor.so/)
- [React Avatar: npm](https://www.npmjs.com/package/react-avatar)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
