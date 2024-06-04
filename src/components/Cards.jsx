import { Card } from "./Card";

export const Cards = () => {
  const people = [
    {
      id: 1,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 2,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 3,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 4,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 5,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];
  return (
    <div className="mx-auto p-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {people.map((person, index) => (
            <Card key={index} person={person} />
          ))}
      </div>
    </div>
  );
};
