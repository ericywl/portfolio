<script lang="ts">
    import { type Project } from "../data/models";
    export let project: Project;
</script>

{#if project.link === undefined}
    <div
        class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center
        group hover:border-violet-400 duration-200"
    >
        <div
            class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
        >
            <i class={project.icon} />
        </div>
        <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
            {project.name}
        </h3>
        <p class="px-2">
            {project.text}
        </p>
        <p>
            <strong class="text-violet-400">{project.tech_stack}</strong>
        </p>
        <div class="flex-1 flex justify-betweeen gap-4 items-end">
            <div
                class="ml-auto py-1 px-2 rounded-md duration-200 relative overflow-hidden"
            >
                <p class="z-4 text-slate-300">Not Available</p>
            </div>
        </div>
    </div>
{:else}
    <a
        href={project.link}
        target="_blank"
        class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center
        cursor-pointer group hover:border-violet-400 duration-200"
    >
        <div
            class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
        >
            <i class={project.icon} />
        </div>
        <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
            {project.name}
        </h3>
        <p class="px-2">
            {project.text}
        </p>
        <p>
            <strong class="text-violet-400">{project.tech_stack}</strong>
        </p>
        <div class="flex-1 flex justify-betweeen gap-4 items-end">
            <div
                class="ml-auto py-1 px-2 rounded-md cursor-pointer hover:text-slate-950 duration-200 relative after:absolute
                after:top-0 after:right-full after:bg-violet-200 after:w-full after:h-full after:duration-200 after:z-[-1]
                hover:after:translate-x-full overflow-hidden"
            >
                <p class="z-4">Go to &rarr;</p>
            </div>
        </div>
    </a>
{/if}
