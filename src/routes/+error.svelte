<script lang="ts">
    import { page } from "$app/stores";
</script>

<main class="flex flex-col flex-1 p-4 pl-10 pr-10 lg:pl-20 lg:pr-20">
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative justify-center place-items-center"
    >
        <h1 class="poppins text-violet-400 text-4xl sm:text-5xl md:text-6xl">
            {#if $page.error === null || $page.error === undefined}
                Something went wrong
            {:else}
                {$page.error?.message}
            {/if}
        </h1>
        <p class="text-xl sm:text-2xl md:text-3xl">
            {#if $page.status === 404}
                Looks like you took the wrong turn.
            {/if}
        </p>
    </section>
</main>
