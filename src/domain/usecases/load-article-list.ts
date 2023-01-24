import { ArticleFiltersState } from "@/data/protocols/state-manager"
import { ArticleModel } from "@/domain/models"

export interface LoadArticleList {
  loadAll: (filters: ArticleFiltersState) => Promise<LoadArticleList.Model[]>
}

export namespace LoadArticleList {
  export type Model = ArticleModel
}
