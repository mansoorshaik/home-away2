/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable React's strict mode for development
  
    eslint: {
      // Disable ESLint during builds (temporary bypass)
      ignoreDuringBuilds: true,
    },
  
    typescript: {
      // Disable TypeScript errors during builds (temporary bypass)
      ignoreBuildErrors: true,
    },
  };
  
  export default nextConfig;