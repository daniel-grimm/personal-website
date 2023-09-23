<script lang="ts">
  import Counter from './lib/Counter.svelte';
  import Experience from './lib/Experience.svelte';
  import Links from './lib/Links.svelte';
  import { isExperience, isHome } from './store/pageStore';
  import { EXPERIENCE } from './utils/pageConstants';
  import { togglePage } from './utils/togglePage';
</script>
<main>
  {#if $isHome}
    <Experience />
  {/if}

  {#if $isExperience}
    <Counter />
  {/if}

  <button on:click={() => togglePage(EXPERIENCE)}>Toggle</button>

  <Links />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>