import Navbar from "./Navbar";

function AboutUs() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-card">
          <h1>About Paradise Nursery</h1>

          <p>
            Paradise Nursery is an online plant shop dedicated to
            bringing beautiful and healthy plants closer to nature
            lovers.
          </p>

          <p>
            We offer a wide variety of indoor plants, succulents,
            and outdoor plants suitable for homes, offices, and
            gardens.
          </p>

          <p>
            Our goal is to make buying plants simple, convenient,
            and enjoyable while helping people create greener
            spaces.
          </p>

          <h2>Our Mission</h2>

          <p>
            Our mission is to encourage greener living by making
            quality plants accessible to everyone.
          </p>
        </section>
      </main>
    </>
  );
}

export default AboutUs;