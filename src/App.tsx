export default function App() {
  return (
    <div className="app">
      {/* Onboarding callouts */}
      <div className="onboarding-callouts">
        <div className="callout">
          <span className="callout-title">Superhands Logo</span>
          <span className="callout-text">Go to your dashboard</span>
        </div>

        <div className="callout">
          <span className="callout-title">Device Dropdown</span>
          <span className="callout-text">Check at different device sizes</span>
        </div>

        <div className="callout">
          <span className="callout-title">Publish Button</span>
          <span className="callout-text">When you're ready to share click here</span>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        <h1>You're all set up</h1>
        <p>
          Start using agents in cursor to build your prototype.
          <br />
          Your live will update here.
        </p>
      </div>
    </div>
  )
}
