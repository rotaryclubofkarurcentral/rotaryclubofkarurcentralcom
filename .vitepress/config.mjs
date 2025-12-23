import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Rotary Club of Karur Central',
  description: 'Club blog, events and projects',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    siteTitle: 'Rotary Club of Karur Central',
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Events', link: '/events' },
      { text: 'Projects', link: '/projects' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' }
    ],
    footer: {
      message: '© 2025 Rotary Club of Karur Central',
      copyright: ''
    }
  }
})
