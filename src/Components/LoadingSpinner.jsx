const LoadingSpinner = () => {
    return (
        <div className="text-center">
            <div className="spinner-border spinner" role="status" style={{ width: "3rem", height: "3rem" }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        
    );
};
export default LoadingSpinner;
