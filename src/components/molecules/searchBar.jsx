import Input from "../atoms/input";
import Button from "../atoms/button";

const SearchBar = ({
  value,
  onChange,
  onSearch,
  placeholder
}) => {
  return (
    <div className="d-flex gap-2">
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      <Button
        text="Buscar"
        onClick={onSearch}
      />
    </div>
  );
};

export default SearchBar;