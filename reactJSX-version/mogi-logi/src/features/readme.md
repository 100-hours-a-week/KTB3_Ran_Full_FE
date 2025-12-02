features/에는 “사용자가 어떤 기능을 수행할 때 필요한 UI + 상태 + 로직“이 들어간다.

🧠 features에는 어떤 것들이 들어가나?
📌 예시: "로그인" 기능

로그인 버튼(LoginButton) : ui

로그인 API 호출 : api

로그인 form validation 코드 : lib

로그인 상태(store) : model

로그인 UI 일부 (form UI) : ui

➡ 전부 features/auth/ 로 간다.

📌 예시: "좋아요 기능"

LikeButton

useToggleLike() hook

like API

optimistic update

➡ features/like/

📌 예시: "댓글 작성 기능"

CommentForm

SubmitCommentButton

useCreateComment()

DTO 변환 로직

➡ features/comment/

📌 포인트는:

“기능을 수행하는 UI/로직들은 모두 features에 들어간다.”
