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
        <h1 class="font-bold mb-6 text-neutral-900 dark:text-white">Eindreflectie</h1>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Main Column -->
        <div 
          class="lg:col-span-8 transition-all duration-700 delay-300"
          :class="{ 'opacity-0 translate-y-4': !isVisible, 'opacity-100 translate-y-0': isVisible }"
        >
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Als ik terugkijk op mijn I-Talent traject van de voorbije 2 jaar, zie ik duidelijk hoeveel ik gegroeid ben, niet alleen als student toegepaste informatica, maar ook als persoon. Ik ben gestart met een sterke interesse in technologie en programmeren, maar het traject heeft me laten zien hoe belangrijk het is om verder te kijken dan puur technische kennis. Dankzij de verschillende activiteiten, projecten en samenwerkingen heb ik geleerd om met een bredere blik te kijken naar mijn rol als toekomstig professional.
          </p>

          <p>
            Wat dit traject voor mij vooral waardevol maakte, is dat het me uit mijn comfortzone haalde. Activiteiten zoals de hackathon of de innovatieroute waren uitdagend, maar ook erg leerrijk. Vooral de multidisciplinaire samenwerking tijdens de hackathon heeft een grote indruk nagelaten. Werken met een opdracht van studente ergotherapie dwong me om na te denken over zaken die ik normaal niet in rekening zou brengen: gebruiksgemak, duidelijkheid, toegankelijkheid. Het was niet enkel een oefening in programmeren, maar in samenwerken, luisteren en afstemmen voor een doel publiek dat ik me nog nooit had voorgesteld.
          </p>

          <p>
            Tijdens dat project voelde ik ook dat mijn empathie en passie echt een rol speelden. Ik was niet gewoon code aan het schrijven. Ik was iets aan het maken dat een verschil kon maken voor iemand. Dat gaf me motivatie en betekenis. Ik ontdekte dat ik het fijn vind om bezig te zijn met technologie die in dienst staat van mensen.
          </p>

          <p>
            Mijn keuze voor de innovatie-route Cloud & Security was een andere stap buiten mijn comfortzone. Deze werd niet per se aanbevolen voor mijn richting, maar ik koos er bewust voor omdat cybersecurity me intrigeert. Hier toonde ik mijn ondernemende en innovatieve kant: ik ging op verkenning in een domein dat nieuw voor me was, met een open blik. Vooral het verhaal van Resilix, over een echte ransomware-aanval, bracht veel inzichten. De combinatie van praktijkervaring, crisisbeheer en strategisch denken vond ik enorm inspirerend. Ik ontdekte dat ik hou van situaties waarin ik moet meedenken, analyseren en oplossingen zoeken.
          </p>

          <p>
            Wat ik ook heb bijgeleerd, is het belang van hands-on ervaring. Sessies waar we zelf aan de slag konden met cloud omgevingen of firewallsoftware werkten veel beter voor mij dan puur theoretische uitleg. Ik ben iemand die het best leert door te doen, door fouten te maken en dan te verbeteren. Dat merkte ik ook toen we GitHub Copilot gebruikten in de hackathon. Het was een hulpmiddel dat ons sneller op weg hielp, maar tegelijk leerde ik kritisch blijven en niet zomaar elke suggestie te volgen.
          </p>

          <p>
            Mijn sterktes liggen in mijn doorzettingsvermogen, mijn vermogen om te luisteren en logisch te denken, en mijn interesse in technologie en innovatie. Ik ben nieuwsgierig, analytisch, en probeer steeds te begrijpen waarom iets werkt. Ik stel niet snel iets voor zonder dat ik erover heb nagedacht. Aan de andere kant is een werkpunt voor mij nog steeds om vaker mijn ideeën uit te spreken in grotere groepen. Ik ben eerder een stille denker, maar ik merk dat ik daarin vooruitgang boek, zeker wanneer ik me zekerder voel over mijn kennis.
          </p>

          <p>
            Als ik naar de toekomst kijk, zie ik mezelf verder verdiepen in softwareontwikkeling en misschien ook wat rond cybersecurity. Ik wil blijven leren en mezelf uitdagen. Wat ik meeneem uit dit traject is het vertrouwen dat ik, zelfs buiten mijn comfortzone, kan groeien. Dat ik niet bang hoef te zijn om nieuwe dingen te proberen, samen te werken met mensen die ik niet ken of om initiatief te nemen.
          </p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>