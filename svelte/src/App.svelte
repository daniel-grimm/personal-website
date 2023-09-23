<script lang="ts">
  import Counter from './lib/Counter.svelte';
import Experience from './lib/Experience.svelte';
  import { writable, type Writable } from 'svelte/store';

  const isHome: Writable<boolean> = writable(true);
  const isExperience: Writable<boolean> = writable(false);

  function toggle() {
    isHome.set(!$isHome);
    isExperience.set(!$isExperience);
    console.log($isHome, $isExperience);
  }
</script>

<main>
  {#if $isHome}
    <Experience />
  {/if}

  {#if $isExperience}
    <Counter />
  {/if}

  <button on:click={toggle}>Toggle</button>
</main>
