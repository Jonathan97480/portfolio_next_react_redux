/** @type {import('next-sitemap').IConfig} */

module.exports={
    siteUrl: process.env.SITE_URL||'https://example.com',
    generateRobotsTxt: true, // (optional)
    exclude: ['/server-sitemap.xml,/client,/client/*,client/*/*'],
    // ...other options
}