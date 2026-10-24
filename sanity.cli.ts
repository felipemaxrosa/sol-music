import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: { projectId: "f54ub0s9", dataset: "production" },
  // Link do Studio hospedado: https://lojasolmusic.sanity.studio
  studioHost: "lojasolmusic",
  deployment: { appId: "r5lj0cwl7ditc9e680i3k6r5", autoUpdates: true },
});
