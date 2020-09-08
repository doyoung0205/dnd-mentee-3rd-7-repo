import { Store } from "vuex";
import { RootState } from "@/store/types";

export async function searchTipsByQuery(
  store: Store<RootState>,
  query: string
) {
  // tipSearchOptions 검색어 업데이트
  // tipSearchOptions 가져오기
  store.commit("tip/updateQuery", query);
  const tipSearchOptions = store.getters["tip/getTipSearchOptions"];
  console.log("tipSearchOptions", tipSearchOptions);

  // 팁 리스트 조회하기
  await store.dispatch("tip/FETCH_TIPS", tipSearchOptions);

  // TODO 과거 기록 데이터 초기화 하기

  // 추천 검색어 데이터 초기화 하기
  await store.dispatch("tip/FETCH_RECOMMEND_HASH_TAGS");
}
