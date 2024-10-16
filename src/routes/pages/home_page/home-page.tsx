import { Link } from "react-router-dom";
import "./home-page.scss";

const HomePage = () => {
  return (
    <main className="home-page">
      <section className="left">
        <div>
          <h2>About</h2>
          Musicoach aims to help coach your guitar journey with tips and tricks
          from our AI, as well as a general knowledge base of some basic guitar
          information. Read more below!
        </div>
      </section>
      <section className="right">
        <div>
          <h2>Get started!</h2>
          If you are a total beginner we have a step by step guide going through
          everything from picking out your first guitar to playing your first
          song!
          <Link to="/step-by-step">
            <button type="button">Go!</button>
          </Link>
        </div>
      </section>
      <section className="left">
        <div>
          <h2>Gotten stuck?</h2>
          Need help with what to do next? Ask your AI Coach for training
          exercises, songs, riffs and licks that fit your skill level, or just
          general tips and tricks.
          <Link to="/coach">
            <button type="button">Rock on!</button>
          </Link>
        </div>
      </section>
      <section className="right">
        <div>
          <h2>What's this for?</h2>
          Are you wondering what all of your new shiny gear is used for? We have
          a page going through some of the more common pieces and how/what they
          are for.
          <Link to="/gear">
            <button type="button">Let's see</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
