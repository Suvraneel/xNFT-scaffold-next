# xNFT Backpack Scaffold 🎒  

## NextJS 13 App Router, TypeScript, TailwindCSS, Solana, Web3.js

**Open source [Next.js](https://nextjs.org/) , [Solana](https://github.com/solana-labs ) xNFT Backpack Scaffold for the community and whole ecosystem - without much fluff and just the essentials. 💪**

<img width="1000px" src="https://github.com/Suvraneel/xNFT-scaffold-next/assets/63473496/9a6a8e70-38e2-40b8-a881-6cd1dfe27254"/>

  
### Feel free to use it as a starting point for your next Solana project </h3>

Also feel free to send us feedback, open an issue or even PR and contribute by creating your own components, refactoring or other improvements.

<img align="right" width="300px" src="https://github.com/Suvraneel/xNFT-scaffold-next/assets/63473496/ec0911c7-252f-4615-9439-913abc93ac22"/>  

## Getting Started

- Create a project using this example:

```bash
git clone https://github.com/Suvraneel/xNFT-scaffold-next
cd xNFT-scaffold-next
code .
```

- Remove `.example` from `.env.example` and add your RPC endpoint to `NEXT_PUBLIC_HELIUS_URL=""`  

- Install dependencies & start buidling:

```bash
npm i && npm run dev
```

or  

```bash
yarn && yarn dev
```  

or  

```bash
pnpm i && pnpm run dev
```

---

- Production Build  

```bash
npm run build #or yarn build or pnpm run build (accordingly)
```

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.
If you want to add a new page you just create another file in `src/app/*` folder - Have a look at `nfts/page.tsx` as an example.

On `src/contexts/*`, you'll find `AllProvider` for all provider contexts (eg, ToastProvider), and "WalletProvider" wrapping your app, this is necessary for everything to work.

## Learn More

To learn more about Solana and Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Solana Documentation](https://docs.solana.com/) - learn about Solana features.
  
- [Anchor Language Book](https://book.anchor-lang.com/) - learn about Solana features.
  
- [Rust Anchor Documentation](https://docs.rs/anchor-lang/latest/anchor_lang/) - learn about Solana features.
  
- [TailwindCSS Documentation](https://tailwindcss.com/docs/guides/nextjs) - learn about TailwindCSS features.
