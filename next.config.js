/** @type {import('next').NextConfig} */
const webpack = require('webpack')

const { parsed: myEnv } = require('dotenv').config({
    path: './.env',
})

const nextConfig = {
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
        return config
    },
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com'],
    }
}

module.exports = nextConfig
