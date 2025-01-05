import Select from 'react-select';

const SelectComponent = ({ 
  options = [], 
  onChange, 
  value, 
  placeholder = "Select an option", 
  className = "", 
  isClearable = true,
  isSearchable = true,
  isDisabled = false,
  isLoading = false,
  ...props 
}) => {

  const formattedOptions = options.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  const selectedValue = formattedOptions.find(opt => opt.value === value);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderWidth: '2px',
      borderColor: state.isFocused ? '#1F2937' : provided.borderColor,
      boxShadow: state.isFocused ? '0 0 0 2px rgba(0, 123, 255, 0.25)' : provided.boxShadow,
      '&:hover': {
        borderColor: '#1F2937'
      }
    })
  };

  return (
    <Select
      className={`basic-single ${className}`}
      classNamePrefix="select"
      options={formattedOptions}
      value={selectedValue}
      onChange={(selectedOption) => onChange(selectedOption ? selectedOption.value : "")}
      placeholder={placeholder}
      isClearable={isClearable}
      isSearchable={isSearchable}
      isDisabled={isDisabled}
      isLoading={isLoading}
      styles={customStyles}
      {...props}
    />
  );
};

export default SelectComponent;
