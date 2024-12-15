export default function Button({ className, onClick, disabled, children }) {
	return (
	  <button
		className={`btn ${className}`}
		onClick={onClick}
		disabled={disabled}
	  >
		  {children}
	  </button>
	);
}
