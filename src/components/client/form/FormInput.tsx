interface Props {
  id: string;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "number";
  className?: string;
  required?: boolean;
  msgError?: string;
}

const FormInput: React.FC<Props> = ({
  id,
  label,
  placeholder = "",
  type = "text",
  className = "",
  msgError = `Por favor completa el campo "${label}".`,
  required = false,
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label
        htmlFor={id}
        className="text-sm font-semibold text-gray-700 tracking-wide
      2xl:text-base"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        onInvalid={(e: React.FormEvent<HTMLInputElement>) =>
          e.currentTarget.setCustomValidity(msgError ?? "")
        }
        onInput={(e: React.FormEvent<HTMLInputElement>) => {
          e.currentTarget.setCustomValidity("");
        }}
        className="w-full border-red-500 rounded-md shadow-lg px-2 py-1 border-1 text-sm
    focus:outline-none focus:ring-2 focus:ring-red-400 placeholder:italic placeholder:text-sm
    md:px-3 md:border-2
    2xl:py-2 2xl:px-4 2xl:placeholder:text-md 2xl:text-base"
      />
    </div>
  );
};

export default FormInput;
