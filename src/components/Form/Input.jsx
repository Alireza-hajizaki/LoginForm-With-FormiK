const Input = ({inputName,inputType,labelTitle,iconName}) => {
  return (
    <div className="input-box">
      <ion-icon name={iconName}></ion-icon>
      <input name={inputName} type={inputType} required />
      <label htmlFor={inputName}>{labelTitle}</label>
    </div>
  );
};

export default Input;
