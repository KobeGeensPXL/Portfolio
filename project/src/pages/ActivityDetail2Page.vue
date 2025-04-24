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
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <h1 class="text-4xl font-bold mb-8 text-neutral-900 dark:text-white">Hackathon</h1>
        
        <p>De hackathon was een opdracht waarbij we op 2 dagen een applicatie zouden moeten maken met als doel iets dat al zou kunnen werken maar ook aan verder zou kunnen gebouwd worden als het nodig zou zijn.</p>

        <p>Voor deze opdracht namen we deel aan een multidisciplinaire hackathon, waarbij studenten uit verschillende studierichtingen samenwerkten. Wij vormden een team van vier studenten, waaronder ook een studente ergotherapie. Deze samenwerking zorgde voor een interessante kruisbestuiving tussen technische kennis en inzichten uit de zorg. Het doel was om een app te ontwerpen die specifiek gericht is op personen met een matige tot ernstige verstandelijke beperking, met als focus het stimuleren van hun cognitieve vaardigheden op een speelse manier.</p>

        <p>We kozen ervoor om een applicatie te maken in Flutter, omdat deze technologie het mogelijk maakt om eenvoudig apps te ontwikkelen voor Android, het platform waarop onze doelgroep het meest actief is. In de app verwerkten we twee verschillende spelletjes, elk met drie moeilijkheidsgraden en drie thema's (zoals savanne, jungle en oceaan), die onder andere het kleurenschema en geluidseffecten aanpasten.</p>

        <h2>Game 1 – Vormen tellen</h2>
        <p>In dit spel moesten gebruikers vormen tellen op drie niveaus:</p>
        <ul>
          <li>Niveau 1: alle vormen tellen.</li>
          <li>Niveau 2: enkel een bepaalde vorm (bv. alleen cirkels).</li>
          <li>Niveau 3: een specifieke vorm in een bepaalde kleur (bv. rode driehoeken).</li>
        </ul>
        <p>Om de instructies begrijpelijk te maken voor de doelgroep werden deze zowel visueel als auditief weergegeven. De juiste vorm aanklikken gaf directe, positieve feedback via geluiden en animatie. Verkeerde keuzes hadden geen negatieve gevolgen – zo bleven gebruikers gemotiveerd zonder frustratie.</p>
        <img src="/Game1.png">
        <h2>Game 2 – Rekenen met dobbelstenen</h2>
        <p>Hier kon de speler op het scherm tikken om twee dobbelstenen te laten rollen. De som werd voorgelezen (bv. "Wat is 4 + 3?") en het scherm gaf visuele antwoordopties. Naarmate het niveau steeg, kwamen er moeilijkere bewerkingen bij zoals aftrekken en vermenigvuldigen. Het spel was bedoeld als een laagdrempelige rekenoefening waarbij taal minimale instructies gebruikt werden.</p>
        <img src="/Game2.png">
        <h2>Toegankelijkheid en ontwerpkeuzes</h2>
        <p>Tijdens de ontwikkeling hielden we rekening met de specifieke noden van onze doelgroep. De interface bevatte grote knoppen, minimale tekst, en duidelijke pictogrammen. Instructies werden ingesproken en ondersteund met beelden. De app bevatte geen reclame, geen afleiding en geen tijdsdruk – allemaal bewuste keuzes om het gebruik zo zelfstandig en stressvrij mogelijk te maken.</p>

        <h2>Gebruik van GitHub Copilot</h2>
        <p>Technisch gezien leerden we enorm veel bij tijdens dit project. We maakten actief gebruik van GitHub Copilot, vooral bij het schrijven van Flutter-code. Copilot hielp ons sneller bouwen door suggesties te geven voor UI-componenten en spel-logica. Toch leerden we ook kritisch blijven, want de gegenereerde code was niet altijd perfect. Het zorgde wel voor een stevige boost in ons leerproces en maakte de technische kant toegankelijker.</p>

        <h2>Samenwerking & sfeer</h2>
        <p>De samenwerking in ons team verliep zeer goed. Iedereen droeg zijn of haar deel bij, en de verdeling tussen technische uitwerking, inhoudelijke invulling en visueel ontwerp was evenwichtig. Op de tweede dag kregen we als verrassing pizza aangeboden tijdens de middagpauze, wat zorgde voor een leuke onderbreking en versterking van de groepssfeer. Die positieve sfeer droeg zeker bij aan het goede verloop van het project.</p>

        <p>Kortom: deze opdracht bood niet alleen een kans om onze technische vaardigheden aan te scherpen, maar ook om écht na te denken over gebruikersgericht ontwerp, samenwerking over disciplines heen, en het creëren van iets wat in de praktijk een verschil kan maken.</p>

        <h2 class="text-2xl font-bold mt-12 mb-6 text-neutral-900 dark:text-white">Reflectie</h2>

        <p>Deze opdracht was voor mij een heel waardevolle ervaring, zowel inhoudelijk als op vlak van samenwerking. Wat deze opdracht extra bijzonder maakte, was dat het een multidisciplinaire hackathon was. We werkten samen met een studente ergotherapie, waardoor we leerden denken vanuit een heel ander perspectief dan we gewoon zijn. Dat zorgde ervoor dat we niet zomaar een spel maakten, maar echt iets wat aangepast was aan een specifieke doelgroep.</p>

        <p>Mijn sterkte in deze opdracht was dat ik goed kon meedenken over hoe we technische en inhoudelijke elementen konden combineren. Ik vond het interessant om onze kennis over programmeren te koppelen aan wat de ergotherapiestudente wist over de doelgroep. Samen konden we een app maken die niet alleen werkt, maar ook écht bruikbaar is.</p>

        <p>Een zwakker punt was dat ik in het begin nog wat zoekende was naar hoe we de moeilijkheidsgraden logisch konden opbouwen. Ik wilde misschien te snel gaan qua complexiteit, terwijl het belangrijk was om alles eenvoudig en duidelijk te houden. Door veel overleg hebben we dat uiteindelijk wel goed kunnen afstemmen.</p>

        <p>Wat ik ook geleerd heb, is hoe waardevol tools zoals GitHub Copilot kunnen zijn. Die hebben ons veel tijd bespaard, maar ook geholpen om te begrijpen hoe Flutter-structuren in elkaar zitten. Tegelijk heeft het me geleerd dat je zo'n AI-hulp niet blindelings moet volgen: controleren blijft belangrijk.</p>

        <p>Deze opdracht past goed in mijn portfolio omdat ze aantoont hoe ik kan werken in een multidisciplinair team, mijn technische vaardigheden heb toegepast én rekening gehouden heb met de eindgebruiker. Ik ben trots op het eindresultaat en vond het fijn om te werken aan iets wat echt impact kan hebben.</p>
      </div>
    </div>
  </div>
</template>