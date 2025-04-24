<script setup lang="ts">
import { ref } from 'vue';

// Skills data
const skills = ref([
  {
    category: 'Development',
    items: [
      { name: 'JavaScript', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'TypeScript', level: 70 }
    ]
  },
  {
    category: 'Design',
    items: [
      { name: 'UI/UX Design', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Adobe XD', level: 75 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Sketch', level: 65 }
    ]
  },
  {
    category: 'Other',
    items: [
      { name: 'Project Management', level: 80 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'Technical Writing', level: 75 },
      { name: 'SEO', level: 70 },
      { name: 'Analytics', level: 65 }
    ]
  }
]);
</script>

<template>
  <section class="section bg-white dark:bg-neutral-900">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center mb-16">
        <h2 class="font-bold mb-4 text-neutral-900 dark:text-white">Skills & Expertise</h2>
        <p class="max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300">
          Here's a snapshot of my professional skills and competencies.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(skillGroup, index) in skills" 
          :key="skillGroup.category"
          class="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6"
        >
          <h3 class="font-bold text-xl mb-6 text-neutral-900 dark:text-white">
            {{ skillGroup.category }}
          </h3>
          
          <div class="space-y-6">
            <div v-for="skill in skillGroup.items" :key="skill.name" class="space-y-2">
              <div class="flex justify-between">
                <span class="text-neutral-800 dark:text-neutral-200">{{ skill.name }}</span>
                <span class="text-neutral-500 dark:text-neutral-400">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 overflow-hidden">
                <div 
                  class="h-full rounded-full bg-primary-500 transition-all duration-1000 ease-out" 
                  :style="{ width: `${skill.level}%`, transitionDelay: `${index * 100 + 200}ms` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>