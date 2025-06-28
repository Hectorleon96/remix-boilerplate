type ErrorTemplateProps = {
  message: string;
  children?: React.ReactNode;
};

export function ErrorTemplate({ message, children }: ErrorTemplateProps) {
  return (
    <div
      className={`
        w-full 
        h-52 
        flex
        flex-col 
        items-center 
        justify-center 
        bg-red-300 
        border-2 
        border-red-500 
        rounded-lg
      `}
    >
      <p className="text-red-500">{message}</p>

      <div className="mt-4">{children}</div>
    </div>
  );
}
