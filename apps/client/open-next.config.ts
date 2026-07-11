import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import kvCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: kvCache,
});
