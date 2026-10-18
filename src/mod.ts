/**
 * @file src/mod.ts
 * @description Main entry point for GLASTOR® Core runtime.
 * @module @glastor/core
 * @license Apache-2.0
 */

/**
 * GLASTOR Core Engine configuration options.
 */
export interface GlastorConfig {
  /** Project or tenant identifier */
  appId: string;
  /** Maximum concurrent worker tasks */
  concurrencyLimit?: number;
  /** Enable debug telemetry logs */
  debug?: boolean;
}

/**
 * Kernel status representation.
 */
export interface KernelStatus {
  /** Operational health indicator */
  healthy: boolean;
  /** Active timestamp in ISO-8601 */
  uptime: number;
  /** Number of registered workers */
  activeWorkers: number;
}

/**
 * Initializes and starts the GLASTOR Core engine.
 *
 * @param config - Configuration options for the engine.
 * @returns Initialized kernel status descriptor.
 *
 * @example
 * ```ts
 * import { initGlastorCore } from "@glastor/core";
 *
 * const status = initGlastorCore({ appId: "glastor-edge", debug: true });
 * console.log(`Engine healthy: ${status.healthy}`);
 * ```
 */
export function initGlastorCore(config: GlastorConfig): KernelStatus {
  if (!config.appId) {
    throw new Error("appId is required to initialize GLASTOR Core");
  }

  return {
    healthy: true,
    uptime: Date.now(),
    activeWorkers: 0,
  };
}
