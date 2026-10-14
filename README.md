# ecommerce-next

An open-source ecommerce storefront built with Next.js, designed first for
**personalized-products workshops** — sublimation, printing, engraving and
promotional-product shops that sell made-to-order items.

> Status: early skeleton. The full route map is in place; most pages are
> placeholders and the data model is just getting started. Contributions
> and feedback are welcome.

## Features (planned / in progress)

- **Storefront:** products, categories, cart and checkout
- **Customer account:** orders, addresses, wishlist
- **Admin panel:** products with brands, industries, materials, variants
  and media; orders with taxes, discounts and shipping packages;
  home-page customization
- **Themes:** every theme is a complete storefront design (Shopify-style),
  not a color scheme — switching themes rebuilds the look of the whole store

## Tech stack

- Next.js 16 + React 19
- Prisma 7 with the MariaDB/MySQL adapter
- better-auth
- Tailwind CSS 4
- pnpm

## Getting started

    pnpm install
    cp .env.example .env   # set your database and auth variables
    pnpm dev

## Roadmap

1. Prisma schema beyond the User model (products, variants, orders)
2. Real products API (today `/api/products` is a stub)
3. First complete storefront theme
4. Cart and checkout flow

## License

MIT — see LICENSE.
