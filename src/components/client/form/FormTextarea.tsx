interface Props {
  id: string;
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  msgError?: string;
}

const FormTextArea: React.FC<Props> = ({
  id,
  label,
  placeholder = "",
  className = "",
  required = false,
  msgError = `Por favor completa el campo "${label}".`,
}) => (
  <div className={`flex flex-col gap-1 ${className}`}>
    <label
      htmlFor={id}
      className="text-sm font-semibold text-gray-700 tracking-wide 2xl:text-base"
    >
      {label}
    </label>
    <textarea
      id={id}
      placeholder={placeholder}
      required={required}
      onInvalid={(e: React.FormEvent<HTMLTextAreaElement>) =>
        e.currentTarget.setCustomValidity(msgError ?? "")
      }
      onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
        e.currentTarget.setCustomValidity("");
      }}
      className="w-full px-2 py-2 border-1 border-red-500 rounded-md shadow-lg resize-none min-h-[80px] text-sm
    focus:outline-none focus:ring-2 focus:ring-red-400 placeholder:italic placeholder:text-sm
    md:border-2 md:px-3
    2xl:min-h-[120px] 2xl:text-base 2xl:placeholder:text-md 2xl:px-4"
    ></textarea>
  </div>
);

export default FormTextArea;
