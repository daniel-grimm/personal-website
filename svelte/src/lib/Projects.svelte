<div class="projectList">
  <h1>Projects</h1>
  <h2>Cloud Foundation</h2>
  <p>
    We created an ASP.NET Core MVC API to support a code modernization and cloud
    migration effort with the client.
  </p>
  <p>
    We also stood up Azure APIM with token fetching policies, to integrate with
    3rdp-party APIs. Additionally, I created GitLab CI / CD pipelines
    repositories.
  </p>
  <h2>Document Messaging</h2>
  <p>
    As a part of a general cloud migration effort, we rewrote a document
    messaging system into C# Azure Functions.
  </p>
  <p>
    The functions read in XML or delimited files, transform to the end system
    specification, then output to a blob container to be ingested by the
    destination service.
  </p>
  <h2>Pest Monitoring Portal</h2>
  <p>
    An agricultural company wanted a web portal to monitor pest counts in trap
    over time in customer's fields and farms.
  </p>
  <p>
    We created a portal in Next.JS that supports SSO. I helped write the signup
    and login screens, as well as the authentication integration. I also helped
    stand up the Azure infrastructure, and CI / CD pipeline that deployed the
    our website as a Docker container.
  </p>
</div>

<style>
  .projectList {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    text-align: center;
  }
</style>
