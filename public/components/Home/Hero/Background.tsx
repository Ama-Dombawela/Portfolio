"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// Required packages:
// npm install @tsparticles/react @tsparticles/engine @tsparticles/slim

export default function ParticlesHero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fullScreen: { enable: false },
      fpsLimit: 60,

      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          repulse: {
            distance: 180,
            duration: 0.6,
            factor: 6,
            speed: 1,
          },
          grab: {
            distance: 160,
            links: { opacity: 0.8 },
          },
        },
      },

      particles: {
        color: {
          value: ["#ffffff", "#93c5fd", "#3b82f6", "#bfdbfe", "#60a5fa"],
          animation: {
            enable: true,
            speed: 12,
            sync: false,
          },
        },

        links: {
          enable: true,
          distance: 130,
          opacity: 0.18,
          width: 1,
          triangles: {
            enable: true,
            opacity: 0.03,
          },
          color: { value: "#3b82f6" },
        },

        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: true,
          speed: { min: 0.3, max: 1.2 },
          straight: false,
          attract: {
            enable: true,
            rotate: { x: 1200, y: 1200 },
          },
          angle: {
            offset: 45,
            value: 15,
          },
        },

        number: {
          density: { enable: true, area: 900 },
          value: 80,
        },

        opacity: {
          value: { min: 0.1, max: 0.8 },
          animation: {
            enable: true,
            speed: 1.2,
            sync: false,
            startValue: "random",
            minimumValue: 0.05,
          },
        },

        shape: {
          type: ["circle", "circle", "circle", "star"],
          options: {
            star: { sides: 4 },
          },
        },

        size: {
          value: { min: 1, max: 3.5 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
            startValue: "random",
            minimumValue: 0.5,
          },
        },

        shadow: {
          enable: true,
          blur: 6,
          color: { value: "#93c5fd" },
        },

        stroke: {
          width: 0,
        },
      },

      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <>
      {/* === Blue & white gradient backdrop === */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 10%,  rgba(59,130,246,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 90%,  rgba(255,255,255,0.08) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 60% 40%,  rgba(147,197,253,0.10) 0%, transparent 50%),
            linear-gradient(160deg, #020d1f 0%, #041329 50%, #061628 100%)
          `,
        }}
      />

      {/* === Soft grain overlay for texture === */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* === Aurora shimmer bands === */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "-20%",
            width: "70%",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), rgba(59,130,246,0.4), transparent)",
            filter: "blur(12px)",
            animation: "aurora1 12s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "55%",
            right: "-20%",
            width: "60%",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(147,197,253,0.3), rgba(255,255,255,0.25), transparent)",
            filter: "blur(10px)",
            animation: "aurora2 16s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "75%",
            left: "10%",
            width: "50%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(96,165,250,0.25), transparent)",
            filter: "blur(8px)",
            animation: "aurora3 20s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* === Particles layer === */}
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0"
      />

      {/* === Animation keyframes === */}
      <style>{`
        @keyframes aurora1 {
          0%   { transform: translateX(0%)  scaleY(1);   opacity: 0.6; }
          50%  { transform: translateX(15%) scaleY(3);   opacity: 1;   }
          100% { transform: translateX(30%) scaleY(1.5); opacity: 0.4; }
        }
        @keyframes aurora2 {
          0%   { transform: translateX(0%)   scaleY(1);   opacity: 0.5; }
          50%  { transform: translateX(-20%) scaleY(2.5); opacity: 0.9; }
          100% { transform: translateX(-10%) scaleY(1);   opacity: 0.3; }
        }
        @keyframes aurora3 {
          0%   { transform: translateX(0%)  scaleY(1); opacity: 0.4; }
          100% { transform: translateX(25%) scaleY(4); opacity: 0.7; }
        }
      `}</style>
    </>
  );
}