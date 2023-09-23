<script>
  import {
    CERTIFICATIONS,
    HOME,
    PROJECTS,
    SKILLS,
  } from "../utils/pageConstants";
  import { togglePage } from "../utils/togglePage";
</script>

<div>
  <button on:click={() => togglePage(HOME)}>Home</button>
  <button on:click={() => togglePage(PROJECTS)}>Projects</button>
  <button on:click={() => togglePage(CERTIFICATIONS)}>Certifications</button>
  <button on:click={() => togglePage(SKILLS)}>Skills</button>
</div>

<style>
  div {
    position: sticky;
    top: 0;
    background-color: rgba(36, 36, 36, 0.9);
  }

  button {
    background: rgba(36, 36, 36, 0.3);
    border: none;
    transition: background-color 0.3s;
    transition: color 0.3s;
    padding: 1rem;
    margin: 1rem;
  }

  button:hover {
    background-color: lightgray;
    color: black;
    border: 1px green;
    cursor: pointer;
  }
</style>
