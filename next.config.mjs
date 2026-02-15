/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const [owner, repoName] = process.env.GITHUB_REPOSITORY?.split('/') ?? []
const resolvedRepoName = repoName ?? 'floris-presentation'
// User/organization site repositories are named "<owner>.github.io" and live at the domain root.
const isUserSite = !!owner && resolvedRepoName === `${owner}.github.io`
const basePath = isProd && !isUserSite ? `/${resolvedRepoName}` : ''

const nextConfig = {
  // GitHub Pages = static hosting, so we must export to /out
  output: 'export',
  // Ensures routes resolve as /path/index.html (works better on static hosts)
  trailingSlash: true,
  // Next/Image optimization requires a server; disable for static export
  images: { unoptimized: true },
  // When hosted at https://<user>.github.io/<repo>/ we need a basePath
  basePath,
  // Prefix assets as well (helps avoid 404 for /_next/* on Pages)
  assetPrefix: isProd ? `${basePath}/` : '',
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
