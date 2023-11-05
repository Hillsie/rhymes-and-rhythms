// @ts-check
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
    cleanDistDir: true,
    output: "standalone",
    // assetPrefix: `https://next-app-images.s3.eu-west-1.amazonaws.com/${version}`, 
    swcMinify: true,
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    outputFileTracing: true,
    reactStrictMode: true,
    poweredByHeader: false,
    productionBrowserSourceMaps: false
  };

  // withContentlayer(nextConfig)

  
  module.exports = withContentlayer(nextConfig)
  