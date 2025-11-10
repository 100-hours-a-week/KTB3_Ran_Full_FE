import Button from "./PrimaryButton.js";
import handleLoginClick from "../../../../pages/login/lib/handleLoginClick.js";
import handleSignupClick from "../../../../pages/signup/lib/handleSignupClick.js";
import handlerPostCreat from "../../../../features/navigation/handlerPostCreat.js";
import ActionButton from "./ActionButton.js";

// PrimaryButton
export function loginBtn() {
  return Button({
    text: "로그인",
    onClick: handleLoginClick,
    styleProps: {
      width: 100,
    },
  });
}

export function signupBtn() {
  return Button({
    text: "회원가입",
    onClick: handleSignupClick,
    styleProps: {
      width: 100,
    },
  });
}

//게시글 생성 버튼
export function postCreateBtn() {
  return Button({
    text: "게시물 생성",
    onClick: handlerPostCreat,
    styleProps: {
      radius: 16,
      margin: "12px 0",
    },
  });
}

//댓글 생성 버튼
export function commentCreatBtn() {
  return Button({
    text: "댓글 등록",
    onClick: handleLoginClick,
    styleProps: {
      radius: 16,
      padding: "7px 10px",
    },
  });
}

///ActionButton
export function editBtn() {
  return ActionButton({
    text: "수정",
    onClick: () => console.log("edit"),
  });
}

export function delBtn() {
  return ActionButton({
    text: "삭제",
    onClick: () => console.log("delete"),
  });
}
