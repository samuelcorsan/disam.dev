const button = document.querySelector<HTMLButtonElement>(".theme-slider")!;
const knob = button.querySelector<HTMLElement>(".theme-slider-knob")!;
const root = document.documentElement;
const systemTheme = matchMedia("(prefers-color-scheme: dark)");
const travel = 32;
const clamp = (position: number) => Math.max(0, Math.min(travel, position));
let preference: string | null = "light";
try { preference = localStorage.getItem("theme"); } catch { /* Storage is optional. */ }
let gesture: { id: number; startX: number; position: number; moved: boolean } | null = null;
let suppressClick = false;

function applyTheme(dark: boolean) {
  root.classList.toggle("dark", dark);
  button.setAttribute("aria-checked", String(!dark));
}

function setTheme(dark: boolean) {
  preference = dark ? "dark" : "light";
  applyTheme(dark);
  try { localStorage.setItem("theme", preference); } catch { /* Keep working without storage. */ }
}

function resetDrag() {
  gesture = null;
  delete button.dataset.dragging;
  knob.style.removeProperty("transform");
}

function cancelDrag() {
  if (!gesture) return;
  suppressClick = gesture.moved;
  resetDrag();
}

applyTheme(root.classList.contains("dark"));
button.addEventListener("click", (event) => {
  if (suppressClick && event.detail !== 0) {
    suppressClick = false;
    return;
  }
  setTheme(!root.classList.contains("dark"));
});
button.addEventListener("pointerdown", (event) => {
  if (!event.isPrimary || event.button !== 0) return;
  suppressClick = false;
  const position = clamp(knob.getBoundingClientRect().left - button.getBoundingClientRect().left - 3);
  gesture = { id: event.pointerId, startX: event.clientX, position, moved: false };
  button.setPointerCapture(event.pointerId);
});
button.addEventListener("pointermove", (event) => {
  if (!gesture || gesture.id !== event.pointerId) return;
  const delta = event.clientX - gesture.startX;
  if (Math.abs(delta) >= 3) gesture.moved = true;
  if (gesture.moved) {
    button.dataset.dragging = "true";
    knob.style.transform = `translateX(${clamp(gesture.position + delta)}px)`;
  }
});
button.addEventListener("pointerup", (event) => {
  if (!gesture || gesture.id !== event.pointerId) return;
  if (gesture.moved) {
    const position = clamp(gesture.position + event.clientX - gesture.startX);
    setTheme(position < travel / 2);
  }
  suppressClick = gesture.moved;
  resetDrag();
  button.releasePointerCapture(event.pointerId);
});
button.addEventListener("pointercancel", cancelDrag);
button.addEventListener("lostpointercapture", cancelDrag);
systemTheme.addEventListener("change", () => {
  if (preference === "system") applyTheme(systemTheme.matches);
});
window.addEventListener("storage", (event) => {
  if (event.key !== "theme" && event.key !== null) return;
  preference = event.newValue;
  applyTheme(preference === "dark" || (preference === "system" && systemTheme.matches));
});
