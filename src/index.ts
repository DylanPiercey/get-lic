// Better global support (for web/service workers)≥
import { get as getWindow } from "get-win";

/**
 * Finds the location object, checking for polyfill and falling back to empty object.
 */
export function get(): { href: string; [x: string]: string } {
  const window = getWindow();
  return (
    (window.history && (window.history as any).location) ||
    window.location || { href: "" }
  );
}
