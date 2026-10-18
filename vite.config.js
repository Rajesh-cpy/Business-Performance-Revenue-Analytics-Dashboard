import { defineConfig } from "vite";

const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isUserOrOrganizationSite = repositoryName === `${repositoryOwner}.github.io`;
const base = repositoryName
  ? isUserOrOrganizationSite
    ? "/"
    : `/${repositoryName}/`
  : "/";

export default defineConfig({ base });
