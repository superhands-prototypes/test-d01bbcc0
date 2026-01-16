export default function App() {
  return (
    <div className="app">
      {/* Onboarding arrows */}
      <div className="onboarding-arrows">
        <div className="arrow-container arrow-left">
          <div className="arrow-label">Go to your dashboard</div>
          <div className="arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
        </div>

        <div className="arrow-container arrow-center">
          <div className="arrow-label">Check at different device sizes</div>
          <div className="arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
        </div>

        <div className="arrow-container arrow-right">
          <div className="arrow-label">When you're ready to share click here</div>
          <div className="arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="content-wrapper">
          <h1>You're ready to go</h1>
          <p>
            Start using agents in cursor to build your prototype.
            <br />
            Your live will update here.
          </p>
        </div>
      </div>
    </div>
  )
}
