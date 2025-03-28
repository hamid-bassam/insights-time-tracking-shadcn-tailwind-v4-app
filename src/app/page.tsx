import ActivityDashboard from '@/components/ActivityDashboard';
import { mockActivityData } from '@/data/mock-data';

// export const getUniqueActivityNames = (data: ActivityData): string[] => {
//   const uniqueNames = new Set<string>();

//   data.forEach((week) => {
//     week.activities.forEach((activity) => {
//       uniqueNames.add(activity.name.trim()); // Suppression des espaces inutiles
//     });
//   });

//   return Array.from(uniqueNames);
// };


// // Récupérer toutes les activités uniques
// const allActivityNames = new Set<string>();

// mockActivityData.forEach(week => {
//   week.activities.forEach(activity => {
//     allActivityNames.add(activity.name.trim().replace(/\s* – \s*/g, " - "));
//   });
// });

// export const normalizedActivityNames = Array.from(allActivityNames);

// console.log(normalizedActivityNames);
// console.log(normalizedActivityNames.length);






// Exemple d'utilisation avec mockActivityData
// console.log(getUniqueActivityNames(mockActivityData));

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ActivityDashboard data={mockActivityData} />
    </main>
  );
}