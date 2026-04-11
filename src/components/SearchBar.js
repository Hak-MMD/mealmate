export default function SearchBar() {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search recipes..."
      />
      <button className="search-btn" type="button">
        Search
      </button>
    </div>
  );
}
