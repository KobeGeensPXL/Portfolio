<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import { usePreferredDark } from '@vueuse/core'

const route = useRoute()
const isLoaded = ref(false)
const prefersDark = usePreferredDark()
const isDarkMode = ref(false)

// Initialize dark mode based on user preference or system setting
onMounted(() => {
  isLoaded.value = true
  
  // Check localStorage first
  const savedTheme = localStorage.getItem('color-theme')
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark.value)) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDarkMode.value = false
    document.documentElement.classList.remove('dark')
  }
})

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('color-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('color-theme', 'light')
  }
}

// Watch for route changes to add page transitions
watch(
  () => route.path,
  () => {
    window.scrollTo(0, 0)
  }
)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
    
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
  </div>
</template>