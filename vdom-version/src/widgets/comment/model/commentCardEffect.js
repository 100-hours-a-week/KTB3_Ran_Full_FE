export default function commentCardEffect() {
  const cards = document.querySelectorAll(".comment-card");
  if (!cards.length) return;

  cards.forEach((card) => {
    // const payload = card.dataset.payload;
    const wrapper = card.querySelector(".action-group-wrapper");

    // wrapper.actionPayload = payload;
  });
}
