// // 'use client';

// // import { useState } from "react";
// // import Image from "next/image";

// // // This should live in a separate file in production, e.g., /data/games.js
// // const games = [
// //   {
// //     id: 1,
// //     title: "Clair Obscur: Expedition 33",
// //     rating: 9.4,
// //     coverImage: "/expedition33.jpg",
// //   },
// //   {
// //     id: 2,
// //     title: "Mecha Break",
// //     rating: 8.6,
// //     coverImage: "/mecha.jpg",
// //   },
// //   {
// //     id: 3,
// //     title: "Supermarket Simulator",
// //     rating: 6.1,
// //     coverImage: "/supermarket.jpg",
// //   },
// //   {
// //     id: 4,
// //     title: "Mario Kart World",
// //     rating: 8.3,
// //     coverImage: "/mario.jpg",
// //   },
// //   {
// //     id: 5,
// //     title: "Death Stranding 2",
// //     rating: 9.5,
// //     coverImage: "/death_standing.jpg",
// //   },
// //   {
// //     id: 6,
// //     title: "Dune Awakening",
// //     rating: 9.8,
// //     coverImage: "/dune.jpg",
// //   },
// // ];

// // export default function Home() {
// //   const [searchTerm, setSearchTerm] = useState("");

// //   // Filter the games based on search term
// //   const filteredGames = games.filter(game =>
// //     game.title.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-[#121212]">
// //       <header className="mb-12 text-center">
// //         <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
// //           Popular Right Now
// //         </h1>
// //         <p className="text-gray-700 dark:text-gray-300 mb-4">
// //           Discover trending game titles & ratings
// //         </p>

// //         {/* Search bar */}
// //         <div className="flex justify-center">
// //           <input
// //             type="text"
// //             placeholder="Search games..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //         </div>
// //       </header>

// //       <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// //         {filteredGames.length > 0 ? (
// //           filteredGames.map(({ id, title, rating, coverImage }) => (
// //             <div
// //               key={id}
// //               className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
// //             >
// //               <div className="relative w-full h-[250px]">
// //                 <Image
// //                   src={coverImage}
// //                   alt={title}
// //                   fill
// //                   sizes="(max-width: 768px) 100vw, 33vw"
// //                   style={{ objectFit: "cover" }}
// //                   priority={id <= 3}
// //                 />
// //               </div>
// //               <div className="p-4">
// //                 <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
// //                   {title}
// //                 </h2>
// //                 <p className="text-yellow-500 font-medium">⭐ {rating}</p>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p className="text-center text-gray-500 col-span-full">No games found.</p>
// //         )}
// //       </main>
// //     </div>
// //   );
// // }
// 'use client';

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const games = [
//   {
//     id: 1,
//     title: "Clair Obscur: Expedition 33",
//     rating: 9.4,
//     releaseYear: 2025,
//     players: "2.3M+",
//     description: "An artistic RPG adventure with surreal world design.",
//     coverImage: "/expedition33.jpg",
//   },
//   {
//     id: 2,
//     title: "Mecha Break",
//     rating: 8.6,
//     releaseYear: 2024,
//     players: "1.8M+",
//     description: "A fast-paced mech battle arena game.",
//     coverImage: "/mecha.jpg",
//   },
//   {
//     id: 3,
//     title: "Supermarket Simulator",
//     rating: 6.1,
//     releaseYear: 2024,
//     players: "500K+",
//     description: "Run your own supermarket in this simulator game.",
//     coverImage: "/supermarket.jpg",
//   },
//   {
//     id: 4,
//     title: "Mario Kart World",
//     rating: 8.3,
//     releaseYear: 2023,
//     players: "3.5M+",
//     description: "Classic kart racing fun with new tracks and twists.",
//     coverImage: "/mario.jpg",
//   },
//   {
//     id: 5,
//     title: "Death Stranding 2",
//     rating: 9.5,
//     releaseYear: 2025,
//     players: "1.2M+",
//     description: "Sequel to the legendary open-world exploration game.",
//     coverImage: "/death_standing.jpg",
//   },
//   {
//     id: 6,
//     title: "Dune Awakening",
//     rating: 9.8,
//     releaseYear: 2025,
//     players: "900K+",
//     description: "Survive on Arrakis in this epic MMO adventure.",
//     coverImage: "/dune.jpg",
//   },
// ];

// export default function Home() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredGames = games.filter(game =>
//     game.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen p-8 sm:p-20 bg-gray-50 dark:bg-[#121212] font-sans">
//       <header className="mb-12 text-center">
//         <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
//           Popular Right Now
//         </h1>
//         <p className="text-gray-700 dark:text-gray-300 mb-4">
//           Discover trending game titles & ratings
//         </p>

//         <div className="flex justify-center">
//           <input
//             type="text"
//             placeholder="Search games..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </header>

//       <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {filteredGames.length > 0 ? (
//           filteredGames.map(({ id, title, rating, coverImage }) => (
//             <Link key={id} href={`/game/${id}`}>
//               <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
//                 <div className="relative w-full h-[250px]">
//                   <Image
//                     src={coverImage}
//                     alt={title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     style={{ objectFit: "cover" }}
//                     priority={id <= 3}
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
//                     {title}
//                   </h2>
//                   <p className="text-yellow-500 font-medium">⭐ {rating}</p>
//                 </div>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">No games found.</p>
//         )}
//       </main>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// const games = [
//   {
//     id: 1,
//     title: "Clair Obscur: Expedition 33",
//     genre: "Role-playing (RPG)",
//     rating: 9.4,
//     releaseYear: 2025,
//     players: "2.3M+",
//     description: "An artistic RPG adventure with surreal world design.",
//     coverImage: "/expedition33.jpg",
//   },
//   {
//     id: 2,
//     title: "Mecha Break",
//     genre: "Shooter",
//     rating: 8.6,
//     releaseYear: 2024,
//     players: "1.8M+",
//     description: "A fast-paced mech battle arena game.",
//     coverImage: "/mecha.jpg",
//   },
//   {
//     id: 3,
//     title: "Supermarket Simulator",
//     genre: "Simulation",
//     rating: 6.1,
//     releaseYear: 2024,
//     players: "500K+",
//     description: "Run your own supermarket in this simulator game.",
//     coverImage: "/supermarket.jpg",
//   },
//   {
//     id: 4,
//     title: "Mario Kart World",
//     genre: "Racing",
//     rating: 8.3,
//     releaseYear: 2023,
//     players: "3.5M+",
//     description: "Classic kart racing fun with new tracks and twists.",
//     coverImage: "/mario.jpg",
//   },
//   {
//     id: 5,
//     title: "Death Stranding 2",
//     genre: "Shooter",
//     rating: 9.5,
//     releaseYear: 2025,
//     players: "1.2M+",
//     description: "Sequel to the legendary open-world exploration game.",
//     coverImage: "/death_standing.jpg",
//   },
//   {
//     id: 6,
//     title: "Dune Awakening",
//     genre: "RPG",
//     rating: 9.8,
//     releaseYear: 2025,
//     players: "900K+",
//     description: "Survive on Arrakis in this epic MMO adventure.",
//     coverImage: "/dune.jpg",
//   },
// ];

// export default function Home() {
//   const [selectedGame, setSelectedGame] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-10 font-sans">
//       <h1 className="text-4xl font-bold text-center mb-12">🎮 Popular Games</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {games.map((game) => (
//           <div
//             key={game.id}
//             onClick={() => setSelectedGame(game)}
//             className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg cursor-pointer transform hover:scale-105 transition duration-300 overflow-hidden"
//           >
//             <div className="relative w-full aspect-[3/4]">
//               <Image
//                 src={game.coverImage}
//                 alt={game.title}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-lg font-semibold truncate">{game.title}</h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">{game.genre}</p>
//               <p className="text-yellow-500 font-medium mt-1">⭐ {game.rating}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedGame && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
//           <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-lg">
//             {/* Close button */}
//             <button
//               onClick={() => setSelectedGame(null)}
//               className="absolute top-3 right-4 text-lg text-gray-400 hover:text-white"
//             >
//               ✕
//             </button>

//             {/* Image */}
//             <div className="relative w-full h-56 rounded-lg overflow-hidden mb-4">
//               <Image
//                 src={selectedGame.coverImage}
//                 alt={selectedGame.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Info */}
//             <h2 className="text-2xl font-bold mb-1">{selectedGame.title}</h2>
//             <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{selectedGame.genre}</p>
//             <p className="text-yellow-400 font-semibold text-lg mb-3">⭐ {selectedGame.rating}</p>

//             <div className="text-sm space-y-1">
//               <p><span className="font-medium">📅 Release Year:</span> {selectedGame.releaseYear}</p>
//               <p><span className="font-medium">🎮 Players:</span> {selectedGame.players}</p>
//               <p className="pt-2">{selectedGame.description}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// const games = [
//   {
//     id: 1,
//     title: "Clair Obscur: Expedition 33",
//     genre: "Role-playing (RPG)",
//     rating: 9.4,
//     releaseYear: 2025,
//     players: "2.3M+",
//     description: "An artistic RPG adventure with surreal world design.",
//     coverImage: "/expedition33.jpg",
//   },
//   {
//     id: 2,
//     title: "Mecha Break",
//     genre: "Shooter",
//     rating: 8.6,
//     releaseYear: 2024,
//     players: "1.8M+",
//     description: "A fast-paced mech battle arena game.",
//     coverImage: "/mecha.jpg",
//   },
//   {
//     id: 3,
//     title: "Supermarket Simulator",
//     genre: "Simulation",
//     rating: 6.1,
//     releaseYear: 2024,
//     players: "500K+",
//     description: "Run your own supermarket in this simulator game.",
//     coverImage: "/supermarket.jpg",
//   },
//   {
//     id: 4,
//     title: "Mario Kart World",
//     genre: "Racing",
//     rating: 8.3,
//     releaseYear: 2023,
//     players: "3.5M+",
//     description: "Classic kart racing fun with new tracks and twists.",
//     coverImage: "/mario.jpg",
//   },
//   {
//     id: 5,
//     title: "Death Stranding 2",
//     genre: "Shooter",
//     rating: 9.5,
//     releaseYear: 2025,
//     players: "1.2M+",
//     description: "Sequel to the legendary open-world exploration game.",
//     coverImage: "/death_standing.jpg",
//   },
//   {
//     id: 6,
//     title: "Dune Awakening",
//     genre: "RPG",
//     rating: 9.8,
//     releaseYear: 2025,
//     players: "900K+",
//     description: "Survive on Arrakis in this epic MMO adventure.",
//     coverImage: "/dune.jpg",
//   },
// ];

// export default function Home() {
//   const [selectedGame, setSelectedGame] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-8 font-sans">
//       <h1 className="text-3xl font-bold text-center mb-8">🎮 Popular Games</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         {games.map((game) => (
//           <div
//             key={game.id}
//             onClick={() => setSelectedGame(game)}
//             className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg cursor-pointer transform hover:scale-105 transition duration-200 overflow-hidden"
//           >
//             <div className="relative w-full aspect-[4/5]">
//               <Image
//                 src={game.coverImage}
//                 alt={game.title}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//             <div className="p-3">
//               <h3 className="text-sm font-semibold truncate">{game.title}</h3>
//               <p className="text-xs text-gray-500 dark:text-gray-400">{game.genre}</p>
//               <p className="text-yellow-500 font-medium text-sm mt-1">⭐ {game.rating}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedGame && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
//           <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-5 w-full max-w-md shadow-lg">
//             {/* Close button */}
//             <button
//               onClick={() => setSelectedGame(null)}
//               className="absolute top-3 right-4 text-lg text-gray-400 hover:text-white"
//             >
//               ✕
//             </button>

//             {/* Image */}
//             <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
//               <Image
//                 src={selectedGame.coverImage}
//                 alt={selectedGame.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Info */}
//             <h2 className="text-xl font-bold mb-1">{selectedGame.title}</h2>
//             <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{selectedGame.genre}</p>
//             <p className="text-yellow-400 font-semibold mb-3">⭐ {selectedGame.rating}</p>

//             <div className="text-sm space-y-1">
//               <p><strong>📅 Release Year:</strong> {selectedGame.releaseYear}</p>
//               <p><strong>🎮 Players:</strong> {selectedGame.players}</p>
//               <p className="pt-2">{selectedGame.description}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import Image from 'next/image';

const games = [
  {
    id: 1,
    title: "Clair Obscur: Expedition 33",
    genre: "Role-playing (RPG)",
    rating: 9.4,
    releaseYear: 2025,
    players: "2.3M+",
    description: "An artistic RPG adventure with surreal world design.",
    coverImage: "/expedition33.jpg",
  },
  {
    id: 2,
    title: "Mecha Break",
    genre: "Shooter",
    rating: 8.6,
    releaseYear: 2024,
    players: "1.8M+",
    description: "A fast-paced mech battle arena game.",
    coverImage: "/mecha.jpg",
  },
  {
    id: 3,
    title: "Supermarket Simulator",
    genre: "Simulation",
    rating: 6.1,
    releaseYear: 2024,
    players: "500K+",
    description: "Run your own supermarket in this simulator game.",
    coverImage: "/supermarket.jpg",
  },
  {
    id: 4,
    title: "Mario Kart World",
    genre: "Racing",
    rating: 8.3,
    releaseYear: 2023,
    players: "3.5M+",
    description: "Classic kart racing fun with new tracks and twists.",
    coverImage: "/mario.jpg",
  },
  {
    id: 5,
    title: "Death Stranding 2",
    genre: "Shooter",
    rating: 9.5,
    releaseYear: 2025,
    players: "1.2M+",
    description: "Sequel to the legendary open-world exploration game.",
    coverImage: "/death_standing.jpg",
  },
  {
    id: 6,
    title: "Dune Awakening",
    genre: "RPG",
    rating: 9.8,
    releaseYear: 2025,
    players: "900K+",
    description: "Survive on Arrakis in this epic MMO adventure.",
    coverImage: "/dune.jpg",
  },
];

export default function Home() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-8 font-sans">
      <h1 className="text-3xl font-bold text-center mb-4">🎮 Popular Games</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <div
              key={game.id}
              onClick={() => setSelectedGame(game)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg cursor-pointer transform hover:scale-105 transition duration-200 overflow-hidden"
            >
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={game.coverImage}
                  alt={game.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold truncate">{game.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{game.genre}</p>
                <p className="text-yellow-500 font-medium text-sm mt-1">⭐ {game.rating}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">No games found.</p>
        )}
      </div>

      {/* Modal */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-5 w-full max-w-md shadow-lg">
            <button
              onClick={() => setSelectedGame(null)}
              className="absolute top-3 right-4 text-lg text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src={selectedGame.coverImage}
                alt={selectedGame.title}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-xl font-bold mb-1">{selectedGame.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{selectedGame.genre}</p>
            <p className="text-yellow-400 font-semibold mb-3">⭐ {selectedGame.rating}</p>

            <div className="text-sm space-y-1">
              <p><strong>📅 Release Year:</strong> {selectedGame.releaseYear}</p>
              <p><strong>🎮 Players:</strong> {selectedGame.players}</p>
              <p className="pt-2">{selectedGame.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
