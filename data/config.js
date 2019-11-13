const li = "https://linkedin.com/in/ericywl"
const gh = "https://github.com/ericywl"

module.exports = {
  title: "Eric Yap",
  name: "Eric",
  handle: "ericywl",
  welcome: "Hello World",
  intro: "an aspiring Software Engineer",
  linkedin: li,
  github: gh,
  about: [
    {
      id: 0,
      text:
        "A Computer Science graduate from Singapore University of Technology & Design (SUTD), " +
        "looking for Software Engineering jobs.",
    },
    {
      id: 1,
      text:
        "I love exploring new tech, problem solving and learning about cybersecurity. " +
        "I'm also into Japanese culture and the language itself, " +
        "oh and electric guitar recently as well.",
    },
  ],
  socials: [
    {
      id: 0,
      name: "LinkedIn",
      link: li,
      icon: "/icons/linkedin.svg",
    },
    {
      id: 1,
      name: "GitHub",
      link: gh,
      icon: "/icons/github.svg",
    },
  ],
  projects: [
    {
      id: 0,
      name: "NVIDIA AIRA",
      description:
        "Artificial Intelligence Research Assistant prototype in collaboration with NVAITC",
      link: "",
      time: "Jan. 2019 - Aug. 2019",
    },
    {
      id: 1,
      name: "PhotonRT",
      description:
        "Offline ray tracing with photon mapping in Computer Graphics",
      link: "https://github.com/ericywl/ray-tracer",
      time: "Jul. 2019 - Aug. 2019",
    },
    {
      id: 2,
      name: "LANL Earthquake Prediction",
      description:
        "Forecast earthquakes based on laborary acoustic data with RNNs / CNNs",
      link: "https://github.com/ericywl/lanl-gui",
      time: "Apr. 2019 - May. 2019",
    },
    {
      id: 3,
      name: "PascalVOC Image Classification",
      description: "Classifying images in PascalVOC dataset with Deep Learning",
      link: "https://github.com/ericywl/lanl-pred",
      time: "Apr. 2019 - May. 2019",
    },
    {
      id: 4,
      name: "Archwing",
      description:
        "Dummy Ethereum distributed application for flight delay insurance",
      link: "https://github.com/causztic/archwing",
      time: "Oct. 2018 - Nov. 2018",
    },
    {
      id: 5,
      name: "PyTor Browser",
      description:
        "Demonstration of onion-routing in an Electron browser, backed by Python",
      link: "https://github.com/causztic/pytor-browser",
      time: "Oct. 2018 - Nov. 2018",
    },
    {
      id: 6,
      name: "Twitter POS Tagging",
      description: "Part-of-Speech tagging with HMMs written purely in Python",
      link: "https://github.com/ericywl/hmm-pos-tag",
      time: "Sep. 2018 - Oct. 2018",
    },
  ],
}
