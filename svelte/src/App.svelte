<script lang="ts">
  import Projects from "./lib/Projects.svelte";
  import Home from "./lib/Home.svelte";
  import Links from "./lib/Links.svelte";
  import Navigation from "./lib/Navigation.svelte";
  import { isProjects, isHome, isCertifications, isSkills } from "./store/pageStore";
  import Certifications from "./lib/Certifications.svelte";
  import Skills from "./lib/Skills.svelte";
</script>

<main>
  <Navigation />

  {#if $isHome}
    <Home />
  {/if}

  {#if $isProjects}
    <Projects />
  {/if}

  {#if $isCertifications}
    <Certifications />
  {/if}

  {#if $isSkills}
    <Skills />
  {/if}

  <Links />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
