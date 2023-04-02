export default function GiftHelperButton({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`flex px-16 m-4 font-semibold shadow-md h-16 w-fit text-JWC-white font-Roboto shadow-JWC-tertiary btn-ghost btn bg-gradient-to-r from-JWC-primary to-JWC-secondary rounded-3xl ${className}`}
    >
      <>{children}</>
    </button>
  );
}
