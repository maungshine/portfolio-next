import TagPage from "@/components/blog/Tags";

function page({ params }: { params: { tag: string } }) {
  return (
    <div className="flex-1 flex flex-col">
      <TagPage tag={params.tag} />;
    </div>
  );
}

export default page;
