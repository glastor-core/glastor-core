import { assertEquals, assertThrows } from "@std/assert";
import { initGlastorCore } from "../src/mod.ts";

Deno.test("initGlastorCore - successfully initializes with valid appId", () => {
  const status = initGlastorCore({ appId: "test-app" });
  assertEquals(status.healthy, true);
  assertEquals(status.activeWorkers, 0);
  assertEquals(typeof status.uptime, "number");
});

Deno.test("initGlastorCore - throws error when appId is empty", () => {
  assertThrows(
    () => {
      initGlastorCore({ appId: "" });
    },
    Error,
    "appId is required to initialize GLASTOR Core",
  );
});
