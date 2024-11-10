## Tech Stacks

- Next.js v14.2.17 **app routing**
- Tailwind
- Typescript

## Decision making

- All the pages and components uses **Server Components** in default
- Only exception is PostFilter.tsx, it uses **Client component**.
- For step 3rd and 4th, in App router there is not such _getStaticProps_,_getServerSideProps_ methods. Therefore SSG page (post detail) is created with **'generateStaticParams'** function.
-

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
