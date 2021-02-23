export const TaskButtons = (props) => {
  const { type, value, className, disabled, handleClick } = props;
  return (
    <div className="text-center">
      <button
        disabled={disabled}
        type={type}
        className={className}
        onClick={handleClick}
      >
        {value}
      </button>
    </div>
  );
};
