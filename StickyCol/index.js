const panel = document.getElementById("panel");

const bsize = 14;

let m_pos;
function resize(e) {
  const dx = m_pos - e.x;
  m_pos = e.x;
  panel.style.width = parseInt(getComputedStyle(panel, "").width) - dx + "px";
}
document.addEventListener(
  "mousedown",
  function (e) {
    if (e.offsetX < bsize) {
      m_pos = e.x;
      document.addEventListener("mousemove", resize, false);
    }
  },
  false
);
document.addEventListener(
  "mouseup",
  function (e) {
    document.removeEventListener("mousemove", resize, false);
  },
  false
);
