<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import ActivityCard from '../components/activities/ActivityCard.vue';

// Animation trigger for elements
const isVisible = ref(false);

// Activities data
const activities = ref([
  {
    id: 'activity1',
    title: 'AE: State management for Angular',
    category: 'Development',
    description: 'Technieken om beter gebruik te maken van Angular zijn state management.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '11/12/2024',
    location: 'Corda 7 - CC714',
    duration: '4 uur',
    link: '#'
  },
  {
    id: 'activity2',
    title: 'ACA: Behavior Driven Development',
    category: 'Development',
    description: 'Met enkele Java libraries testen schrijven.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '27/11/24',
    location: 'Corda 7 - CC712',
    duration: '4 uur',
    link: '#'
  },
  {
    id: 'activity3',
    title: 'ITLicious: Flutter',
    category: 'Development',
    description: 'Wat Flutter is en enkele oefeningen om in Flutter te maken',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '06/11/24',
    location: 'Corda 7 - CC713',
    duration: '3 uur',
    link: '#'
  },
  {
    id: 'activity4',
    title: 'Nocomputer: prompt engineering',
    category: 'AI',
    description: 'Uitleg over hoe large language models werken en hoe je hier van gebruik hoort te maken vooral gericht op prompt engineering.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '23/10/2024',
    location: 'Corda 7 - CC714',
    duration: '4 uur',
    link: '#'
  },
  {
    id: 'activity5',
    title: 'Kabisa: Gebruik van AI in softwareontwikkeling',
    category: 'AI',
    description: 'Wat ai is en hoe hiervan gebruik te maken meet prompt engineering.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '14/05/2024',
    location: 'Digital PXL – G414',
    duration: '3 uur',
    link: '#'
  },
  {
    id: 'activity6',
    title: 'MbarQ: ChatGPT implenentaties voor bedrijven',
    category: 'AI',
    description: 'Uitleg over hoe large language models werken en hoe je hier van gebruik hoort te maken.',
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '23/04/2024',
    location: 'Digital PXL – G414',
    duration: '2 uur',
    link: '#'
  },
  {
    id: 'activity7',
    title: 'Ericsson: The path to 6G',
    category: 'Network',
    description: 'Historische uitleg van 1G tot vooruitblik op 6G.',
    image: 'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '19/03/2024',
    location: 'Digital PXL – G414',
    duration: '4 uur',
    link: '#'
  },
  {
    id: 'activity8',
    title: 'CBTW/Positive Thinking Company: CQRS with MediatR',
    category: 'Development',
    description: 'Mediatr .NET library en SOLID principes.',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '27/02/2024',
    location: 'Digital PXL – G414',
    duration: '4 uur',
    link: '#'
  },
  {
    id: 'activity9',
    title: 'Projectweek 2TIN',
    category: 'Workshop',
    description: 'Verschillende korte activiteiten voor jezelf en teamgenoten te bespreken en leren kennen.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '12/02/2024 t.e.m. 16/02/2024',
    location: 'Digital PXL, gebouw B',
    link: '#'
  },
  {
    id: 'activity10',
    title: 'POP-sessie 2TIN - Brein aan het werk! Niet storen!',
    category: 'Workshop',
    description: 'Veel info over routines en dat vel mensen te veel tijd spenderen op hun smartphone.',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '20/02/2024',
    location: 'Digital PXL, gebouw B',
    link: '#'
  },
  {
    id: 'activity11',
    title: 'POP-sessie 2TIN - POPping',
    category: 'Workshop',
    description: 'Over persoonlijk ontwikkeling en hoe je dit wil bereiken',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '07/03/2024',
    location: 'Digital PXL, gebouw B',
    link: '#'
  },
  {
    id: 'activity12',
    title: 'POP-sessie 3TIN - My Team and I',
    category: 'Workshop',
    description: 'Beginnen met kort beschrijving over in en teamwerken en wat belangrijk is en dan enkele kleine spellen waarbij je moet samenwerken.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '9/10/2024',
    location: 'Corda 7',
    duration: '2 uur',
    link: '#'
  },
  {
    id: 'activity13',
    title: 'Innovatieroute Cloud&Security',
    category: 'Security',
    description: '3 verschillende bedrijven die komen praten over cyber security.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '24/09/2024, 01/10/2024, 08/10/2024',
    location: 'Corda 7',
    link: '#'
  },
  {
    id: 'activity14',
    title: 'PXL-hackathon',
    category: 'Development',
    description: 'Op 2 dagen een prototype game maken voor mensen met en mentale handicap.',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '10/02/2025, 11/02/2025',
    location: 'Corda 7',
    duration: '16 uur',
    link: '#'
  }
]);

// Categories for filtering
const categories = ['All', 'Development', 'AI', 'Network', 'Workshop', 'Security'];
const selectedCategory = ref('All');

// Filtered activities
const filteredActivities = computed(() => {
  if (selectedCategory.value === 'All') {
    return activities.value;
  }
  return activities.value.filter(activity => activity.category === selectedCategory.value);
});

// Filter function
const filterByCategory = (category) => {
  selectedCategory.value = category;
};

onMounted(() => {
  // Trigger animations when component mounts
  isVisible.value = true;
});
</script>

<template>
  <div class="min-h-screen pt-24 pb-16">
    <div class="container mx-auto px-4 md:px-6">
      <!-- Page Header -->
      <div 
        class="mb-12 transition-all duration-700"
        :class="{ 'opacity-0 translate-y-4': !isVisible, 'opacity-100 translate-y-0': isVisible }"
      >
        <h1 class="font-bold mb-6 text-neutral-900 dark:text-white">Activiteiten</h1>
        <div class="w-20 h-1 bg-primary-500 mb-8"></div>
        <p class="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-3xl">
          Een overzicht van alle activiteiten die ik heb bijgewoond.
        </p>
      </div>
      
      <!-- Category Filters -->
      <div 
        class="mb-10 transition-all duration-700 delay-200"
        :class="{ 'opacity-0 translate-y-4': !isVisible, 'opacity-100 translate-y-0': isVisible }"
      >
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="filterByCategory(category)"
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            :class="selectedCategory === category 
              ? 'bg-primary-500 text-white' 
              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'"
          >
            {{ category }}
          </button>
        </div>
      </div>
      
      <!-- Activities Grid -->
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-400"
        :class="{ 'opacity-0 translate-y-4': !isVisible, 'opacity-100 translate-y-0': isVisible }"
      >
        <ActivityCard 
          v-for="activity in filteredActivities" 
          :key="activity.id" 
          :activity="activity" 
        />
      </div>
    </div>
  </div>
</template>