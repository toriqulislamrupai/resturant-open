import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  const renderContent = () => {
    switch (activeTab) {
      case "Experience":
        return (
          <div>
            <h3 className="text-2xl font-semibold mb-2">Experience</h3>
            <p>
              Exceptional culinary experience and delicious food. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus.
            </p>
          </div>
        );
      case "Market":
        return (
          <div>
            <h3 className="text-2xl font-semibold mb-2">Market</h3>
            <p>
              Fresh ingredients and unique finds. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        );
      case "Contact":
        return (
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contact</h3>
            <p>
              Get in touch with us for inquiries or reservations. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">About</h2>
      <div className="tabs tabs-boxed flex justify-center mb-6">
        <button
          className={`tab ${activeTab === "Experience" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Experience")}
        >
          Experience
        </button>
        <button
          className={`tab ${activeTab === "Market" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Market")}
        >
          Market
        </button>
        <button
          className={`tab ${activeTab === "Contact" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Contact")}
        >
          Contact
        </button>
      </div>
      <div className="mt-6 text-center">{renderContent()}</div>
    </section>
  );
};

export default About;
