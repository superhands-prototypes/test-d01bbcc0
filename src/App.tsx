export default function App() {
  return (
    <div className="app">
      {/* Onboarding arrows */}
      <div className="onboarding-arrows">
        <div className="arrow-container">
          <span className="arrow-label">Go to your dashboard</span>
          <span className="arrow">↑</span>
        </div>

        <div className="arrow-container">
          <span className="arrow-label">Check at different device sizes</span>
          <span className="arrow">↑</span>
        </div>

        <div className="arrow-container">
          <span className="arrow-label">When you're ready to share click here</span>
          <span className="arrow">↑</span>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        <h1>You're ready to go</h1>
        <p>
          Start using agents in cursor to build your prototype.
          <br />
          Your live will update here.
        </p>
      </div>
    </div>
  )
}
