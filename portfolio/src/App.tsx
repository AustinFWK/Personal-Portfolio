import "./index.css";

function App() {
  return (
    <>
      <div>
        <h1>About me</h1>
        <p>
          Hi! I'm Austin Winger-Kailer, nice to meet you! I'm a full stack web
          developer with a passion for innovation and solving problems through
          the means of software.
        </p>
      </div>
      <div>
        <h1>Experience</h1>
        <p>
          I am currently a full stack Software Engineer at{" "}
          <a href="https://www.youngstown.dev/" target="_blank">
            DevYoungstown
          </a>{" "}
          where I specialize in developing and maintaining Web App MVPs for our
          clients!
        </p>
        <h2>Undergraduate Research</h2>
        <p>
          I was fortunate to be part of my universities undergraduate Data
          Science reseach program, where we teamed up with executives from
          Fortune500 company TA to develop a software solution to their online
          review crisis. We engineered a full stack web app that allowed TA to
          upload csv files of their online customer reviews, which we then
          analyzed using the Ollama AI model mistral. This analysis provided an
          oversight of the performance of each selected district/site, allowing
          for targeted improvements and strategies to enhance customer
          satisfaction.
        </p>
      </div>
      <div>
        <h1>Projects</h1>
        <h2>Habit Tracker (WIP)</h2>
        <p>
          I'm currently developing a web app that will allow users to insert
          their daily habits, which will provide insight as to why they may be
          feeling a certain way. The app will also provide positive habits that
          the user can work on developing within themselves, as well as research
          driven instructions on how to develop these habits. There will also be
          a calendar system that allows for users to view past logs and see how
          their habits have affected their mood over time.
        </p>
        <h2>Valorant Patchnotes Bot</h2>
        <p>
          I developed a discord bot that webscrapes the Valorant patchnotes page
          and posts them in a designated discord channel whenever a new patch is
          released.
        </p>
        <h2></h2>
      </div>
      <div>
        <h1>Contact</h1>
      </div>
    </>
  );
}

export default App;
