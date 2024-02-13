import { dirname, join } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [join(dirname(import.meta.url), 'styles')],
  },
};

export default nextConfig;
