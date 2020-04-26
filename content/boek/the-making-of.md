---
title: "Het boek: the making of..."
date: 2020-04-26
weight: 2
draft: true
---

<style>
#body img {
    border: 1px solid grey;
}
</style>

Een boek schrijven doe je niet in één dag, week of maand. In mijn geval fermenteerde het idee al jaren voordat ik durfde om een woord op het figuurlijk papier te plaatsen. Ik wil jullie hier graag meenemen in het proces dat uiteindelijk leidde tot het fysieke boek: van idee tot eindresultaat.  

### 1. Ideeën verzamelen

Al sinds 2011 houd ik dagboeken bij in de vorm van een A5 Moleskine-achtig notitieboek. Daarin staat niet '_liefste dagboek_' (alhoewel, misschien hier en daar wel), maar het ongelijd papier nodigt me eerder uit om schetsen te maken, bakschema's te noteren en vooral: alle relevante ideeën nooit meer verloren te laten gaan. Lezers zullen ontdekken dat het avontuur begint in 2012, terwijl ik begon te schrijven in 2017. Ik heb geen supergeheugen, ik heb gewoon een pen en een notitieboek.

![boekjes](/images/makingof-boekjes.jpg)

Opmerkingen van de leerkracht in de avondschool, experimenten in eigen keuken, ervaringen van anderen online, ... - het kwam allemaal in deze boekjes terecht. Daarna [scan ik de boeken in volgens deze methode](https://brainbaking.com/post/journaling-in-practice/) en indexeer ik elke pagina volgens bepaalde relevante termen. Op die manier kan ik in Evernote snel terugvinden welke formule voor dat ene brood mislukte, en welke niet. 

Buiten de schriften die ik zelf vulde, zijn onderstaande boeken ook van groot belang geweest ter realisatie van het boek. Een samenvatting van deze inspiraties is terug te vinden in '[broodbakboeken: welk exemplaar kopen?](/brood-bak-boeken-welk-exemplaar-kopen-1/)', een artikel origineel geschreven in 2015, die de basis vormde voor de herziene lijst met **aanbevolen literatuur** in het boek op pagina 333. 

![inspiratie](/images/makingof-inspiratie.jpg)

### 2. De flow van het schrijven

Eind 2017 had ik het idee om een bundeling van mijn ervaring te maken, en begon ik enkele ruwe hoofdstukken te schrijven. Dit gebeurde toen in Google Docs, maar frustreerde meer dan dat het een plezier was om mee te werken. Om te beginnen heb ik liever zulke dingen in eigen beheer dan op een HDD van Google. Daarnaast bood Google Docs te weinig mogelijkheden om me af te schermen van afleiding: het bood net té veel toeters en bellen aan. Ik schreef toen een honderdtal pagina's, die later grondig werden herzien, maar wel de basis vormden voor de eerste drie hoofdstukken in het boek. Dat was tijdens een met verlof aangelengde kerstvakantie.

Bijna een jaar gebeurde er niets.

Toen 2018 er bijna op zat, haalde ik het document terug boven. Er was veel niet goed, maar het basisidee sprak me nog steeds aan. Ik liet me niet ontmoedigen en begon opnieuw, deze keer in mijn favoriete teksteditor: [Sublime Text 3](https://www.sublimetext.com/3). 

![](/images/makingof-schrijven.png)

In Sublime schrijf ik in Markdown-syntax, in plaats van me ook nog eens bezig te houden met tekstgroottes en -diktes. Tekst tussen underscores wordt bijvoorbeeld automatisch vertaald naar cursief door een toolchain die ik in elkaar knutselde, waarbij [Pandoc](https://pandoc.org/) de belangrijkste tool in de schakel is: deze converteert de `.md` Markdown bestanden naar `.tex` LaTeX, die op hun beurt worden omgezet naar een `.pdf` bestand.

De technische details achterwege latende, het belangrijkste voordeel van Sublime en Markdown is minimalisme (en totale controle), zoals je ziet in bovenstaande screenshot. Ik moet er niet aan denken om ooit terug een stuk tekst van enige omvang te schrijven in Word of Google Docs. 

Dankzij mijn werk als onderzoeker aan de KU Leuven heb ik toegang tot academische publicaties die gretig werden doorploegd op zoek naar interessant en relevant materiaal om te integreren in het boek. Via [Google Scholar](scholar.google.com) ontdekte ik [Handbook on Sourdough Biotechnology](https://www.springer.com/gp/book/9781461454243), geschreven door dezelfde professor Gobbetti uit **pagina 174**. Referenties van referenties en honderden uren lezen later werd langzaam maar zeker mijn eigen lijst van referenties opgebouwd.

### 3. Omslag en layout

LaTeX brengt dan wel totale controle met zich mee, dat betekent ook dat je je instellingen volledig zelf moet beheren, en dat door middel van code. Voor een softwareontwikkelaar  is dat alleen maar een voordeel. Ik gebruik de [memoir typeset](https://www.ctan.org/pkg/memoir), die vergezeld komt met een 575 pagina's tellende handleiding, die met de nodige zorg werd doorwurmd. Het resultaat is kennis van codes die nodig zijn om de layout tot op de milimeter juist te hebben, zoals `\settrimmedsize{215mm}{135mm}{*}` en `\settypeblocksize{180mm}{100mm}{*}`.

![](/images/makingof-layout.jpg)

Ik deed onderzoek naar layout en omslag van andere gelijkaardige non-fictie boeken en probeerde het juiste lettertype (Palatino) en de juiste lettergrootte (11pt) te bepalen. Ik maakte een lijstje van de uitgevers die gelijkaardige boeken uitgaven, zowel in Nederland als in België. Veel grote uitgeverijen weigeren nieuwe manuscripten wegens een overaanbod: zij 'recruiten' nieuwe auteurs op basis van faam. 

Ik schreef 6 uitgeverijen aan: Kosmos, Atlas Contact, Lannoo, Standaard Uitgeverij, Karakter Uitgevers en Borgerhoff Lamberigts. Na drie maanden liet Standaard Uitgeverij weten dat het boek niet in hun portefuille past. Na meer dan tien maanden wachten (!!) liet Atlas Contact weten dat er misschien interesse was. Het manuscript werd nagelezen door een tweede redacteur. Daarna volgde complete radiostilte. 

Het grootste deel van 2019 werd verprutst door hoopvol wachten op een bericht van een uitgeverij, tot mijn grote ergernis. Een minimale vorm van beleefdheid is toch wel simpelweg antwoorden - ook al is het na enige maanden - dat de interesse niet wederzijds is? Van slechts `33%` van de uitgeverijen enig bericht terug ontvangen vind ik beneden alle peil. 

Toen zei ik _foert!_ en plande ik om het boek in eigen beheer uit te geven. Dat betekent letterlijk alles zelf doen: redactie, omslagontwerp, verkoop, ... Het zijn allemaal mooie leermomenten. 

### 4. Verkopen: het platform

Er zijn talloze manieren om boeken zelf te publiceren: van de typische fotoboek op blurb.com en lulu.com tot Nederlandse initiatieven. Eentje daarvan, Brave New Books, trok me aan vanwege de strakke website en vanwege het feit dat Singel Uitgeverij (een grote uitgeverij in Nederland) de drijvende kracht is erachter. Singel stond ook op mijn lijstje, maar neemt jammer genoeg geen manuscripten meer aan. Een teleurstelling uitgespaard. 

Het Brave New Books publicatieplatform is eenvoudig en doeltreffend: ISBN-nummer kopen (`12.5€`), PDF uploaden, omslag uploaden, korte tekst en andere metadata invoeren, klaar. De vragen die ik had werden door het supportteam snel beantwoord. Twee dagen wachten, en het boek werd via CB gedistribueerd naar onder andere bol.com. 

![](/images/makingof-platform.png)

Jammer genoeg is het verdienmodel van online verkoop niet veel beter dan de gemiddelde uitgeverij. Royalties van `10%` voor nieuwe auteurs zijn een goed streefdoel volgens mijn opzoekwerk, en van de `28.5€` houd ik exact `3.02€` over, dat is `10.5%`. Om meer dan twee jaar te werken aan een boek waar ervaring van tien jaar inzit, is dat op zijn zachts gezegd belachelijk weinig. 

Auteurs verdienen op twee manieren: royalties (een percentage van de verkoop, zoals online) en marge. De marge ligt veel hoger voor een zelfuitgegeven boek: ik kan bijvoorbeeld vijftig kopies bestellen aan inkoopprijs en ze zelf verkopen, wat me een marge van `58%` oplevert - exclusief verzendkosten. Alleen gooit anno 2020 het Coronavirus redelijk wat roet in het eten. Online verkopen is nu veel aantrekkelijker. 

### 5. Verbeteringen aanbrengen

Het voordeel van een print-on-demand systeem zoals ik via Brave New Books handhaaf is dat een nieuwe versie van het `.pdf` bestand uploaden een kwestie van enkele drukken op een knop is. Het nadeel van iets in eigen beheer uitgeven is het gebrek aan een redacteur die de Nederlandse taal als zijn broekzak kent. Jammer genoeg stelde ik dankzij enkele lezers vast dat de eerste editie redelijk veel typ- en spelfouten bevat. Een grondig onderhoud van het boek was noodzakelijk.

![](/images/makingof-verbeterwerk.jpg)

Dankzij het kritisch werk van een lezer en mijn vrouw haar markeerstift - die zo grondig tewerk ging dat de pagina's uit het boek vielen - kan ik tijdig een tweede versie publiceren. Uiteraard zou deze stap niet na puntje 4 moeten komen, maar er net vóór. Tegen zowat alle adviezen van [de Taaltelefoon](https://www.taaltelefoon.be/hij-hij-of-zij) werd gezondigd, tot mijn grote schaamte. Hopelijk maakt de tweede versie veel goed. Voor vroege kopers is het natuurlijk al te laat. Die krijgen een e-book van de laatste versie. Als dat onvoldoende blijkt te zijn, is er nog altijd de 'gratis retourneren' optie bij Bol en andere winkels. 

Nu volgt de grootste uitdaging: reclame maken. 
