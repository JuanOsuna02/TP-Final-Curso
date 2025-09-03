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
      {/* filete inferior crema */}
      <div className="absolute inset-x-0 bottom-0 h-[6px] bg-brand-beige/92 pointer-events-none" />

      <div className="container-1100 grid grid-cols-2 md:grid-cols-4 gap-10 py-8 md:py-10">
        {items.map(({ kpi, label, Icon, bump }) => {
          const bumpTop =
            "before:content-[''] before:absolute before:w-[96px] before:h-[96px] before:bg-black/12 before:rounded-full before:top-[-48px] before:left-1/2 before:-translate-x-1/2";
          const bumpBottom =
            "after:content-[''] after:absolute  after:w-[96px]  after:h-[96px]  after:bg-black/12  after:rounded-full  after:bottom-[-48px] after:left-1/2 after:-translate-x-1/2";

          return (
            <div
              key={label}
              className={`
                relative z-0 flex items-center gap-4 px-2
                ${bump === "top" ? bumpTop : bumpBottom}
              `}
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



