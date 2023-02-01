/** @type {import('next').NextConfig} */
const withBundleAnalyzer=require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE==='true',

});



module.exports=withBundleAnalyzer({

  reactStrictMode: true,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,


  images: {
    domains: ['api.jon-dev.fr'],
  },
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
});

  // your other plugins here


