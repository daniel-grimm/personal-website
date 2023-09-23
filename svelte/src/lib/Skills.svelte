<script lang="ts">
  import cSharp from "../assets/csharp.png";
  import react from "../assets/react.png";
  import svelte from "../assets/svelte.png";
  import azure from "../assets/azure.png";
  import sql from "../assets/sql.png";
  import terraform from "../assets/terraform.png";

  const height: string = "75px";
</script>

<div class="skillList">
  <h1>Skills</h1>
  <div class="group">
    <div class="skill">
      <h2>C#</h2>
      <img src={cSharp} alt="C#" {height} />
    </div>
    <div class="skill">
      <h2>React</h2>
      <img src={react} alt="React" {height} />
    </div>
  </div>
  <div class="group">
    <div class="skill">
      <h2>Svelte</h2>
      <img src={svelte} alt="Svelte" {height} />
    </div>
    <div class="skill">
      <h2>Azure</h2>
      <img src={azure} alt="Azure" {height} />
    </div>
  </div>
  <div class="group">
    <div class="skill">
      <h2>SQL</h2>
      <img src={sql} alt="SQL" {height} />
    </div>
    <div class="skill">
      <h2>Terraform</h2>
      <img src={terraform} alt="Terraform" {height} />
    </div>
  </div>
</div>

<style>
  .skillList {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .group {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
