import React from "react";

export default function SupportYourCommunity() {
  const campaigns = [
    {
      id: 1,
      title: "Covid - 19",
      image: "/VacunaCovid.jpg", // Imagen de vacuna COVID-19
    },
    {
      id: 2,
      title: "Food Bank",
      image: "/FoodBank.jpg", // Imagen de banco de alimentos
    },
    {
      id: 3,
      title: "Safe Water",
      image: "/Water.jpeg", // Imagen de agua segura
    }
  ];

  return (
    <section className="bg-brand-beige py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-0">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4 relative">
            Support Your<br />Community
            <div className="w-16 h-0.5 bg-brand-dark mt-8"></div>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed mb-0 mt-8">
            The legal definition of a charitable organization (and of charity) varies between countries and in charity law affects charitable organizations also vary.
          </p>
        </div>

        {/* Campaign Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8-mt-32">
          {campaigns.map((campaign, index) => {
            // Safe Water tiene imagen más larga y diferente alineación
            const isSafeWater = campaign.title === "Safe Water";
            const isCovidOrFood = campaign.title === "Covid - 19" || campaign.title === "Food Bank";
            
            return (
              <div key={campaign.id} className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${isSafeWater ? 'md:relative md:-translate-y-52' : ''} ${isCovidOrFood ? 'h-[350px] md:relative md:translate-y-36' : ''}`}>
                {/* Campaign Image */}
                <div className={`${isSafeWater ? 'aspect-[4/6]' : 'aspect-[4/3]'} bg-gray-100 relative overflow-hidden`}>
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: campaign.title === "Covid - 19" ? 'center bottom' : 'center center'
                    }}
                  />
                </div>
                
                {/* Campaign Title */}
                <div className={`p-6 ${isCovidOrFood ? 'h-44' : ''}`}>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {campaign.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Campaign Link */}
        <div className="grid grid-cols-3 gap-8 -mt-40 transform translate-y-[-20px]"> {/* Mover 10px hacia abajo */}
          <div></div> {/* Columna vacía para Covid */}
          <div></div> {/* Columna vacía para Food Bank */}
          <div className="flex justify-center"> {/* Centrado en la columna de Safe Water */}
            <a 
              href="#campaigns" 
              className="text-brand-dark font-medium hover:text-brand-green transition-colors underline decoration-1 underline-offset-4"
            >
              View All Campaign
            </a>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className="mt-24 border-t border-gray-300"></div>
      </div>
    </section>
  );
}
