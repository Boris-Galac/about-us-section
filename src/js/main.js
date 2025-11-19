///// HAM BTN AND NAV OPEN/CLOSEDS

var swiper = new Swiper(".review-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const playButtons = document.querySelectorAll(
    ".about-us-section-play-button"
  );

  if (!playButtons.length) return;

  playButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      openVideoModal();
    });
  });
});

function openVideoModal() {
  // Create overlay
  const overlay = document.createElement("div");
  overlay.classList.add("video-modal-overlay");

  // Create modal box
  const modal = document.createElement("div");
  modal.classList.add("video-modal");

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("video-modal-close");
  closeBtn.innerHTML = "✕";

  // Video element
  const video = document.createElement("video");
  video.src = "/src/assets/balcon-video.mp4";
  video.controls = true;
  video.autoplay = true;
  video.playsInline = true;

  // Append elements
  modal.appendChild(closeBtn);
  modal.appendChild(video);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Close logic
  const closeModal = () => {
    video.pause();
    video.currentTime = 0;
    overlay.remove();
  };

  closeBtn.addEventListener("click", closeModal);

  // Click outside video closes modal
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}
