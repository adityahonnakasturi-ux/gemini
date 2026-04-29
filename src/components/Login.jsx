import { useState } from "react";
import toast from "react-hot-toast";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const VALID_USER = "admin";
    const VALID_PASS = "admin123";

    if (username === VALID_USER && password === VALID_PASS) {
      toast.success("Welcome back, Admin!");
      onLogin();
    } else {
      toast.error("Invalid credentials. Try again.");
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/gps-cs-s/APNQkAGziluWSH4WvZEYTovyCTOgigmuazdOT58eHZMuEPYIR9aSLSE3cvus8jZ61RyqP8Aw5gv8Iwq3pyjiodySJkYiYsy8zVoaRLkOwJfAklC-dI1_TCc_pLTPlDHZAgnd9pz26i8YYg=s1360-w1360-h1020-rw')",
      }}
    >
      <div className="glass-card">
        {/* Logo + Title */}
        <div className="logo-section">
          <div className="logo-box">TT</div>
          <h2>AI TimeTable</h2>
          <p>ISE Department Portal</p>
        </div>

        {/* Form */}
        <div className="form-box">
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group" style={{ marginTop: "15px" }}>
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">Login to Dashboard</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
