document.querySelectorAll<HTMLElement>(".project-accordion").forEach((accordion) => {
  const trigger = accordion.querySelector<HTMLButtonElement>(".project-trigger")!;
  const panel = accordion.querySelector<HTMLElement>(".project-story-panel")!;
  const content = accordion.querySelector<HTMLElement>(".project-story")!;
  const close = accordion.querySelector<HTMLButtonElement>("[data-close-story]")!;
  const label = trigger.querySelector<HTMLElement>("[data-story-label]")!;
  let open = false;

  function setOpen(value: boolean, instant = false) {
    open = value;
    accordion.dataset.instant = String(instant);
    accordion.dataset.open = String(open);
    trigger.setAttribute("aria-expanded", String(open));
    label.textContent = open ? "Close story" : "Read story";
    panel.setAttribute("aria-hidden", String(!open));
    panel.inert = !open;
    if (!open) panel.querySelectorAll("video").forEach((video) => video.pause());
    panel.style.height = `${open ? content.getBoundingClientRect().height : 0}px`;
  }

  trigger.addEventListener("click", (event) => setOpen(!open, event.detail === 0));
  panel.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false, true);
      trigger.focus();
    }
  });
  close.addEventListener("click", (event) => {
    setOpen(false, event.detail === 0);
    trigger.focus({ preventScroll: true });
    trigger.scrollIntoView({ block: "nearest", behavior: "instant" });
  });
  new ResizeObserver(() => {
    if (open) panel.style.height = `${content.getBoundingClientRect().height}px`;
  }).observe(content);
});
