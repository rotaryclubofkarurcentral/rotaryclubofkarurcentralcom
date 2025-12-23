import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ImageGallery from './components/ImageGallery.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ImageGallery', ImageGallery)
  }
}
