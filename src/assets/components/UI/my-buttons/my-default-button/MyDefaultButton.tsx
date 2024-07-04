type MyDefaultButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: string;
}

function MyDefaultButton({ children, className, type }: MyDefaultButtonProps) {
  return (
    <button
      type={type ? 'submit' : 'button'}
      className={`px-4 py-2 bg-[#D83933] text-white font-semibold rounded hover:bg-[#ca3f3a] duration-200 ${className}`}>
      {children}
    </button>
  )
}

export default MyDefaultButton