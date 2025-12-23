import { createContentLoader } from 'vitepress'

export default createContentLoader('events/*.md', {
  includeSrc: false,
  transform(rawData) {
    return rawData
      .filter(page => page.url !== '/events/') // exclude index
      .map(page => ({
        title: page.frontmatter.title,
        date: page.frontmatter.date,
        location: page.frontmatter.location,
        guest: page.frontmatter.guest,
        image: page.frontmatter.image,
        description: page.frontmatter.description,
        url: page.url
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date)) // sort by date ascending (upcoming first)
  }
})
