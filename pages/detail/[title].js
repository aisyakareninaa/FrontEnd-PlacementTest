import Link from "next/link";
import { useRouter } from "next/router";
import data from "../../data.json";

const Detail = () => {
  const router = useRouter();
  const { title } = router.query;
  const selectedItem = data.find((item) => item.title === title);

  if (!selectedItem) {
    return (
      <div className="bg-white h-screen flex items-center justify-center">
        <h1 className="text-black text-2xl font-semibold text-center">
          Item not found
        </h1>
      </div>
    );
  }

  const { description, img } = selectedItem;

  return (
    <div className="bg-white">
      <Link href="/">
        <button
          type="button"
          className="bg-white bg-opacity-50 text-gray-800 rounded-l-md border-r border-gray-100 py-2 hover:bg-gray-200 px-4"
        >
          <div className="flex flex-row align-middle">
            <svg
              className="w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </Link>
      <div className="bg-white h-screen flex flex-col items-center">

        <img
          alt={title}
          src={img}
          className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />

        <h3 className="font-playfair-display mt-4 text-lg font-bold text-gray-900 sm:text-xl text-center">
          {title}
        </h3>

        <hr className="w-1/6 border-t border-gray-300 my-8" />

        <p className="font-noto-serif mt-2 max-w-sm text-gray-500 text-center">
          {description || "No description availablze."}
        </p>

        <a className="mt-24 max-w-sm text-gray-500 text-center uppercase">
          Show statistic
        </a>
      </div>
    </div>
  );
};

export default Detail;
