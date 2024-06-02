import { Card } from "./Card";

export const Cards = () => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "New"];
  return (
    <div className="mx-auto p-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        {items.map((item, index) => (
          <div className="rounded-lg">
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
};
