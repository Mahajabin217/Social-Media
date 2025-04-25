const WelcomeMsg = ({onGetPostClicked}) => {
    return (
        <center className="welcome-msg">
            <h2>No posts are available</h2>
            <button type="button" className="btn btn-primary" onClick={onGetPostClicked}>Get Posts From Server</button>
        </center>
    );
};
export default WelcomeMsg;