const HashtagBanner = () => {
  const hashtags = [
    "#JoinOurCrew",
    "#WerkMetVrienden",
    "#SideHustle",
    "#Festivals",
    "#Ticketscanning",
    "#Bardiensten",
    "#Runner",
    "#Hostess",
    "#Hospitality",
    "#Gastvrijheid",
    "#Eventcrew",
    "#TeamTAP"
  ];

  return (
    <section className="w-full bg-primary py-4 sm:py-6 overflow-hidden">
      <div className="w-full overflow-hidden">
        <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 animate-scroll">
          {hashtags.map((hashtag, index) => (
            <span
              key={index}
              className="text-black font-semibold text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap flex-shrink-0"
            >
              {hashtag}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {hashtags.map((hashtag, index) => (
            <span
              key={`duplicate-${index}`}
              className="text-black font-semibold text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap flex-shrink-0"
            >
              {hashtag}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default HashtagBanner;
