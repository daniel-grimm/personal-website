<script>
  import { EXPERIENCE } from "../utils/pageConstants";
  import { togglePage } from "../utils/togglePage";
</script>

<div>
    <button on:click={() => togglePage(EXPERIENCE)}>Home</button>
    <button on:click={() => togglePage(EXPERIENCE)}>Projects</button>
    <button on:click={() => togglePage(EXPERIENCE)}>Certifications</button>
    <button on:click={() => togglePage(EXPERIENCE)}>Skills</button>
</div>

<style>
    button {
        background: rgba(36, 36, 36, 0.3);
        border: none;
        transition: background-color 0.3s;
        transition: color 0.3s;
        padding: 1rem;
        margin: 1rem;
        font-family: 'Dosis', sans-serif;
    }

    button:hover {
        background-color: lightgray;
        color: black;
        border: 1px green;
        cursor: pointer;
    }
</style>
