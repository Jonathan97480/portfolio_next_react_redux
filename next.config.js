/** @type {import('next').NextConfig} */

module.exports={
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['api.jon-dev.fr'],
  },
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
}
