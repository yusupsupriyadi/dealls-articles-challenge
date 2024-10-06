# Dealls Articles Challenge Project Documentation

![image](https://github.com/user-attachments/assets/ac6ecab8-0407-404a-8d7a-a4b4a42e286e)


## Project Description
This is a Next.js project created for the Dealls articles challenge. It utilizes various modern technologies to build a responsive and customizable web application.

## Core Technologies
- Next.js 14.2.14
- React 18
- TypeScript
- Tailwind CSS

## Main Dependencies
- @radix-ui/react-dropdown-menu: ^2.1.2
- @radix-ui/react-icons: ^1.3.0
- @radix-ui/react-popover: ^1.1.2
- @radix-ui/react-scroll-area: ^1.2.0
- @vercel/analytics: ^1.3.1
- axios: ^1.7.7
- class-variance-authority: ^0.7.0
- clsx: ^2.1.1
- lucide-react: ^0.447.0
- next-themes: ^0.3.0
- react-infinite-scroll-component: ^6.1.0
- react-slick: ^0.30.2
- slick-carousel: ^1.8.1
- tailwind-merge: ^2.5.3
- tailwindcss-animate: ^1.0.7
- usehooks-ts: ^3.1.0

## Tailwind Configuration
This project uses a customized Tailwind configuration, including:
- Dark theme
- Custom colors
- Custom fonts (Roboto and Lora)
- Animation plugin

## Project Structure
- `src/app`: Contains main Next.js application components
- `src/components`: Reusable React components
- `src/services`: Services for data fetching

## Key Features
1. Dark/Light Theme
2. Vercel Analytics
3. SEO Optimization (sitemap and robots.txt)
4. Customizable UI Components
5. Infinite scrolling
6. Carousel using react-slick

## Project Setup
1. Copy `.env.example` to `.env`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Available Scripts
- `dev`: Run development server
- `build`: Build the application for production
- `start`: Run the built application
- `lint`: Run ESLint
- `postinstall`: Copy .env.example to .env

## SEO Optimization
This project includes:
- Dynamic sitemap (`src/app/sitemap.ts`)
- Robots.txt file (`src/app/robots.ts`)
- Customizable metadata for each page

## Styling and Theming
- Uses Tailwind CSS for styling
- Toggleable dark/light theme
- Custom fonts: Roboto and Lora

## Custom Components
- Navbar
- Various UI components from Radix UI

## Analytics
Uses Vercel Analytics to track site performance and usage.

## Future Development
- Add more pages and features
- Improve performance and accessibility
- Add testing

For more information on development and deployment, refer to the official Next.js documentation.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
