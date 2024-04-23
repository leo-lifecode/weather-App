
export const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "5px",
      border: "2px solid #ccc",
      boxShadow: state.isFocused ? "0 0 0 2px #3699FF" : null,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#3699FF" : null,
      color: state.isFocused ? "black" : "black",
    }),
  };