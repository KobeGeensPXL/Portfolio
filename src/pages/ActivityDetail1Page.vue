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
        <h1 class="text-4xl font-bold mb-8 text-neutral-900 dark:text-white">Studiereis</h1>
        
        <p>Studiereis naar Linz waar we een bezoek hebben gebracht aan: Ars Electronica Centre, University of Applied Sciences Upper Austria, Campus Hagenberg en Salzburg. Voor de rest van de tijd waren we vrij om Linz te verkennen.</p>

        <p>Ik begon deze studiereis met er geen zin in te hebben. Dit veranderde wel al snel omdat ik het een mooie plaats vond en de activiteiten ook wel leuk vond.</p>
        <img src="/Square.jpg"/>
        <p>De eerste dag na we aangekomen waren begonnen we met een bezoek aan Ars Electronica Centre. Hier hadden ze veel technologische onderwerpen waarover ze iets hadden staan. De meest interessante vond ik de zelf spelende Piano waarbij ze ook vertelde dat ze met AI Gustav Mahler's tiende symfonie hadden afgemaakt. Iets anders interessant was de laagstee vloer waar we mochten komen. Hier waren er veel AI-toepassingen op verschillende onderwerpen die ook op een simpele manier waren uitgelegd. De 2 meest interessante hiervan vond ik iets waarbij je met een gsm boven een rechthoek moest kantelen en bewegen om zo een marionet voor je te besturen. Hier hebben we lang gestaan om te proberen deze op het bankje te laten gaan zitten. Dit hebben we uiteindelijk moeten opgeven omdat het te lang duurde. Iets anders interessant was een apparaat waarop je een foto van jezelf kon nemen en dan met 16 verschillende knoppen een ai de foto kon laten aanpassen. Enkele opties van deze knoppen waren: leeftijd, snor, baard en bril. Dit was interessant om te zien hoe snel een foto kan aangepast worden door AI.</p>
        <img src="/Marionet.jpg"/>
        <img src="/AIEdit.jpg"/>
        <p>De rest van de dag mochten we vrij rondlopen door Linz. Deze dag had ik en 3 samen gaan eten. Hier begonnen we te praten over wat we konden doen de volgende paar dagen en kwamen we er op uit dat we een escape room te konden doen. Dit hadden we dan gezocht en gezien dat er 1 in de buurt was en dat we voor de dag zelf nog een reservatie konden maken. Hier zijn we dan naar toe gegaan en een escape room gedaan. Het thema van de escape room was gevangenis ontsnappen. Hiermee had ik me zeer veel geamuseerd. Het enige jammer was dat we 10 minuten verloren waren omdat iemand een tip had achtergelaten in een gangetje en niemand dacht om daar opnieuw te gaan zoeken. Maar uiteindelijk waren we wel nog ontsnapt.</p>
        <img src="/Escape.jpg"/>
        <p>Hierna zijn we gegaan naar Game And Dine gegaan wat een bordspel restaurant is. Hier zijn we wel niet lang gebleven omdat het al laat was en we de volgende dag vroeg weg moesten. De volgende dag hadden we een uitstap naar de University of Applied Sciences Upper Austria, Campus Hagenberg. Hier begonnen we met een rondleiding waar we enkele interessante dingen hebben gezien. Het meest interessante was wel hun vis simulator waarmee ze de ervaring iemand die vist simuleren.</p>
        <img src="/Fishing.jpg"/>
        <p>Verder waren hier wel nog interessante dingen te zien zoals een zelfgemaakt bordspel en dit coole robot apparaat waarvan ik niet heb ontdekt wat het was. Maar het stond naast een scherm dat foto's toonde van veel plaatsen waar het geweest was.</p>
        <img src="/Robot.jpg"/>
        <p>Wanneer deze uitstap gedaan was ben ik opnieuw met dezelfde mensen gegaan naar de Game And Dine waar we dan wel genoeg tijd hadden om een bordspel te spelen. We moesten dan wel nog een keuze maken van welk spel we zouden spelen. Deze beslissing werd moeilijker gemaakt doordat de helft van de spellen enkel een Duitse uitleg hadden. Uiteindelijk maakte we wel een beslissing en hebben we Bloodborne: The card game gespeeld.</p>
        <img src="/BoardGame.jpg"/>
        <p>Doordat dit de tweede keer was dat we hier waren begon uitbaatster ons te herkennen. Omdat het ook niet druk was kwam ze ook praten met ons over van waar we kwamen en waarom we daar waren. Wat me daarvan het beste is bijgebleven is dat ze soms zat te lachen met hoe wij de namen van sommige dranken in het Duits probeerde uit te spreken maar dat ze dat daar anders uitspraken. De laatste dag hadden we nog een uitstap naar Salzburg. Hier heb ik zelf niet veel gedaan. Ik ben de berg opgegaan en heb dan op een uitkijkpunt zitten kijken naar de stad en bergen.</p>
        <img src="/Nunnery.jpg"/>
        <img src="/Mountains1.jpg"/>
        <img src="/Mountains2.jpg"/>
        <h2 class="text-2xl font-bold mt-12 mb-6 text-neutral-900 dark:text-white">Reflectie</h2>

        <p>Tijdens de studiereis naar Linz heb ik verschillende interessante activiteiten meegemaakt die me op meerdere vlakken iets hebben bijgebracht. Aan het begin van de reis had ik er eerlijk gezegd niet zoveel zin in, maar dat veranderde snel toen ik merkte hoe mooi de stad was en hoe boeiend de geplande bezoeken waren.</p>

        <p>Een van de hoogtepunten was zonder twijfel het bezoek aan het Ars Electronica Centre. De AI-toepassingen daar, zoals de zelf spelende piano en de interactieve marionetinstallatie, hebben me echt aan het denken gezet over hoe technologie kunst en interactie kan veranderen. Wat me vooral is bijgebleven, is hoe eenvoudig en toegankelijk ze complexe onderwerpen zoals AI daar uitleggen.</p>

        <p>Tijdens de hele reis heb ik geleerd om met een open houding nieuwe ervaringen aan te gaan. Dit merkte ik ook tijdens de sociale momenten, zoals het plannen en uitvoeren van de escape room met mijn medestudenten. Dat soort informele samenwerking heeft me doen inzien hoe belangrijk communicatie en initiatief zijn in groepsverband.</p>

        <p>Mijn sterke punt in deze opdracht was mijn openheid naar nieuwe ervaringen, ondanks mijn aanvankelijke weerstand. Een zwakker punt was dat ik soms te weinig initiatief nam bij het ontdekken van nieuwe dingen, zoals bij het onbekende robotapparaat in Hagenberg. Dit zou ik in de toekomst willen verbeteren door sneller vragen te stellen aan onbekende.</p>

        <p>Er zijn duidelijke linken met mijn opleiding, vooral wat betreft technologie en samenwerking. Deze opdracht heb ik gekozen voor mijn portfolio omdat het laat zien hoe ik groei in mijn professionele houding, sociale vaardigheden én mijn interesse in technologische innovatie.</p>
      </div>
    </div>
  </div>
</template>