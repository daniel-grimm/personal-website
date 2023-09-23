<script lang="ts">
  import Experience from './lib/Experience.svelte';
  import Home from './lib/Home.svelte';
  import Links from './lib/Links.svelte';
  import Navigation from './lib/Navigation.svelte';
  import { isExperience, isHome } from './store/pageStore';
</script>
<main>
  {#if $isHome}
    <Home />
  {/if}

  {#if $isExperience}
    <Experience />
  {/if}

  <Navigation />
  <Links />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>