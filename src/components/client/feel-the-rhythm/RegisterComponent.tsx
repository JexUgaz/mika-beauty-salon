import EmailIcon from "../icons/EmailIcon";
import FacebookIcon from "../icons/FacebookIcon";
import GoogleIcon from "../icons/GoogleIcon";

interface FormButtonProps {
  iconClassName?: string;
  Icon: React.ComponentType<{ className: string }>;
  label: string;
}

const FormButtonLogin: React.FC<FormButtonProps> = ({
  Icon,
  label,
  iconClassName = "",
}) => (
  <button
    className="cursor-pointer bg-white border border-black px-5 py-1 md-height:py-2 flex items-center gap-x-2 rounded-xl w-full sm:w-auto 
               transition-transform duration-150 ease-in-out 
               hover:bg-gray-100 
               active:scale-[0.97] active:bg-gray-200 
               shadow-sm hover:shadow-md active:shadow-inner"
  >
    <Icon className={`size-7 ${iconClassName}`} />
    <p className="flex-1 text-sm">{label}</p>
  </button>
);

const RegisterComponent = () => {
  const textColor = `text-[#737373]`;
  return (
    <div className="relative h-full w-full p-5 flex flex-col justify-center items-center gap-y-10 md-height:gap-y-20">
      <img
        alt=""
        className="absolute h-full w-full -z-1 sm:rounded-4xl"
        src="/images/backgrounds/white-bg-vertical.webp"
      ></img>
      <h1 className="text-3xl md-height:text-4xl text-center font-semibold">
        Registrate en
        <br />
        <span className="uppercase font-extrabold">Power Hells</span>
      </h1>

      <div className="flex flex-col justify-center items-center gap-y-4 md-height:gap-y-10">
        <div className={`md-height:w-[70%] flex justify-center relative`}>
          <p
            className={`absolute left-2 top-1/2 -translate-y-1/2 ${textColor} text-base`}
          >
            PE +51
          </p>
          <input
            className={`bg-[#efeae4] p-2 ps-20 w-full rounded-lg placeholder:${textColor} placeholder:text-base`}
            type="text"
            placeholder="Número de telefono"
          />
        </div>
        <button
          className={`md-height:w-[70%] cursor-pointer font-bold transition-all duration-300 h-10 bg-mika-primary text-white hover:opacity-80 px-4 rounded`}
        >
          Continuar
        </button>

        <span
          className={`relative w-[80%] inline-flex items-center justify-center ${textColor}`}
        >
          <span
            className={`before:flex-1 before:h-px before:bg-[#737373] before:mr-4 after:flex-1 after:h-px after:bg-[#737373] after:ml-4 flex w-full items-center`}
          >
            o
          </span>
        </span>
        <div className="w-[80%] md-height:w-[70%] flex flex-wrap justify-center gap-3">
          <FormButtonLogin Icon={EmailIcon} label="Email" />
          <FormButtonLogin
            iconClassName="text-[#0866FF]"
            Icon={FacebookIcon}
            label="Facebook"
          />
          <FormButtonLogin Icon={GoogleIcon} label="Google" />
        </div>
      </div>

      <div className="absolute w-full bottom-0 h-15 bg-[#efeae4] sm:rounded-b-4xl flex justify-center items-center gap-x-2">
        <p className={`${textColor} font-bold`}>¿Ya tienes cuenta?</p>
        <a
          href="#"
          className="text-mika-primary px-1 py-0.5 rounded transition-all duration-150 
             hover:underline 
             active:bg-mika-primary/50 active:text-white
             focus:outline-none"
        >
          Inicia sesión
        </a>
      </div>
    </div>
  );
};

export default RegisterComponent;
