---
title: Events
---

<script setup>
import { data as events } from './events.data.mjs'
</script>

# Events

Below are our upcoming and recent events. Click any event for more details.

## Upcoming Events

<div class="events-grid">
  <a v-for="event in events" :key="event.url" :href="event.url" class="event-card">
    <img :src="event.image" :alt="event.title" class="event-image">
    <div class="event-content">
      <h3>{{ event.title }}</h3>
      <p class="event-meta">📅 {{ event.date }} · 📍 {{ event.location }}</p>
      <p class="event-desc">{{ event.description }}</p>
    </div>
  </a>
</div>

<style>
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
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
  height: 180px;
  object-fit: cover;
}

.event-content {
  padding: 16px;
}

.event-content h3 {
  margin: 0 0 8px;
  font-size: 1.1rem;
}

.event-meta {
  color: #666;
  font-size: 0.85rem;
  margin: 0 0 8px;
}

.event-desc {
  color: #444;
  font-size: 0.9rem;
  margin: 0;
}

.dark .event-card {
  background: #1a1a1a;
  border-color: #333;
}

.dark .event-card h3 {
  color: #ffffff;
}

.dark .event-meta {
  color: #aaa;
}

.dark .event-desc {
  color: #ccc;
}
</style>
