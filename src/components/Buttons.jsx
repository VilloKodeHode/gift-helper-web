export default function GiftHelperButton({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`flex md:px-16 md:m-4 m-1 font-semibold shadow-md md:h-16 w-fit text-JWC-white font-Roboto shadow-JWC-tertiary btn-ghost btn bg-gradient-to-r from-JWC-primary to-JWC-secondary rounded-3xl ${className}`}
    >
      <>{children}</>
    </button>
  );
}

export function GiftHelperSearchButton({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`flex px-8 m-4 font-semibold shadow-md h-8 w-fit text-JWC-white font-Roboto shadow-JWC-primary btn-ghost btn bg-gradient-to-r to-JWC-tertiary from-JWC-secondary rounded-3xl ${className}`}
    >
      <>{children}</>
    </button>
  );
}

export function GiftHelperResetButton({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`flex px-16 font-semibold shadow-md h-16 w-fit text-JWC-white font-Roboto shadow-JWC-tertiary btn-ghost btn bg-gradient-to-r from-JWC-primary to-JWC-secondary rounded-3xl ${className}`}
    >
      <>{children}</>
    </button>
  );
}
