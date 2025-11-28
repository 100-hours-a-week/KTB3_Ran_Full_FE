// export default function actionGroupEffect({ wrapperId, btnId }) {
//   const wrapper = document.getElementById(wrapperId);
//   const btn = document.getElementById(btnId);

//   if (!wrapper || !btn) return;

//   function toggle() {
//     wrapper.style.display =
//       wrapper.style.display === "block" ? "none" : "block";
//   }

//   btn.addEventListener("click", toggle);

//   return () => btn.removeEventListener("click", toggle);
// }
