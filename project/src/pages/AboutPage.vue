<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Animation trigger for elements
const isVisible = ref(false);

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
        <h1 class="font-bold mb-6 text-neutral-900 dark:text-white">About Me</h1>
        <div class="w-20 h-1 bg-primary-500 mb-8"></div>
        <p class="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-3xl">
          Een introductie van wie ik ben.
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Left Column - Image -->
        <div 
          class="lg:col-span-1 transition-all duration-700 delay-300"
          :class="{ 'opacity-0 translate-y-4': !isVisible, 'opacity-100 translate-y-0': isVisible }"
        >
          <div class="sticky top-24">
            <div class="aspect-square overflow-hidden rounded-xl mb-6">
              <img 
                src="/ME.jpg" 
                alt="Profile" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <!-- Right Column - Text Content -->
        <div 
          class="lg:col-span-2 transition-all duration-700 delay-500"
          :class="{ 'opacity-0 translate-y-4': !isVisible, 'opacity-100 translate-y-0': isVisible }"
        >
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Ik ben Kobe Geens, student toegepaste informatica met afstudeerrichting applicatieontwikkeling. Mijn interesses zijn gamen, lezen en programmeren. Gamen doe ik altijd al en speel ik het liefste strategische spellen waarbij ik moet nadenken om iets op te lossen of voor elkaar te krijgen.
          </p>

          <p>
            Lezen ben ik veel beginnen doen wanneer ik 12 was. Dit begon met alleen maar manga te lezen. De jaren daarna ben ik ook wel andere dingen beginnen lezen zoals webnovels, visual novels en artikelen over technologie en wetenschap.
          </p>

          <p>
            Bij programmeren is mijn interesse begonnen dankzij het gamen. Wanneer ik in het zesde middelbaar een eindwerk moest maken, probeerde ik samen met iemand een simpel spel te maken. Dit was geen goed idee voor twee mensen die niks van programmeren afwisten. Tijdens het maken kwamen we erachter dat de tutorial die we volgden verouderd was en dat sommige code die erin stond niet werkte. Dit probeerden we dan op te lossen door sommige delen bijna willekeurig te verwijderen en kleine beetjes van ergens anders toe te voegen. Deze ervaring zorgde ervoor dat ik interesse kreeg in hoe code eigenlijk werkt.
          </p>

          <p>
            Uit de POP-sessies heb ik meegenomen dat ik een redelijk stille persoon ben die liever luistert dan spreekt, maar dit betekent niet dat ik niks zou zeggen als ik een idee heb of het ergens niet mee eens ben.
          </p>

          <p>
            Ik hoop in de toekomst mij nog verder te kunnen verdiepen in programmeren en technologie.
          </p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>