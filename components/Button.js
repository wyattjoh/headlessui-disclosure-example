export default function Button({ onClick, children }) {
  return (
    <button
      className="px-4 py-2 text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
