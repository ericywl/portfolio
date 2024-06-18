import { type Project, type Benefit } from "./models";
import { myGithub } from "./links";

export let work: Project = {
    name: "Shopee (Order Payment)",
    icon: "fa-solid fa-cart-shopping",
    text: "Architecting services to handle Shopee's very large-scale order payments and refunds. " +
        "If you have purchased from Shopee in the past few years, chances are your request was handled by services developed by my team and I 😁.",
    tech_stack: "Go, MySQL, Kafka, Redis, ElasticSearch",
}

export let projects: Project[] = [
    {
        name: "Zero2Prod Newsletter",
        icon: "fa-solid fa-envelope",
        text: "Email newsletter publishing and subscription, deployed on DigitalOcean.",
        tech_stack: "Rust, Axum, PostgreSQL",
        link: myGithub + "/zero2prod",
    },
    {
        name: "NVIDIA AIRA",
        icon: "fa-solid fa-brain",
        text: "Data processing for AI Research Assistant prototype that provides research article searching and summarization, in collaboration with NVAITC.",
        tech_stack: "Python, Django",
    },
    {
        name: "Photon Ray Tracer",
        icon: "fa-solid fa-lightbulb",
        text: "Offline ray tracing with photon mapping using indirect illumination in Computer Graphics.",
        tech_stack: "C++ 11",
        link: myGithub + "/photon-rt",
    },
    {
        name: "Archwing",
        icon: "fa-solid fa-plane",
        text: "Dummy Ethereum dApp that manages flight delay insurance for travellers.",
        tech_stack: "Solidity, Truffle, Ganache",
        link: "https://github.com/causztic/archwing",
    },
];

export let benefits: Benefit[] = [
    {
        name: "A curious developer",
        description:
            "I deeply enjoy problem solving and am curious about how things work under-the-hood, especially the tools I use in my craft. " +
            "This curiosity has helped me identify bottlenecks and optimizations in my work that helped greatly improve the end users' experience.",
    },
    {
        name: "A detail-oriented individual",
        description:
            "From documentation to discussions, I am always attentive to the details of each task I perform. " +
            "I am organized and observant in my work, and have received praise for my detail-oriented skills from my managers.",
    },
    {
        name: "A great communicator",
        description:
            "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. " +
            "This helps me develop deep relationships and ensures my effectiveness and productivity in any workspace with any team.",
    },
];