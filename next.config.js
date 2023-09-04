/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions: true,
    },
    images:{
        domains: ["cdn.freebiesupply.com"],
    }
}

module.exports = nextConfig
