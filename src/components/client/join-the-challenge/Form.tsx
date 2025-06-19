import ArrowBoxedClientIcon from "@/components/client/icons/ArrowBoxedClientIcon";
import FormInput from "../form/FormInput";
import FormTextarea from "../form/FormTextarea";
import TouchIcon from "../icons/TouchIcon";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = ({ handleSubmit }) => (
  <>
    <div className="absolute bg-mika-primary bottom-0 left-1/2 -translate-x-1/2 w-full h-[15%] z-20 md:h-[25%]"></div>
    <div
      className="z-30 h-full flex justify-center items-start min-w-[80%] mt-20
      md:items-center md:mt-0 lg:min-w-[65%] xl:min-w-[50%]"
    >
      <div
        className="relative bg-white rounded-2xl w-full shadow-2xl
    px-5 pt-5 pb-2 flex flex-col justify-center items-center
    md:block md:px-8 md:pb-13 md:rounded-4xl
    2xl:px-10 2xl:pt-13 2xl:pb-20"
      >
        <div
          className="self-start mb-5 -translate-x-1 flex items-center justify-start
      md:absolute md:-top-15 md:left-0 md:translate-0 md:mb-0"
        >
          <ArrowBoxedClientIcon className="size-8 md:size-13" />
          <h2 className="font-extrabold text-mika-primary text-xl xl:text-nav-item">
            INSCRIPCIÓN
          </h2>
        </div>
        <form
          id="join-challenge-form"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-6 w-full"
        >
          <FormInput
            id="names"
            label="Nombres"
            placeholder="Ingresa tus nombres completos"
            required
            className="md:col-span-2"
            msgError="Por favor, ingresa tus nombres completos."
          />

          <FormInput
            id="lastnames"
            label="Apellidos"
            placeholder="Ingresa tus apellidos completos"
            required
            className="md:col-span-2"
            msgError="Por favor, ingresa tus apellidos completos."
          />

          <FormInput
            id="email"
            type="email"
            label="Correo electrónico"
            placeholder="correo@ejemplo.com"
            required
            msgError="Por favor, ingresa un correo electrónico válido."
          />

          <FormInput
            id="phone"
            type="text"
            label="Teléfono"
            placeholder="+51 999 999 999"
            required
            msgError="Por favor, ingresa un número de teléfono válido."
          />

          <FormTextarea
            id="motivacion"
            label="¿Por qué te gustaría participar de las clases?"
            placeholder="Cuéntanos tu motivación aquí..."
            required
            msgError="Por favor, cuéntanos tu motivación para participar."
            className="md:col-span-2"
          />
        </form>
        <button
          type="submit"
          form="join-challenge-form"
          className="flex justify-center items-center bg-mika-primary w-full
              border-2 border-white text-white font-extrabold
              rounded-4xl cursor-pointer transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-xl active:scale-95 text-sm mt-3
              md:py-2 md:mt-0 md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2
              md:min-w-[70%] md:w-auto 2xl:border-[3px] 2xl:py-5 2xl:text-xl"
        >
          QUIERO DAR MI PRIMER PASO
          <TouchIcon className="ms-2 rotate-320" />
        </button>
      </div>
    </div>
  </>
);

export default Form;
