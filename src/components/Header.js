import ReactLogo from "./React_logo1.png"; // Import the image
function Header() {
  return (
    <header className="app-header">
      <img src={ReactLogo} alt="Reactlogo" />
      <h1>🚗 Preventive Maintenance Challenge 🚛</h1>
      <h6>Rev up your knowledge of PM schedules A, B, C, and D</h6>
    </header>
  );
}

export default Header;
