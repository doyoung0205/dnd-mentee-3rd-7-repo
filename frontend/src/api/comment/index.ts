import { commentInstacne } from "@/api";
import { Comment } from "@/api/comment/type";
// 팁댓글 API

export function WriteTipComments(data: Comment) {
  return commentInstacne.post(``, data, {
    withCredentials: true
  });
}
