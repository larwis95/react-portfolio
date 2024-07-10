interface InputProps {
  id: string;
  label: string;
  type: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  emailSuccess?: boolean;
}

export default function Input({
  id,
  label,
  type,
  name,
  onChange,
  onBlur,
  placeholder,
  emailSuccess,
}: InputProps): JSX.Element {
  return (
    <>
      <div className="flex w-full flex-col">
        <label htmlFor={name}>{label}</label>
        {type === "textarea" ? (
          <textarea
            id={id}
            name={name}
            onBlur={onBlur}
            placeholder={placeholder}
            className="w-full rounded-md p-2"
            disabled={emailSuccess}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className="w-full rounded-md p-2"
            disabled={emailSuccess}
          />
        )}
      </div>
    </>
  );
}
