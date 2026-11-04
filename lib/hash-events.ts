// O roteador do Next troca o hash com history.pushState/replaceState, que não disparam
// "hashchange". Este módulo passa a disparar o evento sempre que o hash muda por essas APIs,
// para que filtros e abas que leem o hash acompanhem cliques em <Link href="/colecao#tema">.

let installed = false;

function wrap(method: "pushState" | "replaceState") {
  const original = window.history[method];
  window.history[method] = function patched(this: History, ...args: Parameters<History["pushState"]>) {
    const before = window.location.hash;
    const result = original.apply(this, args);
    if (window.location.hash !== before) window.dispatchEvent(new HashChangeEvent("hashchange"));
    return result;
  } as History["pushState"];
}

export function ensureHashEvents() {
  if (installed || typeof window === "undefined") return;
  installed = true;
  wrap("pushState");
  wrap("replaceState");
}

export function subscribeHash(notify: () => void) {
  ensureHashEvents();
  window.addEventListener("hashchange", notify);
  window.addEventListener("popstate", notify);
  return () => {
    window.removeEventListener("hashchange", notify);
    window.removeEventListener("popstate", notify);
  };
}

export const readHash = () => decodeURIComponent(window.location.hash.slice(1));
