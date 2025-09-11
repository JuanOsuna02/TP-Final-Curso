// React Icons - Importa los iconos que elijas aquí
import { BsHearts, BsBox2Heart } from 'react-icons/bs';  // Bootstrap Icons
import { IoMegaphoneOutline } from 'react-icons/io5';  // Ionicons
import { PiHandHeartDuotone } from 'react-icons/pi';  // Phosphor Icons

// Stats con bumps semicirculares: abajo, arriba, abajo, arriba
export default function Stats() {
  const items = [
    { kpi: "985+",  label: "Donation Received",     Icon: BsHearts, bump: "bottom" },
    { kpi: "$10 M", label: "Money Donated",        Icon: BsBox2Heart,    bump: "top"    },
    { kpi: "12+",   label: "Active Campaigns",     Icon: IoMegaphoneOutline,   bump: "bottom" },
    { kpi: "$60 M", label: "Charity in last Year", Icon: PiHandHeartDuotone,   bump: "top"    },
  ];

  return (
    <section
      className="
        relative overflow-hidden text-white
        bg-[linear-gradient(180deg,#0E6A56_0%,#0A705D_50%,#0E6A56_100%)]  /* verde con leve bisel vertical */
      "
    >
      
      <div className="absolute inset-x-0 bottom-0 h-[6px] bg-brand-beige/92 pointer-events-none" />

      {/* Sombras semicirculares alineadas con cada icono */}
      <div className="absolute top-0 left-0 w-full h-12 pointer-events-none">
        {/* Sombra superior - segundo elemento (Money Donated) */}
        <div 
          className="absolute -top-12 w-10 h-20 bg-black/20 rounded-full transform -translate-x-1/2"
          style={{
            left: '40.1%',
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)'
          }}
        />
        {/* Sombra superior - cuarto elemento (Charity in last Year) */}
        <div 
          className="absolute -top-12 w-10 h-20 bg-black/20 rounded-full transform -translate-x-1/2"
          style={{
            left: '64.2%',
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)'
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-12 pointer-events-none">
        {/* Sombra inferior - primer elemento (Donation Received) */}
        <div 
          className="absolute -bottom-12 w-10 h-20 bg-black/20 rounded-full transform -translate-x-1/2"
          style={{
            left: '28.1%',
            clipPath: 'polygon(0 0%, 100% 0%, 100% 50%, 0 50%)'
          }}
        />
        {/* Sombra inferior - tercer elemento (Active Campaigns) */}
        <div 
          className="absolute -bottom-12 w-10 h-20 bg-black/20 rounded-full transform -translate-x-1/2"
          style={{
            left: '51.9%',
            clipPath: 'polygon(0 0%, 100% 0%, 100% 50%, 0 50%)'
          }}
        />
      </div>

      <div className="container-1100 grid grid-cols-2 md:grid-cols-4 gap-10 py-8 md:py-10">
        {items.map(({ kpi, label, Icon }) => {
          return (
            <div
              key={label}
              className="relative flex items-center gap-4 px-2"
            >
              <div className="relative z-10 shrink-0">
                {Icon && <Icon className="w-9 h-9 md:w-10 md:h-10 text-white" />}
              </div>
              <div className="relative z-10">
                <div className="text-[22px] md:text-2xl font-semibold tracking-tight">{kpi}</div>
                <div className="text-[12.5px] md:text-[13px] opacity-90">{label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}



