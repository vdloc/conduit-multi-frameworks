export default function Example() {
  return (
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name
      </label>
      <div className="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
          placeholder="Jane Smith"
        />
      </div>
    </div>
  );
}
