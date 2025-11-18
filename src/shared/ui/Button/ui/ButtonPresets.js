import Button from "./PrimaryButton.js";
import handleLoginClick from "../../../../pages/login/lib/handleLoginClick.js";
import handleSignupClick from "../../../../pages/signup/lib/handleSignupClick.js";
import handlerPostCreat from "../../../../features/navigation/handlerPostCreat.js";
import ActionButton from "./ActionButton.js";
import DeleteModal from "../../../lib/DeleteModal.js";
import EditModal from "../../../lib/EditModal.js";
import handlePostCreat from "../../../../features/board/model/handlePostCreat.js";
import handleUserUpdate from "../../../../pages/info/lib/handleUserUpdate.js";
import handleCreatComment from "../../../../pages/board/detail/lib/handleCreatComment.js";
import handlePostEdit from "../../../lib/handlePostUpdate.js";
import handlePostUpdate from "../../../lib/handlePostUpdate.js";
import commentUpdateFetch from "../../../../features/comment/api/commentUpdateFetch.js";
import handleUserPasswordUpdate from "../../../../pages/info/lib/handleUserPasswordUpdate.js";
import imgButton from "../../../../widgets/imgButton.js/ui/imgButton.js";

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
  return imgButton({
    src: "public/icon/boardCreat_icon.svg",
    alt: "글 생성 버튼",
    onClick: handlerPostCreat,
    styleProps: {
      radius: 50,
      width: 60,
      height: 60,
      margin: "12px",
      background: "var(--color-primary)",
    },
  });
}

//댓글 생성 버튼
export function commentCreatBtn({ getDto, postId }) {
  return Button({
    text: "댓글 등록",
    onClick: () => {
      handleCreatComment({ dto: getDto(), postId });
    },
    styleProps: {
      radius: 16,
      padding: "7px 10px",
    },
  });
}

//댓글 수정 버튼
export function commentUpdateBtn({ getDto, postId, commentId }) {
  return Button({
    text: "댓글 수정",
    onClick: () => {
      commentUpdateFetch({ dto: getDto(), postId, commentId }); //handle추후에 필요.
    },
    styleProps: {
      radius: 16,
      padding: "7px 10px",
    },
  });
}

//유저정보 수정하기 버튼
export function updateBtn({ getDto }) {
  return Button({
    text: "수정하기",
    onClick: () => {
      handleUserUpdate({ dto: getDto() });
    },
    styleProps: {
      radius: 6,
      padding: "7px 10px",
      width: "100",
    },
  });
}

//유저비밀번호 수정하기 버튼
export function updatePasswordBtn({ getDto }) {
  return Button({
    text: "수정하기",
    onClick: () => {
      handleUserPasswordUpdate({ dto: getDto() });
    },
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

//페이지 수정하기 버튼
export function pageUpdateBtn({ getDto, postId }) {
  return Button({
    text: "수정하기",
    onClick: () => {
      handlePostUpdate({ dto: getDto(), postId });
    },
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
  });
}

//취소 버튼 : 어떤 모달인지 전송받아야됨
export function quitBtn() {
  return Button({
    text: "취소",
    styleProps: {
      background: "#000000ff",
    },
  });
}

///수정 삭제에 따라 받아야하는 버튼 액션이 다름.

///ActionButton
export function editBtn(action) {
  return ActionButton({
    text: "수정",
    onClick: () => EditModal(action),
    styleProps: {},
  });
}

//삭제 -> 삭제 모달
export function delBtn(action) {
  return ActionButton({
    text: "삭제",
    onClick: () => DeleteModal(action),
  });
}
