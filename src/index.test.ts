import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { UnstableDevWorker } from "wrangler";
import { unstable_dev } from "wrangler";

describe("Worker", () => {
  let worker: UnstableDevWorker;

  beforeAll(async () => {
    worker = await unstable_dev("src/index.ts", {
      experimental: { disableExperimentalWarning: true },
    });
  });

  afterAll(async () => {
    await worker.stop();
  });

  it("tests worker", async () => {
    const { status, url, redirected } = await worker.fetch();
    expect(status).toBe(200);
    expect(url).toBe("https://twitter.com/cloudflare");
    expect(redirected).toBe(true);
  });
});
