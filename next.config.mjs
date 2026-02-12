import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/notes'
})

export default withNextra({
  reactStrictMode: true
})
