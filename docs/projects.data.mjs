import { createContentLoader } from 'vitepress'

export default createContentLoader('projects/*.md', {
  includeSrc: false,
  transform(rawData) {
    return rawData
      .filter(page => page.url !== '/projects/') // exclude index
      .map(page => ({
        title: page.frontmatter.title,
        date: page.frontmatter.date,
        location: page.frontmatter.location,
        participants: page.frontmatter.participants,
        image: page.frontmatter.image,
        description: page.frontmatter.description,
        gallery: page.frontmatter.gallery || [],
        url: page.url
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // sort by date descending (most recent first)
  }
})
