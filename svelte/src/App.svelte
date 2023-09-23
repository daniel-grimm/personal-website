<script lang="ts">
  import Counter from './lib/Counter.svelte';
  import Experience from './lib/Experience.svelte';
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
</main>
