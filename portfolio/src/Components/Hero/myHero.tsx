import Socials from "./socials";

export default function MyHero() {
  return (
    <div
      id="hero"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1>Welcome to My Portfolio</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          padding: "1rem",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <img
          src="/headshot.jpg"
          alt="Hero Image"
          className="responsive-image"
        />
        <p>
          Hi! I'm Austin Winger-Kailer, a full stack web developer with a
          passion for innovation and solving problems through the means of
          software.
        </p>
      </div>
      <Socials />
    </div>
  );
}
