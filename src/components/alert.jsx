function Alert({darkMode, message}) {
	return (
	  <div role="alert"
	       className={`alert flex justify-center p-5 mt-6 bg-transparent backdrop-blur-lg shadow-lg
		       ${darkMode ? 'text-dark-foreground' : 'text-foreground'}`
	       }
	  >
		  <span className="text-xl">{message}</span>
	  </div>
	);
}

export default Alert;