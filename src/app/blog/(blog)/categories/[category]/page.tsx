import CategoryPage from "@/components/blog/CategoryPage";

function page({ params }: { params: { category: string } }) {
  return (
    <div className="flex-1 flex flex-col">
      <CategoryPage category={params.category} />
    </div>
  );
}

export default page;
