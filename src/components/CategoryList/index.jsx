import Category from "./Category";

const CategoryList = () => {
  const items = [
    { catId: 1, catName: "Fiction", catImage: "https://placehold.it/400" },
    { catId: 2, catName: "History", catImage: "https://placehold.it/400" },
    { catId: 3, catName: "Science", catImage: "https://placehold.it/400" },
    {
      catId: 4,
      catName: "External Affairs",
      catImage: "https://placehold.it/400",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center">All Categories</h1>
      <div className="row">
        {items.map((category, index) => (
          <Category key={index} data={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
