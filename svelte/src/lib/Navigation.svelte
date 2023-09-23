<script>
  import { EXPERIENCE } from "../utils/pageConstants";
  import { togglePage } from "../utils/togglePage";
</script>

<div>
    <button on:click={() => togglePage(EXPERIENCE)}>Toggle 2</button>
    <button on:click={() => togglePage(EXPERIENCE)}>Toggle 3</button>
</div>