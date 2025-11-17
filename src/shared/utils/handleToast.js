import Toast from "../ui/Toast/Toast.js";

function toast(message) {
  const toast = Toast(message);
  console.log(toast);
  document.body.appendChild(toast); //보이기
}

export default toast;
