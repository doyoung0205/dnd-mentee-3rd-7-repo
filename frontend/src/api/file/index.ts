import { fileInstacne } from "../index";
import { ImgRespData, ImgDataResp } from "@/api/file/type";

export function submitImg(img: FormData): Promise<ImgDataResp> {
  return fileInstacne.post("", img, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    withCredentials: true
  });
}
