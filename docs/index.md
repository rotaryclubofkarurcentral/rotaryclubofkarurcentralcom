---
layout: home
title: Home
aside: false
---

<script setup>
import { data as events } from './events.data.mjs'
import { data as projects } from './projects.data.mjs'
import { ref, onMounted } from 'vue'

const recentEvents = events.slice(0, 3)
const recentProjects = projects.slice(0, 3)

const slides = [
  { image: '/home/Frontpage2.jpg', text: 'Building community — one project at a time' },
  { image: '/home/Frontpage3.jpg', text: 'Together we make a difference' },
  { image: '/home/Frontpage1.jpg', text: 'Empowering communities' },
  { image: '/home/frontpage4.jpeg', text: 'Join us in making change' }
]

const currentSlide = ref(0)
let autoSlideInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  autoSlideInterval = setInterval(nextSlide, 5000)
})
</script>

<div class="hero">
  <h1>ROTARY CLUB OF KARUR CENTRAL</h1>
  <p>Club ID: 59133 | Charted 2002</p>
</div>

<div class="slider-container">
  <div class="slider">
    <button class="slider-btn prev" @click="prevSlide">❮</button>
    <div class="slide-wrapper">
      <img :src="slides[currentSlide].image" :alt="slides[currentSlide].text" class="slide-image">
      <div class="slide-overlay">
        <p class="slide-text">{{ slides[currentSlide].text }}</p>
      </div>
    </div>
    <button class="slider-btn next" @click="nextSlide">❯</button>
  </div>
  <div class="slider-dots">
    <button 
      v-for="(slide, index) in slides" 
      :key="index" 
      :class="['dot', { active: currentSlide === index }]"
      @click="goToSlide(index)"
    ></button>
  </div>
</div>

## Recent / Upcoming Events

<div class="events-grid">
  <a v-for="event in recentEvents" :key="event.url" :href="event.url" class="event-card">
    <img :src="event.image" :alt="event.title" class="event-image">
    <div class="event-content">
      <h3>{{ event.title }}</h3>
      <p class="event-meta">📅 {{ event.date.split('T')[0] }} · 📍 {{ event.location }}</p>
      <p class="event-desc">{{ event.description }}</p>
    </div>
  </a>
</div>

<div style="text-align:center;margin-top:16px;">
  <a href="/events" class="btn">View All Events →</a>
</div>

<!-- 
## Recent Projects

<div class="projects-grid">
  <a v-for="project in recentProjects" :key="project.url" :href="project.url" class="project-card">
    <img :src="project.image" :alt="project.title" class="project-image">
    <div class="project-content">
      <h3>{{ project.title }}</h3>
      <p class="project-meta">📅 {{ project.date }} · 📍 {{ project.location }}</p>
      <p class="project-desc">{{ project.description }}</p>
    </div>
  </a>
</div>

<div style="text-align:center;margin-top:16px;">
  <a href="/projects" class="btn">View All Projects →</a>
</div>
-->

<div class="footer">
  <p>Want to see all events and projects? Visit the Events and Projects pages.</p>
  <p><a class="btn" href="/events">Events</a> <a style="margin-left:8px" class="btn" href="/projects">Projects</a></p>
</div>

<style>
:root {
  --accent: #17458f;
  --muted: #666;
}

/* Hide VitePress aside on home */
/* Hide aside on home page */
.VPDoc .aside {
  display: none !important;
}

.hero {
  background: linear-gradient(180deg, #f6fbff, white);
  padding: 40px 20px;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 20px;
}

.hero-logo {
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
}

.hero h1 {
  margin: 0 0 12px;
  font-size: 4rem;
}

.hero p {
  margin: 0;
  color: var(--muted);
}

/* Rich Slider Styles */
.slider-container {
  width: 100%;
  max-width: 100%;
  margin: 0 0 30px 0;
}

.slider {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.slide-wrapper {
  position: relative;
  width: 100%;
  height: 600px;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  padding: 40px 20px 20px;
}

.slide-text {
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.9);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.slider-btn:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
}

.slider-btn.prev {
  left: 16px;
}

.slider-btn.next {
  right: 16px;
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s;
}

.dot:hover {
  background: rgba(0, 102, 204, 0.3);
}

.dot.active {
  background: var(--accent);
  transform: scale(1.2);
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px 0;
}

.event-card {
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, transform 0.2s;
  background: white;
}

.event-card:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.event-image {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.event-content {
  padding: 14px;
}

.event-content h3 {
  margin: 0 0 8px;
  font-size: 1rem;
}

.event-meta {
  color: #666;
  font-size: 0.8rem;
  margin: 0 0 6px;
}

.event-desc {
  color: #444;
  font-size: 0.85rem;
  margin: 0;
}

.grid-three {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 20px 0;
}

.card {
  border: 1px solid #eee;
  padding: 16px;
  border-radius: 8px;
  background: white;
}

.card h3 {
  margin: 0 0 8px;
}

.card p {
  margin: 0;
  color: #555;
}

.btn {
  display: inline-block;
  background: var(--accent);
  color: white !important;
  padding: 10px 18px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
}

.btn:hover {
  opacity: 0.9;
}

.footer {
  padding: 24px;
  text-align: center;
  color: var(--muted);
  border-top: 1px solid #f0f0f0;
  margin-top: 32px;
}

/* Dark mode */
.dark .hero {
  background: linear-gradient(180deg, #1a1a2e, #16213e);
}

.dark .hero h1 {
  color: #ffffff;
}

.dark .hero p {
  color: #aaa;
}

.dark .slider {
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}

.dark .slider-btn {
  background: rgba(40,40,40,0.9);
  color: white;
}

.dark .slider-btn:hover {
  background: #333;
}

.dark .dot {
  border-color: #5b8fd9;
}

.dark .dot.active {
  background: #5b8fd9;
}

.dark .event-card,
.dark .card {
  background: #1a1a1a;
  border-color: #333;
}

.dark .event-card h3,
.dark .card h3 {
  color: #ffffff;
}

.dark .event-meta,
.dark .card p {
  color: #aaa;
}

.dark .event-desc {
  color: #ccc;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px 0;
}

.project-card {
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, transform 0.2s;
  background: white;
}

.project-card:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.project-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.project-content {
  padding: 14px;
}

.project-content h3 {
  margin: 0 0 8px;
  font-size: 1rem;
}

.project-meta {
  color: #666;
  font-size: 0.8rem;
  margin: 0 0 6px;
}

.project-desc {
  color: #444;
  font-size: 0.85rem;
  margin: 0;
}

.dark .project-card {
  background: #1a1a1a;
  border-color: #333;
}

.dark .project-card h3 {
  color: #ffffff;
}

.dark .project-meta {
  color: #aaa;
}

.dark .project-desc {
  color: #ccc;
}

/* Tablet responsive */
@media (max-width: 900px) {
  .events-grid,
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile responsive */
@media (max-width: 640px) {
  .slide-wrapper {
    height: 280px;
  }
  
  .slide-text {
    font-size: 1.1rem;
  }
  
  .slider-btn {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .slider-btn.prev {
    left: 8px;
  }
  
  .slider-btn.next {
    right: 8px;
  }

  .events-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
