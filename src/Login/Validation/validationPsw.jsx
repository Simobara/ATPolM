const validatePassword = (password) => {
    // Logica di validazione della password
    // In questo esempio, la password deve avere almeno 6 caratteri
    return password.length >= 6;
};

const handleBlur = () => {
    setIsValid(validatePassword(password));
};

return (
    <div>
        <label>
            Password:
            <input
                type="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={!isValid ? 'invalid' : ''}
            />
        </label>
        {!isValid && <p className="error-message">La password deve avere almeno 6 caratteri!</p>}
    </div>
);
};