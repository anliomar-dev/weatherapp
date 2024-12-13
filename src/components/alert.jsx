function Alert({darkMode, message}) {
	return (
	  <div role="alert"
	       className={`alert flex justify-center p-5 mt-6 
		       ${darkMode ? 'text-dark-foreground bg-dark-input' : 'text-foreground bg-card'}`
	       }
	  >
		  <span className="text-xl">{message}</span>
	  </div>
	);
}

export default Alert;