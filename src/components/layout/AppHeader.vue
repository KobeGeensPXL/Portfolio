<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

// Props
defineProps<{
  isDarkMode: boolean
}>()

// Emits
const emit = defineEmits<{
  (e: 'toggle-dark-mode'): void
}>()

// State
const route = useRoute()
const router = useRouter()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

// Navigation links
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Over mij', path: '/about' },
  { name: 'Activiteiten', path: '/activities' },
  { name: 'Studiereis', path: '/activity/1' },
  { name: 'Hackathon', path: '/activity/2' },
  { name: 'Innovatie Route', path: '/activity/3' },
  { name: 'Reflectie', path: '/reflection' }
]

// Close menu when route changes
watchEffect(() => {
  if (route.path) {
    isMenuOpen.value = false
  }
})

// Handle scroll events
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Setup scroll listener
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
}
</script>

<template>
  <header
    class="fixed w-full top-0 z-50 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm py-2' 
        : 'bg-transparent py-4'
    ]"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link 
          to="/" 
          class="font-bold text-xl md:text-2xl text-neutral-900 dark:text-white no-underline"
        >
          Portfolio
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 px-1 py-2"
            :class="{ 'text-primary-500 dark:text-primary-400': route.path === link.path }"
          >
            {{ link.name }}
          </router-link>
          
          <!-- Dark mode toggle -->
          <button 
            @click="emit('toggle-dark-mode')" 
            class="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            <SunIcon v-if="isDarkMode" class="h-5 w-5 text-neutral-300" />
            <MoonIcon v-else class="h-5 w-5 text-neutral-700" />
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="p-2 md:hidden rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
          <XMarkIcon v-else class="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 shadow-lg"
    >
      <nav class="container mx-auto px-4 py-4 flex flex-col">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="py-3 px-4 border-b border-neutral-100 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
          :class="{ 'text-primary-500 dark:text-primary-400': route.path === link.path }"
        >
          {{ link.name }}
        </router-link>
        
        <!-- Dark mode toggle (mobile) -->
        <button 
          @click="emit('toggle-dark-mode')" 
          class="flex items-center py-3 px-4 text-neutral-700 dark:text-neutral-300"
        >
          <SunIcon v-if="isDarkMode" class="h-5 w-5 mr-3" />
          <MoonIcon v-else class="h-5 w-5 mr-3" />
          <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
        </button>
      </nav>
    </div>
  </header>
</template>