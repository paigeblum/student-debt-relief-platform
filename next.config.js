/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
  images: {
    domains: [
      'lh3.googleusercontent.com', // Google OAuth images
      'uploadthing.com', // UploadThing
      'utfs.io', // UploadThing CDN
    ],
  },
}

module.exports = nextConfig