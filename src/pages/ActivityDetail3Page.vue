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
        <h1 class="text-4xl font-bold mb-8 text-neutral-900 dark:text-white">Innovatieroute</h1>
        
        <p>Het doel van de innovatie route was om ons 3 dagen te verdiepen in een zelfgekozen onderwerp.</p>

        <h2>Dag 1 – Cyber Incident Management met Resilix</h2>
        <p>De eerste dag van mijn innovatieroute Cloud & Security was meteen de interessantste voor mij. Ondanks dat deze route niet specifiek aangeraden werd voor mijn opleiding, koos ik ze bewust omdat cybersecurity me enorm boeit. Deze dag stond volledig in het teken van cyberincidenten en hoe je die aanpakt. We kregen een sessie van een spreker van Resilix, die niet alleen theoretische kennis meegaf, maar vooral sprak vanuit zijn ervaring tijdens de ransomware-aanval op Digipolis Antwerpen in december.</p>

        <p>Hij nam ons stap voor stap mee door het hele proces van detectie tot herstel, waarbij hij het SANS Incident Response Cycle gebruikte. Wat het extra boeiend maakte, was dat hij op een eerlijke en zelfs humoristische manier vertelde over de fouten die gemaakt waren, welke partners wél of niét nuttig waren, en hoe belangrijk communicatie is in crisissituaties. We leerden over het verschil tussen een Incident Management Team en een Incident Response Team, en de rol van de CISO daarin.</p>

        <p>Wat me het meest is bijgebleven, is het concept van het battle rhythm: een gestructureerde dagindeling tijdens een crisis, met blokken voor stand-ups, samenwerking, hot syncs en de handover. We mochten zelf aan de slag met een oefening waarbij we een scenario kregen en moesten bepalen hoe we zouden reageren – zeer leerzaam en leuk. Deze dag gaf me een realistisch beeld van hoe chaotisch maar ook gestructureerd een echte cyberaanval kan zijn.</p>

        <h2>Dag 2 – Threat Hunting & Cloud Security met Cloudar</h2>
        <p>Op dag twee doken we dieper in de wereld van cloudbeveiliging, met een focus op AWS. De sessies werden geleid door Cloudar, een bedrijf gespecialiseerd in cloudoplossingen. We leerden hier vooral hoe je incidenten detecteert en voorkomt in een cloudomgeving, iets dat steeds relevanter wordt met de opmars van remote werken en schaalbare infrastructuur.</p>

        <p>Een belangrijk concept dat aan bod kwam was Cloud Security Posture Management (CSPM) en hoe tools zoals PrismaCloud van Palo Alto worden gebruikt om beveiligingsstandaarden te controleren. We bekeken ook hoe je cloud omgevingen kan beveiligen tegen veelvoorkomende risico's zoals misconfiguraties, datalekken, ongeautoriseerde toegang en onveilige API's.</p>

        <p>Wat ik enorm waardeerde was dat we toegang kregen tot een echte AWS-omgeving waarin we hands-on oefeningen mochten maken. We onderzochten beveiligingsproblemen zoals slecht geconfigureerde S3-buckets, onversleutelde data en slecht beheer van toegangsrechten. Ik vond het ook interessant dat er veel aandacht ging naar concrete tools zoals Prowler, GuardDuty en zelfs open source oplossingen zoals TruffleSecurity die gelekte geheimen kunnen opsporen.</p>

        <h2>Dag 3 – Next-Gen Firewalls met Fortinet</h2>
        <p>Op de laatste dag kregen we een introductie tot de werking van firewalls en netwerkbeveiliging, gegeven door Fortinet in samenwerking met Exclusive Networks. In tegenstelling tot klassieke firewalls bieden hun Next-Gen Firewalls uitgebreide functionaliteit zoals intrusion prevention, SSL-inspectie, webfiltering en DNS-beveiliging.</p>

        <p>Wat ik vooral leerde, was hoe breed het scala aan beveiligingsopties is en hoe deze allemaal op elkaar inspelen. Het idee dat een firewall bijvoorbeeld gebruikmaakt van man-in-the-middle technieken om verkeer te inspecteren was nieuw voor me, en best indrukwekkend. Ook het feit dat Fortinet gebruikmaakt van hun eigen threat intelligence via FortiGuard Labs gaf inzicht in hoe moderne systemen zich voortdurend updaten tegen nieuwe dreigingen.</p>

        <p>Tijdens deze dag mochten we ook zelf aan de slag met een simulatieomgeving waarin we de software van Fortinet konden testen. Dit maakte het theoretische stuk meteen veel tastbaarder. We leerden via de CLI (Command Line Interface) bepaalde instellingen wijzigen en zagen direct wat de impact was van bijvoorbeeld SSL-decryptie of het inschakelen van filters op HTTP-verkeer.</p>

        <h2 class="text-2xl font-bold mt-12 mb-6 text-neutral-900 dark:text-white">Reflectie</h2>

        <p>De innovatieroute Cloud & Security was voor mij een van de meest boeiende activiteiten van het semester. Hoewel deze route niet standaard werd aangeraden voor mijn opleiding, heb ik er bewust voor gekozen omdat ik al langer een interesse heb in cybersecurity. Achteraf gezien ben ik heel blij dat ik deze keuze heb gemaakt, want ik heb er enorm veel uit gehaald, zowel qua kennis als motivatie.</p>

        <p>De eerste dag was meteen mijn favoriet. De spreker van Resilix gaf ons geen droge theorie, maar deelde zijn ervaringen uit de praktijk, waaronder de grote ransomware-aanval op Digipolis Antwerpen. Zijn aanpak was eerlijk, grappig en tegelijk erg leerzaam. Door de scenario-oefening leerden we nadenken in crisissituaties, en dat gaf me voor het eerst het gevoel: hier wil ik meer mee doen. Het was ook de eerste keer dat ik echt begreep hoe complex communicatie en organisatie zijn tijdens een cyberaanval.</p>

        <p>Op dag twee leerden we meer over de cloud kant van beveiliging. De hands-on oefeningen in de AWS-omgeving waren voor mij het meest leerrijk. Het was niet alleen theorie, maar ook echt doen: fouten zoeken, misconfiguraties ontdekken, en nadenken over hoe je die voorkomt. Vooral het overzicht van tools en standaarden was interessant en iets wat ik zeker later nog kan gebruiken.</p>

        <p>Dag drie ging dan weer over firewalls en netwerkbeveiliging, een onderwerp dat ik vooraf wat minder goed kende. Door zelf te oefenen met Fortinet-software begreep ik plots veel beter hoe uitgebreid en krachtig moderne firewalls kunnen zijn.</p>

        <p>Mijn sterkte in deze activiteit was dat ik actief meedacht en veel vragen stelde. Wat ik wil verbeteren is om in de toekomst nog sneller te durven verdiepen in tools die ik niet ken.</p>
      </div>
    </div>
  </div>
</template>