<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="text-center max-w-lg">
      <div class="text-9xl font-bold text-primary-500 mb-6">404</div>
      
      <h1 class="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
        Page Not Found
      </h1>
      
      <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <router-link to="/" class="btn btn-primary">
          Go Home
        </router-link>
        
        <button @click="goBack" class="btn btn-secondary">
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>