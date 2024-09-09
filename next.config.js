/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS,
    },
  }
  
    // console.log('Next.js Config - EMAIL_USER:', process.env.EMAIL_USER);
    // console.log('Next.js Config - EMAIL_PASS:', process.env.EMAIL_PASS);
  
  module.exports = nextConfig