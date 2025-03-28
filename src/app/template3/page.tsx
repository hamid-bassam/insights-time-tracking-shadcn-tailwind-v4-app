
export default function PremiumBackground() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Deep Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>

      {/* Polygonal Structure with Depth */}
      <div
        className="absolute w-[130%] h-[130%] bg-gray-800 opacity-25 backdrop-blur-lg"
        style={{ clipPath: "polygon(0% 12%, 100% 0%, 100% 88%, 0% 100%)" }}
      ></div>

      {/* Luxurious Soft Glow Accents */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-gray-800/60 to-transparent blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-gray-800/60 to-transparent blur-3xl opacity-30"></div>

      {/* Subtle Ambient Lighting */}
      <div className="absolute inset-x-0 top-1/4 h-[5%] bg-gray-700/10 blur-xl"></div>
      <div className="absolute inset-x-0 bottom-1/4 h-[5%] bg-gray-700/10 blur-xl"></div>
    </div>
  );
}