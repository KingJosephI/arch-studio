import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import welcomeImage from '../images/home/desktop/image-welcome.jpg';
import delsolImage from '../images/portfolio/desktop/image-del-sol.jpg';
import prototypeImage from '../images/portfolio/desktop/image-prototype.jpg';
import tower228bImage from '../images/portfolio/desktop/image-228b.jpg';
import { Layout } from '../common';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="hero__slide first">
          <h1 className="hero__title">Project Paramour</h1>
          <p className="hero__description">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
          <a className="hero__button" href="#!">
            See Our Portfolio
          </a>
        </div>
        <div className="hero__slide second">
          <h1 className="hero__title">Seraph Station</h1>
          <p className="hero__description">
            The Seraph Station project challenged us to design a unique station
            that would transport people through time. The result is a fresh and
            futuristic model inspired by space stations.
          </p>
          <a className="hero__button" href="#!">
            See Our Portfolio
          </a>
        </div>

        <div className="hero__slide third">
          <h1 className="hero__title">Federal II Tower</h1>
          <p className="hero__description">
            A sequel theme project for a tower originally built in the 1800s. We
            achieved this with a striking look of brutal minimalism with modern
            touches.
          </p>
          <a className="hero__button" href="#!">
            See Our Portfolio
          </a>
        </div>

        <div className="hero__slide second">
          <h1 className="hero__title">Trinity Bank Tower</h1>
          <p className="hero__description">
            Trinity Bank challenged us to make a concept for a 84 story building
            located in the middle of a city with a high earthquake frequency.
            For this project we used curves to blend design and stability to
            meet our objectives.
          </p>
          <a className="hero__button" href="#!">
            See Our Portfolio
          </a>
        </div>

        <ul className="hero__numbers">
          <li className="hero__number">01</li>
          <li className="hero__number">02</li>
          <li className="hero__number">03</li>
          <li className="hero__number">04</li>
        </ul>
      </section>
      <section>
        <strong>Welcome</strong>
        <div>
          <h1>Welcome to Arch Studio</h1>
          <p>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p>
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p>
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <img src={welcomeImage} alt="Welcome illustration" />
      </section>
      <section>
        <h2>Small team, big ideas</h2>
        <Link to="/about">About Us</Link>
      </section>
      <section>
        <h1>Featured</h1>
        <Link to="/portfolio">See all</Link>

        <section>
          <article>
            <picture>
              <source />
              <source />
              <img src={delsolImage} alt="" />
            </picture>
            <strong>1</strong>
            <div>
              <h2>Project Del Sol</h2>
              <Link to="/portfolio">View All Projects</Link>
            </div>
          </article>

          <article>
            <picture>
              <source />
              <source />
              <img src={tower228bImage} alt="" />
            </picture>
            <strong>2</strong>
            <div>
              <h2>228B Tower</h2>
              <Link to="/portfolio">View All Projects</Link>
            </div>
          </article>

          <article>
            <picture>
              <source />
              <source />
              <img src={prototypeImage} alt="" />
            </picture>
            <div>
              <strong>3</strong>
              <div>
                <h2>Le Prototype</h2>
                <Link to="/portfolio">View All Projects</Link>
              </div>
            </div>
          </article>
        </section>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
