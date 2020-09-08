import { Store } from "vuex";
import { RootState } from "@/store/types";
import { gsap } from "gsap";

export async function searchTipsByQuery(
  store: Store<RootState>,
  query: string
) {
  // tipSearchOptions 검색어 업데이트
  // tipSearchOptions 가져오기
  store.commit("tip/updateQuery", query);
  store.commit("tip/initPage");
  const tipSearchOptions = store.getters["tip/getTipSearchOptions"];
  console.log("tipSearchOptions", tipSearchOptions);

  // 팁 리스트 조회하기
  await store.dispatch("tip/FETCH_TIPS", tipSearchOptions);

  if (store.getters.isLogin) {
    //  과거 기록 데이터 초기화 하기
    const userId = store.getters["getUserId"];
    await store.dispatch("tip/FETCH_HISOTRIES_BY_USER_ID", userId);
  }

  // 추천 검색어 데이터 초기화 하기
  await store.dispatch("tip/FETCH_RECOMMEND_HASH_TAGS");
}

export function moveToTipList() {
  return new Promise(resolve => {
    gsap.to(window, 0.25, {
      scrollTo: {
        y: "#tips",
        autoKill: true
      },
      delay: 0.1,
      onComplete: () => {
        resolve();
      }
    });
  });
}
