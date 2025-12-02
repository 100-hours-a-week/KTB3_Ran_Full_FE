import handleSignupClick from "../../../../pages/signup/lib/handleSignupClick.js";
import handleUserUpdate from "../../../../pages/info/lib/handleUserUpdate.js";
import handleUserPasswordUpdate from "../../../../pages/info/lib/handleUserPasswordUpdate.js";
import ButtonVDOM from "./VDOM/PrimaryButton.js";
import ImgButtonVDOM from "../../../../widgets/imgButton/ui/imgButtonVDOM.js";

// PrimaryButton
export function loginBtn(state) {
  return ButtonVDOM({
    text: "로그인",
    id: "login-button",
    state: state,
    styleProps: {
      width: 100,
    },
  });
}

export function signupBtn(state) {
  return ButtonVDOM({
    text: "회원가입",
    buttonProps: {
      onclick: handleSignupClick,
    },
    state: state,
    styleProps: {
      width: 100,
    },
  });
}

//게시글 생성 버튼
export function postCreateBtnVDOM() {
  return ImgButtonVDOM({
    id: "creat-post-btn",
    src: "public/icon/boardCreat_icon.svg",
    alt: "글 생성 버튼",
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
export function commentCreatBtn({ id = "", postId }) {
  return ButtonVDOM({
    id,
    text: "댓글 등록",
    buttonProps: {
      "data-post-id": postId ?? "",
    },
    styleProps: {
      radius: 30,
      padding: "7px 10px",
      fontSize: "18",
      fontWeight: "700",
    },
  });
}

//댓글 수정 버튼
export function commentUpdateBtn({ id = "", postId, commentId }) {
  return ButtonVDOM({
    id,
    text: "댓글 수정",
    buttonProps: {
      dataset: {
        actionType: "update-comment",
        postId,
        commentId,
      },
    },
    styleProps: {
      radius: 30,
      padding: "7px 10px",
      fontSize: "18",
      fontWeight: "700",
    },
  });
}

//유저정보 수정하기 버튼
export function updateBtn({ getDto }) {
  return ButtonVDOM({
    text: "수정하기",
    buttonProps: {
      onclick: () => {
        handleUserUpdate({ dto: getDto() });
      },
    },
    styleProps: {
      radius: 30,
      padding: "7px 10px",
      width: "100",
    },
  });
}

//유저비밀번호 수정하기 버튼
export function updatePasswordBtn({ getDto }) {
  return ButtonVDOM({
    text: "수정하기",
    buttonProps: {
      onclick: () => {
        handleUserPasswordUpdate({ dto: getDto() });
      },
    },
    styleProps: {
      radius: 30,
      padding: "7px 10px",
      width: "100",
    },
  });
}

//페이지 생성 버튼
export function pageCreatBtn({ id, state }) {
  console.log("pageCreatBtn");
  return ButtonVDOM({
    id: id,
    state: state,
    text: "작성하기",
    styleProps: {
      radius: "30",
      margin: "10px 0",
      width: 80,
      justifyContent: "center",
      fontWeight: "500",
    },
  });
}

//페이지 수정하기 버튼
export function pageUpdateBtn({ id, state }) {
  return ButtonVDOM({
    id: id,
    state: state,
    text: "수정하기",
    styleProps: {
      margin: "10px 0",
      radius: 30,
      width: 70,
      justifyContent: "center",
    },
  });
}

/////모달의 확인 취소

//확인 버튼
export function confirmBtn({
  text = "확인",
  id = "",
  buttonProps = {},
  wrapperProps = {},
} = {}) {
  return ButtonVDOM({
    text,
    id,
    state: { canSubmit: true },
    buttonProps,
    wrapperProps,
  });
}

//취소 버튼 : 어떤 모달인지 전송받아야됨
export function quitBtn({
  text = "취소",
  id = "",
  buttonProps = {},
  wrapperProps = {},
  styleProps = {},
} = {}) {
  return ButtonVDOM({
    text,
    id,
    state: { canSubmit: true },
    buttonProps,
    wrapperProps,
    styleProps: {
      background: "#000000ff",
      ...styleProps,
    },
  });
}

///수정 삭제에 따라 받아야하는 버튼 액션이 다름.

///ActionButton
export function editBtn({ dataset }) {
  return ImgButtonVDOM({
    src: "public/icon/edit_icon.svg",
    alt: "편집버튼",
    buttonProps: { dataset },
    styleProps: {
      width: 50,
      height: 50,
      margin: "5px",
    },
  });
}

//삭제 -> 삭제 모달
export function delBtn({ dataset }) {
  return ImgButtonVDOM({
    src: "public/icon/delete_icon.svg",
    alt: "삭제버튼",
    buttonProps: { dataset },
    styleProps: {
      width: 50,
      height: 50,
      margin: "5px",
    },
  });
}
