/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://nipunmadusanka.com', // Replace with your domain
    generateRobotsTxt: true, // (optional) Generate a robots.txt file
    sitemapSize: 5000, // Limit the number of URLs per sitemap file
    changefreq: 'daily', // Default change frequency
    priority: 0.7, // Default priority
  };
  
  module.exports = config;  