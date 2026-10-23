import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: { projectId: "f54ub0s9", dataset: "production" },
  // Link do Studio hospedado: https://lojasolmusic.sanity.studio
  studioHost: "lojasolmusic",
  deployment: { autoUpdates: true },
});
