---
title: Projects
---

<script setup>
import { data as projects } from '../projects.data.mjs'
</script>

# Projects

Our recent projects and ongoing initiatives making a difference in the community.

<!--
## Recent Projects

<div class="projects-grid">
  <a v-for="project in projects" :key="project.url" :href="project.url" class="project-card">
    <img :src="project.image" :alt="project.title" class="project-image">
    <div class="project-content">
      <h3>{{ project.title }}</h3>
      <p class="project-meta">📅 {{ project.date }} · 📍 {{ project.location }}</p>
      <p class="project-participants">👥 {{ project.participants }}</p>
      <p class="project-desc">{{ project.description }}</p>
    </div>
  </a>
</div>
-->

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 24px;
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
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
  transform: translateY(-3px);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 18px;
}

.project-content h3 {
  margin: 0 0 10px;
  font-size: 1.15rem;
  color: #1a1a1a;
}

.project-meta {
  color: #666;
  font-size: 0.85rem;
  margin: 0 0 6px;
}

.project-participants {
  color: #17458f;
  font-size: 0.85rem;
  margin: 0 0 10px;
  font-weight: 500;
}

.project-desc {
  color: #555;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

/* Dark mode */
.dark .project-card {
  background: #1a1a1a;
  border-color: #333;
}

.dark .project-content h3 {
  color: #fff;
}

.dark .project-meta {
  color: #aaa;
}

.dark .project-participants {
  color: #5b8fd9;
}

.dark .project-desc {
  color: #ccc;
}
</style>
