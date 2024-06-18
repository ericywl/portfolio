<script lang="ts">
    import { base } from "$app/paths";
    import { myLinkedin } from "../data/links";
    import { type Tab } from "../data/models";

    export let scrollY: number;

    let tabs: Tab[] = [
        {
            name: "Projects",
            link: "#projects",
            external: false,
        },
        {
            name: "About Me",
            link: "#about",
            external: false,
        },
        {
            name: "Resume",
            link: base + "/ericywl_resume.pdf",
            external: true,
        },
    ];

    let showDropdown: boolean = false;
    function closeDropdown(e: Event) {
        showDropdown = false;
        e.stopPropagation();
    }

    function toggleShowDropdown(e: Event) {
        showDropdown = !showDropdown;
        e.stopPropagation();
    }
</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " +
        (scrollY > 0
            ? "py-4 bg-slate-950 border-violet-950"
            : "py-6 bg-transparent border-transparent")}
>
    <div class="flex">
        <div class="max-sm:block hidden">
            <button
                on:click={toggleShowDropdown}
                class="pr-4 focus:outline-none focus:border-white"
            >
                <i class="fa-solid fa-bars" />
            </button>
            <div
                class={"absolute z-10 border border-violet-700 mt-6 -ml-6 px-2 rounded-md py-2 w-full " +
                    "blue-shadow bg-opacity-65 bg-violet-950 duration-300 transition-all overflow-hidden " +
                    (showDropdown ? "max-h-40" : "max-h-0 invisible")}
            >
                {#each tabs as tab}
                    {#if tab.external}
                        <a
                            href={tab.link}
                            target="_blank"
                            class="block px-4 py-2"
                        >
                            <p>{tab.name}</p>
                        </a>
                    {:else}
                        <a href={tab.link} class="block px-4 py-2">
                            <p>{tab.name}</p>
                        </a>
                    {/if}
                {/each}
            </div>
        </div>
        <a href={base} class="hover:text-violet-400 hover:animate-pulse">
            <h1 class="font-medium">
                <b class="font-bold poppins">Eric</b> Yap
            </h1>
        </a>
    </div>
    <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        {#each tabs as tab}
            {#if tab.external}
                <a
                    href={tab.link}
                    target="_blank"
                    class="duration-200 hover:text-violet-400"
                >
                    <p>{tab.name}</p>
                </a>
            {:else}
                <a href={tab.link} class="duration-200 hover:text-violet-400">
                    <p>{tab.name}</p>
                </a>
            {/if}
        {/each}
    </div>
    <a
        href={myLinkedin}
        target="_blank"
        class="blue-shadow relative overflow-hidden px-5 py-2 group rounded-full
        bg-white text-slate-950"
    >
        <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get In Touch</h4>
    </a>
</header>

<svelte:window on:click={closeDropdown} on:scroll={closeDropdown} />
