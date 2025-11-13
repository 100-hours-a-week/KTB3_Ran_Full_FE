import Button from "./PrimaryButton.js";
import handleLoginClick from "../../../../pages/login/lib/handleLoginClick.js";
import handleSignupClick from "../../../../pages/signup/lib/handleSignupClick.js";
import handlerPostCreat from "../../../../features/navigation/handlerPostCreat.js";
import ActionButton from "./ActionButton.js";
import DeleteModal from "../../../lib/DeleteModal.js";
import EditModal from "../../../lib/EditModal.js";
import handlePostCreat from "../../../../features/board/model/handlePostCreat.js";

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

//수정하기 버튼
export function updateBtn() {
  return Button({
    text: "수정하기",
    onClick: handleLoginClick,
    styleProps: {
      radius: 6,
      padding: "7px 10px",
      width: "100",
    },
  });
}

//페이지 생성 버튼
export function pageCreatBtn() {
  return Button({
    text: "완료",
    onClick: handlePostCreat,
    styleProps: {
      radius: 6,
      margin: "12px 0",
      width: 70,
      justifyContent: "center",
    },
  });
}

/////모달의 확인 취소

//확인 버튼
export function confirmBtn() {
  return Button({
    text: "확인",
    onClick: () => console.log("확인 버튼"),
  });
}

//취소 버튼 : 어떤 모달인지 전송받아야됨
export function quitBtn(modal) {
  return Button({
    text: "취소",
    onClick: () => {
      modal.remove();
    },
    styleProps: {
      background: "#000000ff",
    },
  });
}

///

///ActionButton
export function editBtn() {
  return ActionButton({
    text: "수정",
    onClick: () => EditModal(),
    styleProps: {},
  });
}

export function delBtn() {
  return ActionButton({
    text: "삭제",
    onClick: () => DeleteModal(),
  });
}
