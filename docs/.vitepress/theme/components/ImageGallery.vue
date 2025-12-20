<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const lightboxOpen = ref(false)
const lightboxImage = ref('')

const openLightbox = (img) => {
  lightboxImage.value = img
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}
</script>

<template>
  <div class="gallery">
    <img 
      v-for="(img, index) in images" 
      :key="index" 
      :src="img" 
      alt="Project photo"
      @click="openLightbox(img)"
      class="gallery-image"
    >
  </div>

  <Teleport to="body">
    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <button class="lightbox-close" @click.stop="closeLightbox">✕</button>
      <img :src="lightboxImage" alt="Enlarged photo" class="lightbox-image" @click.stop>
    </div>
  </Teleport>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  margin: 20px 0;
}

.gallery-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.gallery-image:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
}

.lightbox-image {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  cursor: default;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
}

.lightbox-close:hover {
  color: #ccc;
}
</style>
