/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_ACTIONS === 'true' ? '/yashashwini_awate' : '';

export default {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
