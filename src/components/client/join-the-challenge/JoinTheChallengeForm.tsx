import { useState } from "react";
import Form from "./Form";

interface Props {
  children?: React.ReactNode;
}

const JoinTheChallengeForm: React.FC<Props> = ({ children }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitted(true);
  };

  return <>{!submitted ? <Form handleSubmit={handleSubmit} /> : children}</>;
};

export default JoinTheChallengeForm;
