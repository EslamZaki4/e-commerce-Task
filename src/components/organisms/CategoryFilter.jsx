import SelectComponent from "../atoms/Select";

const CategoryFilter = ({ categories, onSelectCategory, className = "" }) => {
  
  
  return (
    <div className={`w-full rounded-full ${className}`}>
      <SelectComponent
        options={categories}
        onChange={(selectedOption) => onSelectCategory(selectedOption ? selectedOption : "")}
        className=""
      />
    </div>
  );
};

export default CategoryFilter;
