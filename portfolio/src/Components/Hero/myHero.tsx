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
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          padding: ".5rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            src="/headshot.jpg"
            alt="Hero Image"
            className="responsive-image"
          />
          <Socials />
        </div>
        <p>
          Austin Winger-Kailer
          <br /> Full Stack Web Developer <br /> Full time coffee shop enjoyer
        </p>
      </div>
    </div>
  );
}
