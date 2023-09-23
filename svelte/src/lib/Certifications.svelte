<script lang="ts">
  import azureSolutionsArchitect from "../assets/azuresolutionsarchitect.png";
  import azureDevOpsEngineer from "../assets/azuredevopsexpert.png";
  import azureAdministrator from "../assets/azureadministratorassociate.png";
  import awsCloudPractitioner from "../assets/awscloudpractitioner.png";
  import azureDataFundamentals from "../assets/azuredatafundamentals.png";
  import azureFundamentals from "../assets/azurefundamentals.png";

  const width: string = "150px";
  const height: string = "150px";
</script>

<div class="certificationList">
  <div class="certification">
    <h2>Azure Solutions Architect - Expert</h2>
    <img
      src={azureSolutionsArchitect}
      alt="Azure Solutions Architect"
      {width}
      {height}
    />
  </div>
  <div class="certification">
    <h2>Azure DevOps Engineer - Expert</h2>
    <img
      src={azureDevOpsEngineer}
      alt="Azure DevOps Engineer"
      {width}
      {height}
    />
  </div>
  <div class="certification">
    <h2>Azure Administrator - Associate</h2>
    <img src={azureAdministrator} alt="Azure Administrator" {width} {height} />
  </div>
  <div class="certification">
    <h2>AWS Certified Cloud Practitioner</h2>
    <img
      src={awsCloudPractitioner}
      alt="AWS Certified Cloud Practitioner"
      {width}
      {height}
    />
  </div>
  <div class="certification">
    <h2>Azure Data Fundamentals</h2>
    <img
      src={azureDataFundamentals}
      alt="Azure Data Fundamentals"
      {width}
      {height}
    />
  </div>
  <div class="certification">
    <h2>Azure Fundamentals</h2>
    <img src={azureFundamentals} alt="Azure Fundamentals" {width} {height} />
  </div>
</div>

<style>
  .certificationList {
    display: flex;
    flex-direction: column;
  }

  .certification {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
