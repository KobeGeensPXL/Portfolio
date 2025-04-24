<script setup lang="ts">
defineProps<{
  activity: {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    date: string;
    location: string;
    duration?: string;
    link: string;
  }
}>();
</script>

<template>
  <router-link :to="activity.link" class="group">
    <article class="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <!-- Image -->
      <div class="aspect-video overflow-hidden">
        <img 
          :src="activity.image" 
          :alt="activity.title" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <!-- Content -->
      <div class="p-6 flex-grow flex flex-col">
        <div class="mb-4">
          <span class="bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded-full text-xs">
            {{ activity.category }}
          </span>
        </div>
        
        <h3 class="font-bold text-xl mb-2 text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors duration-200">
          {{ activity.title }}
        </h3>
        
        <p class="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 flex-grow">
          {{ activity.description }}
        </p>
        
        <div class="flex flex-col gap-2 mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-700">
          <span class="text-sm text-neutral-500 dark:text-neutral-400">
            {{ activity.date }}
          </span>
          <span class="text-sm text-neutral-500 dark:text-neutral-400">
            Locatie activiteit: {{ activity.location }}
          </span>
          <span v-if="activity.duration" class="text-sm text-neutral-500 dark:text-neutral-400">
            {{ activity.duration }}
          </span>
        </div>
      </div>
    </article>
  </router-link>
</template>