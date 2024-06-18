<script lang="ts">
    import { onMount } from "svelte";
    import Card from "./Card.svelte";
    import { projects, benefits, work } from "../data/portfolio";
    import { myGithub } from "$lib/data/links";

    async function sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    let words: string[] = ["Engineer.", "Developer.", "Architect."];
    let currentWord: string;
    let wordIdx: number = 0;
    let letterIdx: number = 0;
    let isDeleting: boolean = false;

    async function typing() {
        currentWord = words[wordIdx];
        let element = document.getElementById("typewriter");
        if (element === null) {
            return;
        }

        if (isDeleting) {
            element.textContent = currentWord.substring(0, letterIdx - 1);
            letterIdx--;
            if (letterIdx == 0) {
                isDeleting = false;
                wordIdx++;
                if (wordIdx == words.length) {
                    wordIdx = 0;
                }
            }
            setTimeout(typing, 100);
        } else {
            element.textContent = currentWord.substring(0, letterIdx + 1);
            letterIdx++;
            if (letterIdx == currentWord.length) {
                isDeleting = true;
                await sleep(2000);
            }
            setTimeout(typing, 150);
        }
    }

    onMount(() => {
        typing();
    });
</script>

<main class="flex flex-col flex-1 p-4 pl-10 pr-10 lg:pl-20 lg:pr-20">
    <section
        id="intro-page"
        class="grid grid-cols-1 lg:grid-cols-5 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 lg:col-span-3"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Eric</span> Yap,
                <br />
                Backend Software <br />
                <span id="typewriter" class="poppins text-violet-400"></span>
                <span class="animate-blink">|</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400">favorite tech</span> includes
                Software Development (particularly in
                <span class="italic">Rust</span>
                & <span class="italic">Go</span>), Cryptography and more.
            </p>
        </div>
        <div class="relative shadow-2xl grid place-items-center lg:col-span-2">
            <img
                src={"images/profile.png"}
                alt="Eric Yap"
                class="object-cover z-[2] max-h-[70vh]"
            />
        </div>
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-violet-400">see</span> my work?
            </h3>
        </div>
        <a
            href={myGithub}
            target="_blank"
            class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10
            hover:border-violet-700 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent
            hover:from-violet-300 hover:via-violet-600 hover:to-violet-300 hover:animate-text duration-200"
        >
            <i class="fa-brands fa-github"></i>
            <p>Head to GitHub</p>
        </a>
        <div class="grid grid-cols-1 gap-12 lg:gap-10 -mb-12">
            <Card project={work} />
        </div>
        <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-10 lg:gap-y-14"
        >
            {#each projects as project}
                <Card {project} />
            {/each}
        </div>
    </section>

    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative py-4
            before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
            after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700"
        >
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>

        <p class="poppins text-violet-400 mx-auto">
            So what are you waiting for?
        </p>
    </section>
</main>
