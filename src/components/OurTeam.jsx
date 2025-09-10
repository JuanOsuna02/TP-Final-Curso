import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Executive Director",
      image: "/man-6653177_1280.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Program Manager",
      image: "/man-6653177_1280.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Community Outreach",
      image: "/man-6653177_1280.jpg"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Finance Director",
      image: "/man-6653177_1280.jpg"
    }
  ];

  return (
    <section className="py-20 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              {/* Team Member Photo */}
              <div className="mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Team Member Info */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">
                {member.position}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom Border Line */}
        <div className="mt-24 border-t border-gray-300"></div>
      </div>
    </section>
  );
};

export default OurTeam;