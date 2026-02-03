import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectenIntro from "@/assets/projecten-intro.jpg";
import mysterylandProject from "@/assets/mysteryland-project.jpg";

// Photo imports for timeline - from Recaps folder
import volbeat2022 from "@/assets/1_volbeat_2022.jpg";
import mumfordSons from "@/assets/132789_mumford-a-sons-ziggo-dome-2016_foto-ben-houdijk.jpg";
import mysterylandRecap from "@/assets/mysteryland.jpg";
import lowlandsRecap from "@/assets/lowlands.webp";
import tomorrowXTogether from "@/assets/tomorrow-x-together-world-tour-act-promise-in-jakarta_1.webp";
import ironmanRecap from "@/assets/ironman.jpg";
import tcsRecap from "@/assets/tcs.webp";
import amf2025 from "@/assets/amf2025.webp";
import intentsRecap from "@/assets/intents.jpg";
import decibelRecap from "@/assets/decibel.jpg";
import verkniptRecap from "@/assets/verknipt.jpg";
import ziggoBg from "@/assets/ziggo-bg.jpg";
import amsterdamRecap from "@/assets/amsterdam.jpg";
import arenaBg from "@/assets/arena-bg.jpg";
import chrisBrown from "@/assets/chrisbrown.jpg";
import dgtlRecap from "@/assets/dgtl.jpg";
import dreamfieldsRecap from "@/assets/dreamfields.jpg";
import edRecap from "@/assets/ed.webp";
import electricRecap from "@/assets/electric.jpg";
import festifoort from "@/assets/festifoort-www-fotograafniels-nl.jpg";
import hansZimmer from "@/assets/hanszimmer.jpg";
import imagineRecap from "@/assets/imagine.jpg";
import johnLegend from "@/assets/john-legend.jpg";
import kendrickRecap from "@/assets/kendrick.avif";
import lordeRecap from "@/assets/lorde.jpg";
import postMalone from "@/assets/postmalone.webp";
import rauwAlejandro from "@/assets/rauw-alejandro.jpg";
import cdsssImg from "@/assets/cdsss.jpg";
import drakeConcert from "@/assets/Drake-pre-Super-Bowl-concert-publicity-H-2023 kopie.webp";
import rammstein2022 from "@/assets/rammstein-2022.jpg";
import adele2024 from "@/assets/2024-09-27-adele-1.jpeg";
import screenshot2023 from "@/assets/Schermafbeelding2025-08-26om125625png.jpeg";

// Logo imports
import logoRammstein from "@/assets/logo-rammstein.png";
import logoCiscoLive from "@/assets/logo-cisco-live.png";
import logoTcsMarathon from "@/assets/logo-tcs-marathon.png";
import logoIronman from "@/assets/logo-ironman.png";
import logoAmsterdamseZomer from "@/assets/logo-amsterdamse-zomer.png";
import logoMysteryland from "@/assets/logo-mysteryland.png";
import logoElrow from "@/assets/logo-elrow.png";
import logoTaylorSwift from "@/assets/logo-taylor-swift.png";
import logoGraspop from "@/assets/logo-graspop.png";
import logoF1DutchGp from "@/assets/logo-f1-dutch-gp.png";
import logoTomorrowland from "@/assets/logo-tomorrowland.png";
import logoVerknipt from "@/assets/logo-verknipt.png";

const logos = [
  { name: "Rammstein", image: logoRammstein },
  { name: "Taylor Swift - The Eras Tour", image: logoTaylorSwift },
  { name: "Cisco Live!", image: logoCiscoLive },
  { name: "Ironman", image: logoIronman },
  { name: "TCS Amsterdam Marathon", image: logoTcsMarathon },
  { name: "Mysteryland", image: logoMysteryland },
  { name: "Graspop Metal Meeting", image: logoGraspop },
  { name: "F1 Heineken Dutch Grand Prix", image: logoF1DutchGp },
  { name: "Elrow", image: logoElrow },
  { name: "De Amsterdamse Zomer", image: logoAmsterdamseZomer },
  { name: "Tomorrowland", image: logoTomorrowland },
  { name: "Verknipt", image: logoVerknipt },
];

// Photos for timeline - from Recaps folder
const timelinePhotos = [
  volbeat2022,
  mumfordSons,
  mysterylandRecap,
  lowlandsRecap,
  tomorrowXTogether,
  ironmanRecap,
  tcsRecap,
  amf2025,
  intentsRecap,
  decibelRecap,
  verkniptRecap,
  ziggoBg,
  amsterdamRecap,
  arenaBg,
  chrisBrown,
  dgtlRecap,
  dreamfieldsRecap,
  edRecap,
  electricRecap,
  festifoort,
  hansZimmer,
  imagineRecap,
  johnLegend,
  kendrickRecap,
  lordeRecap,
  postMalone,
  rauwAlejandro,
];

const Projecten = () => {
  const projectsByYear = {
    2023: [
      "WK Shorttrack Dordrecht",
      "Rabobank Event Utrecht",
      "Cisco Live",
      "Dutch Pork & Poultry Expo",
      "IAW Keulen",
      "Silicon Expo",
      "Amsterdam Drone Expo",
      "Roger Waters ''This Is Not A Drill tour''",
      "De Nationale Carrièrebeurs",
      "Rotterdam Marathon",
      "Vloerinstallatie Johan Cruijff ArenA",
      "LOVAH Congres",
      "Huismerk Expo",
      "Koningsdag Amsterdam",
      "Kingsland",
      "Bevrijdingsfestival Amsterdam",
      "The Beach House",
      "INTENTS Festival",
      "Huldiging Feyenoord",
      "Huldiging PEC Zwolle",
      "Post Malone ''Twelve Carat Tour''",
      "RopaRun",
      "SZA ''S.O.S. Tour''",
      "Geluidsinstallatie De Doelen",
      "Podiuminstallatie Yuverta",
      "Best Kept Secret",
      "Trussinstallatie Hilton Schiphol",
      "Down The Rabbit Hole",
      "Lowlands",
      "Live on The Beach",
      "Ernst & Bobby Show",
      "Big Twin Bike Show",
      "TCS Marathon Amsterdam",
      "Verknipt",
      "Harry Styles ''Love On Tour''",
      "Rammstein ''Europe Stadium Tour''",
      "Wantijpop Festival",
      "KPN Festival",
      "KISS ''End of the Road World Tour''",
      "Coldplay ''Music Of The Spheres World Tour''",
      "Jera on Air Festival",
      "The Ocean Race Den Haag",
      "World Gymnaestrada Amsterdam",
      "Beyonce ''Renaissance World Tour''",
      "De Amsterdamse Zomer",
      "Dutch Gymnastics The Finals",
      "IRONMAN",
      "Veteranendag Den Haag",
      "The Weeknd ''After Hours til Dawn Tour''",
      "Maroon 5 ''UK + Europe 2023 Tour''",
      "Concert at SEA",
      "Rolling Loud Festival",
      "Dutch Grand Prix Zandvoort",
      "Embassy Festival",
      "Helene Fischer ''Rausch Live Tour''",
      "Prinsjesdag Den Haag",
      "Credit Expo Nederland",
      "Oktoberfest Harderwijk",
      "Zutphen Glass Expo",
      "Vivarium Beurs",
    ],
    2024: [
      "Monster Jam",
      "Nicki Minaj ''Pink Friday 2 World Tour''",
      "Pulp \"This Is What We Do For An Encore Tour\"",
      "Autotron Rosmalen",
      "Best Kept Secret",
      "Eindfeest Minerva Leiden",
      "Examens Minkema College",
      "AC/DC ''POWER UP Tour''",
      "GreenTech Beurs",
      "Halve Marathon Zwolle",
      "Mystic Garden",
      "Boothstock Rotterdam",
      "IVE ''SHOW WHAT I HAVE DONE Tour''",
      "KPN Festival",
      "Vloerinstallatie Tienen",
      "Karol G Z ''Mañana Será Bonito Tour''",
      "HTLH Europe Expo",
      "Rammstein ''Europe Stadium Tour 2024''",
      "Plastics Recycling Show",
      "IRONMAN",
      "Boeruh Rock Festival",
      "Dutch Grand Prixe Zandvoort",
      "Avenged Sevenfold \"A7X x Good Charlotte 2026 North American Tour\"",
      "MagicCon Expo",
      "Graspop Festival",
      "Bruce Springsteen ''The E Street Band 2024 World Tour''",
      "Concert at SEA",
      "Travis Scott ''Maximus World Tour''",
      "De Amsterdamse Zomer",
      "Taylor Swift ''The Eras Tour''",
      "Down The Rabbit Hole",
      "PINK! ''Summer Carnival 2024 Tour''",
      "Tomorrowland",
      "Walibi Fright Nights",
      "Verknipt",
      "André Rieu in Maastricht",
      "Justin Timberlake ''The Forget Tomorrow Tour''",
      "Reggae Lake Festival",
      "Mysteryland",
      "IAW Keulen",
      "Adele in Munich",
      "6PM Festival",
      "Tino Martin ''Viva Las Vegas show''",
      "Prinsjesdag Den Haag",
      "Space Expo",
      "VIvarium Rosmalen",
      "Bløf en Vrienden in Ahoy",
      "Kygo ''World Tour''",
      "HelloFresh Event",
      "Paramount Event",
      "Holiday on Ice Breepark",
      "Holiday on Ice Brabanthallen",
      "Amsterdam Music Festival",
      "TCS Marathon Amsterdam",
      "Lauryn Hill ''The Miseducation Anniversary Tour\"",
      "NCT DREAM ''World Tour''",
      "Conan Gray ''Found Heaven On Tour''",
      "Credit Expo",
      "Sinterklaastintocht Scheveningen",
      "Sinterklaasintocht Woerden",
      "Cirque du Soleil",
      "Jonas Brothers ''The World Tour''",
      "Janet Jackson ''Together Again Tour''",
      "Diljit Dosanjh ''Dil-Luminati Tour''",
    ],
    2025: [
      "Robbie Williams ''The Live Tour''",
      "Festifoort Festival",
      "Electric & Hybrid Marine World Expo",
      "KPMG TAX PMA Summit Amsterdam",
      "Connect Week",
      "NAVO Top Amsterdam",
      "Formule 1 Exhibition",
      "André Rieu in Maastricht",
      "Luminosity Beach Festival",
      "Vunzige Deuntjes",
      "Dreamfields",
      "Wijnfestijn Zwolle",
      "Down The Rabbit Hole",
      "SONA Presents &ME and Adam Port",
      "Imagine Dragons ''LOOM World Tour''",
      "Chris Brown ''Breezy Bowl XX Tour''",
      "Stray Kids ''Dominate World Tour''",
      "Boothstock Festival",
      "Kendrick Lamar & SZA ''Grand National Tour''",
      "Wijnfestijn Amersfoort",
      "Bospop Festival",
      "Crazy Wonderland Festival",
      "Feyenoord Festival",
      "Matrixx at the Park",
      "Vloerinstallatie Johan Cruijff ArenA",
      "Milkshake Festival",
      "Verknipt",
      "Het Amsterdamse Terrassen Festival",
      "Drake ''The Anita Max Win Tour''",
      "Ed Sheeran ''+ - = ÷ x European Tour''",
      "Blijdorp Festival",
      "Lowlands Festival",
      "Reggae Lake Festival",
      "Mysteryland",
      "Decibel Outdoor",
      "The Valleys Festival",
      "Zandvoort Racefestival",
      "SAIL Amsterdam",
      "Intreeweek Amsterdam",
      "IAW Keulen",
      "ORANJE ROCK",
      "Lief Festival",
      "Potato Europe Expo",
      "Zino Classixs Outdoor",
      "HISWA te Water",
      "WVO Delft",
      "Post Malone ''The BIG ASS Stadium Tour''",
      "Tattoo Convention",
      "TexHanDa Beurs",
      "EK Honkbal",
      "Airborn Ede",
      "Premier Padel Rotterdam",
      "Supremacy",
      "Tilburg Ten Miles",
      "DIBEVO vakbeurs",
      "Staatsloterij Utrecht",
      "Premier Padel afbouw",
      "Bugaboo Event",
      "The Tribute to Hans Zimmer",
      "AESPA ''The LIVE Tour''",
      "Rotterdam Tattoo Convention",
      "Wervingsdagen Eindhoven",
      "IAW Keulen",
      "Stevensloop Nijmegen",
      "Monster Energy Event",
      "Renovatieproject Amsterdam",
      "FUTURE XPO",
      "Oscar and the Wolf ''Taste Tour''",
      "Sabrina Carpenter ''SHORT N SWEET Tour''",
      "DEX-XL",
      "De Toekomstparade Madurodam",
      "Voorraadbeheer NDSM",
      "De Nationale Carrièrebeurs",
      "REB1RTH Festival",
      "Masters of Hardcore",
      "Tomorrow X Together ''World Tour''",
      "Huisartsdagen",
      "The Amsterdam Coffee Festival",
      "Wasteland Cabinet of Curiosities",
      "TT Assen",
      "Central Cee ''CAN'T RUSH GREATNESS Tour''",
      "Prosus Event Amsterdam",
      "DGTL Festival",
      "Koningsdag Haarlem",
      "Koningsdag Amsterdam",
      "Kralingse Bos Festival",
      "Oranje Bitter",
      "Usher ''PAST PRESENT FUTURE Tour''",
      "Twenty One Pilots ''The Clancy World Tour''",
      "Avatar in Concert",
      "Bevrijdingsfestival Den Haag",
      "Bevrijdingsfestival Amsterdam",
      "Bevrijdingsfestival Leiden",
      "Bevrijdingsfestival Rotterdam",
      "Billie Eilish ''HIT ME HARD AND SOFT Tour''",
      "GHOST ''Skeletour''",
      "Speciaalbier Festival",
      "Postillion Convention Centre",
      "Tyler the Creator ''CHROMAKOPIA Tour''",
      "Festivate",
      "Urban Sports Week Amsterdam",
      "Sugar City",
      "EO Jongerendag",
      "Turquoise Festival",
      "Examens Minkema College",
      "Nelly ''Where the Party At Tour''",
      "Toffler Festival",
      "Toppers in Concert",
      "John Legend ''Get Lifted Tour''",
      "INTENTS Festival",
      "Landgoed De Wielewaal",
      "Buurtkas Zuidoost",
      "Extrema Outdoor",
      "Den Haag Outdoor",
      "Tentenbouw Amsterdam",
      "Amsterdam Open Air",
      "Mystic Garden Amsterdam",
      "The Crave Festival",
      "Roparun",
      "The Crave Festival",
      "Dag van de Haagse voetbalhistorie",
      "IGLUU Den Haag",
      "BlowUp Art",
      "Halve Marathon Zwolle",
      "DI-RECT in De Kuip",
      "Sparkling at the Beach",
      "HLTH Europe",
      "Fundis",
      "Rauw Alejandro ''Cosa Nuestra Tour''",
      "ADO ''Hibana Tour''",
      "IRONMAN",
      "Flemming in Ahoy",
      "Geluidsinstallatie Theater Amsterdam",
      "MPG Event Okura",
      "TCS Marathon Amsterdam",
      "Volbeat ''Greatest Of All Tours Worldwide''",
      "International Dance League",
      "The Connection",
      "Amsterdam Music Festival",
      "Klangkuenstler ''OUTWORLD''",
      "SONA Presents GOLFOS ADE",
      "One Vision of Queen",
      "CSO Stemmentellen",
      "Amsterdam 750 Closing",
      "Big Twin Bike Show",
      "Vivarium Beurs",
      "Benson Boone ''American Heart Tour''",
      "Mega platen & CD beurs",
      "Electric Callboy ''WORLD TOUR''",
      "Nacht van de Theologie",
      "International Charter Expo",
      "Sint Utrecht",
      "Mumford & Sons ''RUSHMERE''",
      "KvK Ondernemersdagen",
      "Hans Zimmer ''The Next Level Tour''",
      "IJsbaan Dordrecht",
      "Stainless Steel World Conference & Exhibition",
      "Lorde ''Ultra Sound Tour''",
      "Albert Heijn Dag",
      "Podiuminstallatie Theater Tuschinski",
      "Man, man, man, de podcast",
      "Bol.com The Award Show",
      "Agnum Artis",
      "Muziekfeest van het Jaar",
      "Guus Meeuwis ''Internationale Zalen Tour''",
      "Basic Fit Sportevenement",
      "Thunderdome",
      "Joe & Dru Hill ''Live in Concert''",
      "Podiuminstallatie Sporthal Oosterbliek",
      "Autosalon Brussel",
      "Nieuwjaarsshow Zeist",
      "Cirque du Soleil",
      "Inzamelingsactie Stichtse Vecht",
      "ME Training Biddinghuizen",
      "ATEEZ ''Ziggo Dome''",
      "Cisco Live",
      "Snow Patrol ''Ziggo Dome''",
      "EXPO Assen",
      "Gracie Abrams ''Ziggo Dome''",
      "Motorbeurs",
    ],
    2026: [
      "Cirque de Soleil",
      "Autosalon Brussel",
      "Inzamelingsactie Stichtse Vecht",
      "Gearbox Grand Prixe",
      "Banksy Logistic Support",
      "Bankzitters \"World Tour\"",
      "RAYE \"EUROPE TOUR\"",
    ],
  };

  const years = Object.keys(projectsByYear).map(Number).sort((a, b) => b - a);
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(() => {
    if (typeof window !== 'undefined') {
      // Alleen zeer grote schermen (>= 1536px) krijgen grote foto's, laptops krijgen kleinere foto's
      return window.innerWidth >= 1536;
    }
    return false; // Standaard kleinere foto's (voor laptops)
  });

  const [visiblePhotos, setVisiblePhotos] = useState<Set<string>>(new Set());

  useEffect(() => {
    const checkScreenSize = () => {
      // Laptops krijgen standaard kleinere foto's, alleen zeer grote schermen (2xl) krijgen grote foto's
      setIsLargeScreen(window.innerWidth >= 1536);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Intersection Observer voor foto animaties
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const photoId = entry.target.getAttribute('data-photo-id');
            if (photoId) {
              setVisiblePhotos((prev) => new Set(prev).add(photoId));
            }
          }
        });
      },
      {
        threshold: 0.2, // Trigger wanneer 20% van het element zichtbaar is
        rootMargin: '0px 0px -100px 0px', // Start animatie iets eerder
      }
    );

    // Wacht even zodat DOM elementen zijn gerenderd
    const timeoutId = setTimeout(() => {
      const photoElements = document.querySelectorAll('[data-photo-id]');
      photoElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      const photoElements = document.querySelectorAll('[data-photo-id]');
      photoElements.forEach((el) => observer.unobserve(el));
    };
  }, [years]);

  useEffect(() => {
    const handleScroll = () => {
      // Bepaal de positie van de sticky button (top-32 = 8rem = 128px vanaf top van viewport)
      const buttonStickyTop = 128; // top-32 in pixels
      const buttonPosition = window.scrollY + buttonStickyTop;

      let activeIndex = 0;

      // Loop door alle jaren om te bepalen welk jaar actief moet zijn
      for (let i = 0; i < years.length; i++) {
        const year = years[i];
        const cardElement = document.getElementById(`year-card-${year}`);
        
        if (cardElement) {
          const cardRect = cardElement.getBoundingClientRect();
          const cardTop = cardRect.top + window.scrollY;
          const cardBottom = cardTop + cardRect.height;

          // Check of huidige box nog actief is
          // Button eindigt wanneer buttonPosition de onderkant van de box bereikt
          if (buttonPosition < cardBottom) {
            activeIndex = i;
            break;
          }

          // Als we voorbij de onderkant zijn, check of volgende box al begonnen is
          if (i < years.length - 1) {
            const nextYear = years[i + 1];
            const nextCardElement = document.getElementById(`year-card-${nextYear}`);
            if (nextCardElement) {
              const nextCardRect = nextCardElement.getBoundingClientRect();
              const nextCardTop = nextCardRect.top + window.scrollY;
              // Volgende button begint wanneer buttonPosition de bovenkant bereikt
              // Maar alleen als we echt voorbij de onderkant van huidige box zijn
              // Gebruik een kleine marge zodat het pas begint wanneer het echt inline is (binnen 5px)
              if (buttonPosition >= cardBottom && buttonPosition >= nextCardTop - 5) {
                activeIndex = i + 1;
                continue; // Ga verder om te zien of er nog een volgende box is die begonnen is
              }
            }
          }
          
          // Als we hier zijn en voorbij de onderkant, maar volgende box nog niet begonnen
          // Blijf bij huidige box totdat volgende box begint
          if (buttonPosition >= cardBottom) {
            activeIndex = i;
          }
        }
      }

      setCurrentYearIndex(activeIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [years]);

  return (
    <div className="min-h-screen">
      <style>{`
          /* Projecten logo carrousel - default (desktop/tablet) */
          section#stats .projecten-carousel-mobile {
            display: none;
          }
          
          section#stats .projecten-carousel-desktop {
            display: block;
          }
          
        @media (max-width: 639px) {
          /* Onze Impact Section - Mobile responsive - consistent met rest van website */
          section#stats {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          
          /* Zorg dat section zelf niet uitloopt */
          section#stats {
            width: 100% !important;
            max-width: 100vw !important;
            overflow-x: hidden !important;
            box-sizing: border-box !important;
          }
          
          section#stats .container-custom {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            overflow-x: hidden !important;
          }
          
          section#stats .grid.lg\\:grid-cols-2 {
            gap: 2rem !important;
            margin-bottom: 2rem !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            overflow-x: hidden !important;
            display: flex !important;
            flex-direction: column !important;
          }
          
          /* Plaats foto bovenaan op mobiel - boven de tekst */
          section#stats .flex.justify-center.lg\\:justify-start {
            order: -1 !important;
            margin-top: 0 !important;
            margin-bottom: 2rem !important;
          }
          
          /* Plaats tekst onder de foto op mobiel */
          section#stats .max-w-xl {
            order: 1 !important;
          }
          
          /* Beperk de breedte van de tekstkolom op mobiel (consistent met andere secties) */
          /* Andere secties gebruiken max-w-3xl mx-auto, wat op mobiel smaller is */
          section#stats .max-w-xl {
            max-width: calc(100% - 2rem) !important;
            width: calc(100% - 2rem) !important;
            margin-left: auto !important;
            margin-right: auto !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            box-sizing: border-box !important;
            overflow-x: hidden !important;
          }
          
          /* Zorg dat alle child elementen binnen de container blijven */
          section#stats .max-w-xl > * {
            max-width: 100% !important;
            box-sizing: border-box !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
          }
          
          /* Zorg dat tekst niet uitloopt */
          section#stats .max-w-xl p,
          section#stats .max-w-xl h2,
          section#stats .max-w-xl span {
            max-width: 100% !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
          }
          
          /* Label - zelfde grootte als andere secties (text-xs op mobiel = 0.9375rem via index.css) */
          section#stats span.inline-flex.items-center.gap-2.text-sm.font-semibold {
            font-size: 0.9375rem !important; /* text-xs op mobiel = 15px via index.css, zelfde als andere labels */
            margin-top: 2rem !important;
            margin-bottom: 1rem !important;
          }
          
          /* Zorg voor meer ruimte boven de tekstkolom op mobiel */
          section#stats .max-w-xl {
            padding-top: 1rem !important;
          }
          
          /* Bullet point - zelfde grootte als andere secties (text-lg op mobiel = 1.3125rem) */
          section#stats span.inline-flex.items-center.gap-2.text-sm span.text-accent.text-lg,
          section#stats span.inline-flex.items-center.gap-2.text-sm span.text-accent[class*="text-lg"] {
            font-size: 1.3125rem !important; /* text-lg op mobiel = 21px via index.css */
          }
          
          /* Heading - zelfde grootte als andere secties (text-3xl op mobiel) */
          section#stats h2.text-3xl {
            font-size: 1.875rem !important; /* text-3xl = 30px */
            line-height: 1.2 !important;
            margin-bottom: 1.5rem !important;
          }
          
          /* Paragraaf - zelfde grootte als andere secties (text-base op mobiel = 1.1875rem via index.css) */
          section#stats p.text-base {
            font-size: 1.1875rem !important; /* text-base op mobiel = 19px */
            line-height: 1.6 !important;
            margin-bottom: 1.5rem !important;
          }
          
          /* Projecten logo carrousel - gebruik exact de homepage variant op mobiel */
          section#stats .projecten-carousel-mobile {
            display: block !important;
          }
          
          section#stats .projecten-carousel-desktop {
            display: none !important;
          }
          
          /* Afbeelding container - volledig zichtbaar zonder scroll */
          section#stats .flex.justify-center.lg\\:justify-start {
            margin-top: 0 !important;
            margin-bottom: 2rem !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            overflow: visible !important;
          }
          
          /* Container div - beperk breedte zodat foto volledig past */
          section#stats .w-full.max-w-xl {
            max-width: 85% !important;
            width: 85% !important;
            margin-left: auto !important;
            margin-right: auto !important;
            overflow: visible !important;
          }
          
          /* Image container - volledig zichtbaar zonder scroll */
          section#stats .lg\\:absolute.relative.rounded-xl.flex.justify-center {
            width: 100% !important;
            max-width: 100% !important;
            position: relative !important;
            overflow: visible !important;
          }
          
          /* Inner container - volledig zichtbaar, overschrijf inline style */
          section#stats .relative.rounded-xl.overflow-visible.h-full {
            width: 100% !important;
            max-width: 100% !important;
            overflow: visible !important;
            height: auto !important;
            min-height: auto !important;
            max-height: none !important;
          }
          
          /* Overschrijf inline style voor breedte (85% -> 100%) - specifieke selector */
          section#stats div.relative.rounded-xl[style*="85%"] {
            width: 100% !important;
            max-width: 100% !important;
          }
          
          /* Overschrijf ook maxWidth inline style */
          section#stats div.relative.rounded-xl[style*="maxWidth"] {
            max-width: 100% !important;
          }
          
          /* Zorg dat alle divs binnen de foto container geen overflow hebben */
          section#stats .w-full.max-w-xl > div > div {
            overflow: visible !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          
          /* Achtergrondfoto - volledig zichtbaar zonder afsnijding, iets groter */
          section#stats img.rounded-xl.shadow-xl:not(.hidden) {
            height: auto !important;
            width: 100% !important;
            max-width: 100% !important;
            object-fit: contain !important;
            object-position: center !important;
            display: block !important;
            overflow: visible !important;
            max-height: 280px !important;
            aspect-ratio: auto !important;
          }
          
          /* Paarse overlay - zelfde grootte als foto, volledig zichtbaar */
          section#stats .absolute.inset-0.rounded-xl.z-10[style*="backgroundColor"] {
            width: 100% !important;
            height: 100% !important;
            overflow: visible !important;
          }
          
          /* Container div - pas aan op foto grootte */
          section#stats .w-full.max-w-xl {
            height: auto !important;
          }
          
          /* Paarse overlay - zelfde grootte als foto container, volledig zichtbaar */
          section#stats .absolute.inset-0.rounded-xl.z-10[style*="backgroundColor"] {
            width: 100% !important;
            height: 100% !important;
            overflow: visible !important;
          }
          
          /* Zorg dat alle parent containers geen scroll hebben */
          section#stats .w-full.max-w-xl > div {
            overflow: visible !important;
          }
          
          section#stats .lg\\:absolute.relative.rounded-xl > div {
            overflow: visible !important;
          }
          
          /* Verwijder alle scroll en overflow restrictions op foto containers */
          section#stats .flex.justify-center.lg\\:justify-start,
          section#stats .w-full.max-w-xl,
          section#stats .lg\\:absolute.relative.rounded-xl,
          section#stats .relative.rounded-xl.overflow-visible {
            overflow: visible !important;
            overflow-x: visible !important;
            overflow-y: visible !important;
            scroll-behavior: auto !important;
          }
          
          /* Zorg dat de foto container geen fixed height heeft die scroll veroorzaakt */
          section#stats .lg\\:relative.lg\\:h-full {
            height: auto !important;
          }
          
          /* Timeline Section - "Onze reis door de jaren" heading 1px kleiner op mobiel */
          section.section-padding.bg-secondary h2.text-3xl.md\\:text-4xl.lg\\:text-4xl.xl\\:text-5xl.text-center {
            font-size: 27px !important; /* 3px kleiner dan text-3xl (30px) */
          }
          
          /* Timeline year circles - dark gray background on mobile */
          section.section-padding.bg-secondary .w-16.h-16.md\\:w-20.md\\:h-20.rounded-full {
            background-color: #333333 !important;
          }
          
          /* Timeline connector between project blocks (mobile only) */
          section.section-padding.bg-secondary [id^="year-"]:not(:last-child) .project-year-card::after {
            content: "" !important;
            position: absolute !important;
            left: 50% !important;
            top: 100% !important;
            transform: translateX(-50%) !important;
            width: 4px !important;
            height: 10rem !important; /* longer connector */
            background-color: #6366f1 !important;
            border-radius: 999px !important;
          }
          
          /* Verwijder connector onder het laatste projectenblok */
          section.section-padding.bg-secondary [id^="year-"]:last-of-type .project-year-card::after {
            display: none !important;
          }
          
          /* Verwijder connector onder het 2023 projectenblok */
          section.section-padding.bg-secondary #year-2023 .project-year-card::after {
            display: none !important;
          }
          
        }
        @media (min-width: 1024px) {
          /* Verwijder fixed height op laptop/desktop */
          section.relative.section-padding.pt-24[style*="height"] {
            height: auto !important;
          }
        }
      `}</style>
      <Header />
      <main>
        {/* Intro */}
        <section className="relative section-padding pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden" style={{ height: '300px' }}>
          {/* Diagonale scheiding */}
          <div className="absolute inset-0 z-0">
            {/* Linkerhelft - secondary background met foto */}
            <div 
              className="absolute inset-0 bg-secondary"
              style={{
                clipPath: "polygon(0 0, 0 100%, 45% 100%, 55% 0)",
                overflow: "hidden",
              }}
            >
              {/* Foto in grijze ruimte - alleen linkerhelft */}
              <div 
                className="absolute"
                style={{
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "55%",
                  clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
                }}
              >
                <img
                  src={projectenIntro}
                  alt="Crewstars projecten"
                  className="w-full h-full object-cover opacity-90"
                  style={{
                    objectPosition: "100% center",
                  }}
                />
                {/* Lichte zwarte overlay */}
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </div>
            {/* Rechterhelft - paars */}
            <div 
              className="absolute inset-0 bg-[#6366f1]"
              style={{
                clipPath: "polygon(45% 100%, 100% 100%, 100% 0, 55% 0)",
              }}
            />
          </div>
          
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Linkerhelft - leeg of optioneel content */}
                <div className="hidden lg:block"></div>
                
                {/* Rechterhelft - tekst meer naar rechts en naar onder */}
                <div className="text-center lg:flex lg:justify-center lg:items-center lg:pt-16">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white mb-4 sm:mb-6 whitespace-nowrap">
                    Projecten
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Onze Impact Section */}
        <section id="stats" className="pt-32 pb-20 bg-muted/30 relative">
          <div className="container-custom px-4 lg:px-6 xl:px-8">
            {/* Stats with Image Section */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 xl:gap-16 mb-16 lg:items-stretch">
              {/* Left side - Text and Stats */}
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4 text-accent">
                  • Onze projecten
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-6">
                  De bijdragen van Crewstars
                </h2>
                <p className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-6">
                  Door de jaren heen hebben we bijgedragen aan talloze evenementen en producties. Van grote festivals en sportevenementen tot corporate events en beurzen. Hieronder zie je een overzicht van de projecten waar we onze ondersteuning hebben geboden.
                </p>
                
                {/* Project Logos */}
                <div className="mb-6 projecten-carousel-desktop">
                  <div className="space-y-6 sm:space-y-8 overflow-hidden w-full">
                    {/* Top row - scroll from left to right */}
                    <div className="flex gap-4 sm:gap-8 animate-scroll-right w-max" style={{ maxWidth: '100%' }}>
                      {/* Duplicate logos for seamless loop */}
                      {[...logos.slice(0, 6), ...logos.slice(0, 6)].map((logo, index) => (
                        <div
                          key={`top-${index}`}
                          className="flex items-center justify-center p-3 sm:p-4 h-12 sm:h-16 md:h-20 w-24 sm:w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                        >
                          <img
                            src={logo.image}
                            alt={logo.name}
                            className="max-h-full max-w-full object-contain"
                            title={logo.name}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Bottom row - scroll from right to left */}
                    <div className="flex gap-4 sm:gap-8 animate-scroll-left w-max" style={{ maxWidth: '100%' }}>
                      {/* Duplicate logos for seamless loop */}
                      {[...logos.slice(6), ...logos.slice(6)].map((logo, index) => (
                        <div
                          key={`bottom-${index}`}
                          className="flex items-center justify-center p-3 sm:p-4 h-12 sm:h-16 md:h-20 w-24 sm:w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                        >
                          <img
                            src={logo.image}
                            alt={logo.name}
                            className="max-h-full max-w-full object-contain"
                            title={logo.name}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Image aligned: top with heading top, bottom with stats bottom */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-full max-w-xl lg:relative lg:h-full">
                  {/* Spacer matching span mb-4 to align image top with h2 top */}
                  <div className="hidden lg:block" style={{ height: 'calc(1rem + 1.5rem)' }}></div>
                  {/* Image container positioned from h2 top to stats bottom */}
                  <div className="lg:absolute lg:left-0 lg:right-0 relative rounded-xl overflow-visible flex justify-center" style={{ top: 'calc(1rem + 1.5rem)', bottom: 0 }}>
                    <div className="relative rounded-xl overflow-visible h-full" style={{ width: '85%', maxWidth: '85%' }}>
                      <img
                        src={mysterylandProject}
                        alt="Crewstars team aan het werk"
                        className="rounded-xl shadow-xl object-cover w-full h-full"
                      />
                      {/* Brand purple overlay */}
                      <div className="absolute inset-0 rounded-xl z-10" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
                      {/* Crew member image - fills purple box */}
                      <img
                        src={mysterylandProject}
                        alt="Crewstars team member"
                        className="absolute inset-0 rounded-xl z-30 hidden lg:block w-full h-full object-cover"
                        style={{ 
                          transform: 'rotate(-5deg)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Logos - Mobile (exact homepage carousel) */}
            <div className="projecten-carousel-mobile">
              <div className="space-y-6 sm:space-y-8 overflow-hidden w-full">
                {/* Top row - scroll from left to right */}
                <div className="flex gap-4 sm:gap-8 animate-scroll-right w-max" style={{ maxWidth: '100%' }}>
                  {/* Duplicate logos for seamless loop */}
                  {[...logos.slice(0, 6), ...logos.slice(0, 6)].map((logo, index) => (
                    <div
                      key={`top-mobile-${index}`}
                      className="flex items-center justify-center p-3 sm:p-4 h-12 sm:h-16 md:h-20 w-24 sm:w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                    >
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className="max-h-full max-w-full object-contain"
                        title={logo.name}
                      />
                    </div>
                  ))}
                </div>
                {/* Bottom row - scroll from right to left */}
                <div className="flex gap-4 sm:gap-8 animate-scroll-left w-max" style={{ maxWidth: '100%' }}>
                  {/* Duplicate logos for seamless loop */}
                  {[...logos.slice(6), ...logos.slice(6)].map((logo, index) => (
                    <div
                      key={`bottom-mobile-${index}`}
                      className="flex items-center justify-center p-3 sm:p-4 h-12 sm:h-16 md:h-20 w-24 sm:w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                    >
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className="max-h-full max-w-full object-contain"
                        title={logo.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom px-4 lg:px-6 xl:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-6 text-center">
                Onze reis door de jaren
              </h2>
              
              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                We houden deze lijst regelmatig up-to-date binnen bepaalde periodes om je een actueel overzicht te geven van onze projecten. Hieronder vind je een selectie van de tofste projecten, maar we hebben nog veel meer gedaan.
              </p>
              
              {/* Year Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      const element = document.getElementById(`year-${year}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="px-6 py-3 bg-background rounded-[8px] border border-border/50 hover:border-accent hover:bg-[#464646] hover:text-accent hover:scale-105 shadow-sm hover:shadow-lg transition-all duration-200 text-lg font-bold text-foreground"
                  >
                    {year}
                  </button>
                ))}
              </div>
              
              {/* Modern Timeline */}
              <div className="relative">
                {/* Vertical Timeline Line - volledig paars */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-[#6366f1] transform md:-translate-x-1/2 hidden md:block" />
                
                {/* Year Navigation - Arrows (sticky, fixed to timeline with connector line) */}
                <div className="hidden md:block absolute top-0 left-1/2" style={{ 
                      paddingTop: '5rem',
                      zIndex: 50,
                      height: '100%',
                      transform: 'translateX(-50%)'
                    }}>
                      <div className="sticky top-32">
                        {(() => {
                          const hasBothButtons = currentYearIndex > 0 && currentYearIndex < years.length - 1;
                          const prevTargetIndex = currentYearIndex > 0 ? currentYearIndex - 1 : null;
                          const nextTargetIndex = currentYearIndex < years.length - 1 ? currentYearIndex + 1 : null;
                          const prevIsEven = prevTargetIndex !== null ? prevTargetIndex % 2 === 0 : false;
                          const nextIsEven = nextTargetIndex !== null ? nextTargetIndex % 2 === 0 : false;
                          const prevYear = prevTargetIndex !== null ? years[prevTargetIndex] : null;
                          const nextYear = nextTargetIndex !== null ? years[nextTargetIndex] : null;
                          // Bepaal positie op basis van huidige jaar: even index = lege kant links, oneven = rechts
                          const currentIsEven = currentYearIndex % 2 === 0;
                          let position;
                          if (hasBothButtons) {
                            // Bij beide buttons: box staat aan lege kant van huidige jaar
                            position = currentIsEven ? 'left-4' : 'right-4';
                          } else {
                            // Bij één button: box staat aan lege kant van huidige jaar
                            position = currentIsEven ? 'left-4' : 'right-4';
                          }
                          
                          return (
                            <div className={`absolute ${position} top-1/2 cursor-pointer select-none`} style={{ transform: 'translateY(calc(-50% + 1.5rem))' }}>
                              {hasBothButtons ? (
                                <div className="flex items-center gap-3">
                                  {/* Pijltjes rondjes - los van container */}
                                  <div className="flex flex-col gap-2">
                                    <div
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        const prevYear = years[currentYearIndex - 1];
                                        const element = document.getElementById(`year-${prevYear}`);
                                        if (element) {
                                          const offset = 100;
                                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                          const offsetPosition = elementPosition - offset;
                                          window.scrollTo({
                                            top: offsetPosition,
                                            behavior: 'smooth'
                                          });
                                        }
                                      }}
                                      className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer group hover:scale-110 transition-transform duration-200"
                                    >
                                      <ChevronUp className="w-5 h-5 text-[#6366f1] group-hover:-translate-y-0.5 transition-transform duration-200" />
                                    </div>
                                    <div
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        const nextYear = years[currentYearIndex + 1];
                                        const element = document.getElementById(`year-${nextYear}`);
                                        if (element) {
                                          const offset = 100;
                                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                          const offsetPosition = elementPosition - offset;
                                          window.scrollTo({
                                            top: offsetPosition,
                                            behavior: 'smooth'
                                          });
                                        }
                                      }}
                                      className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer group hover:scale-110 transition-transform duration-200"
                                    >
                                      <ChevronDown className="w-5 h-5 text-[#6366f1] group-hover:translate-y-0.5 transition-transform duration-200" />
                                    </div>
                                  </div>
                                  
                                  {/* Labels container */}
                                  <div className="flex flex-col px-3 py-2 bg-white rounded-[5px] shadow-sm">
                                    {/* Previous Year */}
                                    <div
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        const prevYear = years[currentYearIndex - 1];
                                        const element = document.getElementById(`year-${prevYear}`);
                                        if (element) {
                                          const offset = 100;
                                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                          const offsetPosition = elementPosition - offset;
                                          window.scrollTo({
                                            top: offsetPosition,
                                            behavior: 'smooth'
                                          });
                                        }
                                      }}
                                      className="group hover:opacity-80 transition-opacity cursor-pointer pb-1"
                                    >
                                      <span className="text-sm font-semibold text-[#6366f1] tracking-wider uppercase">
                                        {years[currentYearIndex - 1]}
                                      </span>
                                    </div>
                                    
                                    {/* Divider */}
                                    <div className="h-px bg-gray-300 my-0.5"></div>
                                    
                                    {/* Next Year */}
                                    <div
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        const nextYear = years[currentYearIndex + 1];
                                        const element = document.getElementById(`year-${nextYear}`);
                                        if (element) {
                                          const offset = 100;
                                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                          const offsetPosition = elementPosition - offset;
                                          window.scrollTo({
                                            top: offsetPosition,
                                            behavior: 'smooth'
                                          });
                                        }
                                      }}
                                      className="group hover:opacity-80 transition-opacity cursor-pointer pt-1"
                                    >
                                      <span className="text-sm font-semibold text-[#6366f1] tracking-wider uppercase">
                                        {years[currentYearIndex + 1]}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  {/* Previous Year - Single */}
                                  {currentYearIndex > 0 && (
                                    <div
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        const prevYear = years[currentYearIndex - 1];
                                        const element = document.getElementById(`year-${prevYear}`);
                                        if (element) {
                                          const offset = 100;
                                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                          const offsetPosition = elementPosition - offset;
                                          window.scrollTo({
                                            top: offsetPosition,
                                            behavior: 'smooth'
                                          });
                                        }
                                      }}
                                      className="flex items-center gap-3 group"
                                    >
                                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                                        <ChevronUp className="w-5 h-5 text-[#6366f1] group-hover:-translate-y-0.5 transition-transform duration-200" />
                                      </div>
                                      <span className="px-3 py-2 bg-white rounded-[5px] text-sm font-semibold text-[#6366f1] tracking-wider uppercase group-hover:scale-110 transition-transform duration-200 shadow-sm">
                                        {years[currentYearIndex - 1]}
                                      </span>
                                    </div>
                                  )}
                                  
                                  {/* Next Year - Single */}
                                  {currentYearIndex < years.length - 1 && (
                                    <div
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        const nextYear = years[currentYearIndex + 1];
                                        const element = document.getElementById(`year-${nextYear}`);
                                        if (element) {
                                          const offset = 100;
                                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                          const offsetPosition = elementPosition - offset;
                                          window.scrollTo({
                                            top: offsetPosition,
                                            behavior: 'smooth'
                                          });
                                        }
                                      }}
                                      className="flex items-center gap-3 group"
                                    >
                                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                                        <ChevronDown className="w-5 h-5 text-[#6366f1] group-hover:translate-y-0.5 transition-transform duration-200" />
                                      </div>
                                      <span className="px-3 py-2 bg-white rounded-[5px] text-sm font-semibold text-[#6366f1] tracking-wider uppercase group-hover:scale-110 transition-transform duration-200 shadow-sm">
                                        {years[currentYearIndex + 1]}
                                      </span>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                
                {/* Years */}
                {years.map((year, yearIndex) => {
                  const isEven = yearIndex % 2 === 0;
                  
                  return (
                    <div key={year} id={`year-${year}`} className="relative mb-16 last:mb-0 scroll-mt-24">
                      {/* Year Badge - centered on mobile, alternating on desktop */}
                      <div className={`flex items-center gap-6 mb-6 ${
                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}>
                        <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} hidden md:block`}></div>
                        
                        {/* Year Circle */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#333333] border-4 border-[#6366f1] flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                            <span className="text-lg md:text-xl font-black text-[#6366f1]">
                              {year}
                            </span>
                          </div>
                          {/* Connecting line */}
                          <div className={`hidden md:block absolute top-1/2 w-full h-0.5 bg-accent/40 ${
                            isEven ? 'right-full' : 'left-full'
                          }`} style={{ width: 'calc(50% - 2.5rem)' }} />
                          
                        </div>
                        
                        <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} hidden md:block`}></div>
                      </div>
                      
                      {/* Year Content Card */}
                      <div id={`year-card-${year}`} className={`project-year-card relative bg-background rounded-xl p-6 md:p-8 shadow-lg border border-border/50 hover:shadow-xl hover:border-accent/30 transition-all duration-300 ${
                        isEven ? 'md:mr-[calc(50%+2.5rem)]' : 'md:ml-[calc(50%+2.5rem)]'
                      }`}>
                        <h3 className="text-2xl md:text-3xl font-black text-foreground mb-6 pb-4 border-b border-border/50">
                          {year}
                        </h3>
                        {/* Projects List */}
                        <ul className="space-y-3">
                          {projectsByYear[year as keyof typeof projectsByYear].map((project, projectIndex) => (
                            <li
                              key={projectIndex}
                              className="flex items-center gap-3 text-base text-foreground/70 hover:text-foreground transition-colors duration-200 group"
                            >
                              <span className="text-accent text-lg flex-shrink-0">•</span>
                              <span className="group-hover:translate-x-1 transition-transform duration-200">{project}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* "en meer..." text */}
                        <p className="mt-4 text-base text-foreground/60 italic">
                          en meer...
                        </p>
                        
                      </div>
                      
                      {/* 3 Foto's aan de lege kant van de verticale lijn, verdeeld over de hoogte van de projectbox */}
                      {/* Container die de hoogte van de projectbox volgt */}
                      <div 
                        className="hidden md:block absolute"
                        style={{
                          top: '104px', // Start van projectbox (badge 80px + margin 24px)
                          left: '0',
                          right: '0',
                          bottom: '0' // Volgt de onderkant van de jaar container
                        }}
                      >
                        {(year === 2026 ? [0] : [0, 1, 2]).map((photoIndex) => {
                          const emptySideIsLeft = isEven; // Even = lege kant links, oneven = lege kant rechts
                          // Verdeel over de hoogte met meer ruimte tussen foto's: 15%, 50%, 85% vanaf de top van de container
                          // Voor 2026 alleen de middelste positie (50%)
                          const percentages = year === 2026 ? [50] : [15, 50, 85];
                          const percentage = percentages[photoIndex];
                          
                          // Selecteer een unieke foto op basis van jaar en photoIndex
                          // Voor 2026 gebruik de specifieke cdsss.jpg foto
                          // Voor 2025, eerste foto (photoIndex 0) gebruik decibel.jpg
                          // Voor 2025, tweede foto (photoIndex 1) gebruik Drake concert foto
                          // Voor 2024, eerste foto (photoIndex 0) gebruik rammstein-2022.jpg
                          // Voor 2024, laatste foto (photoIndex 2) gebruik adele-1.jpeg
                          // Voor 2023, laatste foto (photoIndex 2) gebruik screenshot
                          const selectedPhoto = year === 2026 ? cdsssImg : (() => {
                            if (year === 2025 && photoIndex === 0) {
                              return decibelRecap;
                            }
                            if (year === 2025 && photoIndex === 1) {
                              return drakeConcert;
                            }
                            if (year === 2024 && photoIndex === 0) {
                              return rammstein2022;
                            }
                            if (year === 2024 && photoIndex === 2) {
                              return adele2024;
                            }
                            if (year === 2023 && photoIndex === 2) {
                              return screenshot2023;
                            }
                            const photoIndexForYear = yearIndex * 3 + photoIndex;
                            return timelinePhotos[photoIndexForYear % timelinePhotos.length];
                          })();
                          const photoId = `photo-${year}-${photoIndex}`;
                          const isVisible = visiblePhotos.has(photoId);
                          
                          return (
                            <div
                              key={`photo-${photoIndex}`}
                              data-photo-id={photoId}
                              className="absolute z-20"
                              style={{
                                top: `${percentage}%`,
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                              }}
                            >
                              {/* Connector line van tijdlijn (50%) naar het midden van de fotobox */}
                              <div 
                                className="h-1 bg-[#6366f1] absolute z-10 transition-all duration-1000 ease-out"
                                style={{ 
                                  width: isLargeScreen ? '400px' : '280px', // Alle connector lines dezelfde breedte
                                  top: '50%',
                                  transform: emptySideIsLeft 
                                    ? `translateY(-50%) scaleX(${isVisible ? 1 : 0})`
                                    : `translateY(-50%) scaleX(${isVisible ? 1 : 0})`,
                                  transformOrigin: emptySideIsLeft ? 'left center' : 'right center',
                                  left: emptySideIsLeft 
                                    ? '0' 
                                    : (isLargeScreen ? '-400px' : '-280px'),
                                  right: 'auto',
                                  opacity: isVisible ? 1 : 0,
                                  transitionDelay: isVisible ? '0ms' : '0ms'
                                }}
                              />
                              
                              {/* Foto - zweeft met connector-lijn aangesloten in het midden */}
                              <div 
                                className="flex items-center justify-center absolute z-20 overflow-hidden rounded-lg transition-opacity duration-500 ease-out"
                                style={{
                                  width: isLargeScreen ? '512px' : '360px',
                                  height: isLargeScreen ? '320px' : '225px',
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  left: emptySideIsLeft 
                                    ? (isLargeScreen ? 'calc(400px - 256px)' : 'calc(280px - 180px)') // Foto midden op einde connector line: 400px/280px - halve foto breedte
                                    : (isLargeScreen ? '-656px' : '-460px'),
                                  right: 'auto',
                                  opacity: isVisible ? 1 : 0,
                                  transitionDelay: isVisible ? '200ms' : '0ms' // Foto fade-in iets later dan connector line
                                }}
                              >
                              <img 
                                src={selectedPhoto} 
                                alt={`Project foto ${year} - ${photoIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        );
                      })}
                      </div>
                    </div>
                  );
                })}
                
                {/* Hexagon aan het einde van de verticale lijn - helemaal onderaan */}
                <div className="absolute left-0 md:left-1/2 bottom-0 hidden md:block z-10" style={{ transform: 'translate(-50%, 0)' }}>
                  <div 
                    className="w-6 h-6 bg-[#6366f1]"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      marginTop: '-24px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Projecten;

