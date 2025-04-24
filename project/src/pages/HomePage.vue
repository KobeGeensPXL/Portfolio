<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Animation logic
const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-16">
      <div class="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div :class="{ 'opacity-0': !isVisible, 'animate-fade-in': isVisible }">
            <h1 class="font-bold mb-6 text-neutral-900 dark:text-white">
              <span class="block">Hallo, ik ben</span>
              <span class="text-primary-500">Kobe Geens</span>
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-neutral-700 dark:text-neutral-300 max-w-xl">
              Een student toegepaste informatica met afstudeer richting applicaatie ontwikkeling
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/about" class="btn btn-primary">
                Over mij
              </router-link>
              <router-link to="/activities" class="btn btn-secondary">
                Activiteiten
              </router-link>
            </div>
          </div>
          
          <div 
            class="rounded-2xl overflow-hidden shadow-xl transform lg:rotate-2 transition-all duration-500"
            :class="{ 'opacity-0': !isVisible, 'animate-fade-in fade-delay-2': isVisible }"
          >
            <img 
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Developer working on code" 
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>