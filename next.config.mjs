/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx', 'md'],
    images: {
        domains: ['melanys.me', 'ui.melanys.me', 'localhost', 'localhost:3000'], // Add your domain for image optimization
      },
    
};

export default nextConfig;
