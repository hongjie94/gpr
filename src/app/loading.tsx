import Loader from "@/components/ui/loader";

const loading = () => {
  return (
    <div className="flex items-center flex-col w-100 min-h-screen">
      <div className="flex items-center mb-4 mt-[20vh]">
        <Loader /> <h1 className="text-xl font-semibold m-2">Loading ...</h1>
      </div>
      <p className="text-stone-500 dark:text-stone-400">Please wait while the content is loading.</p>
    </div>
  );
};

export default loading;
