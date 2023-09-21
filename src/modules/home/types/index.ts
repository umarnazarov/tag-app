export interface IData {
  id: number;
  name: string;
  aliases: string[];
}
export interface IState {
  loadingSearch: boolean;
  searchTerm: string;
  data: IData[];
  searchResult: string[];
  selectedTags: string[];
}
