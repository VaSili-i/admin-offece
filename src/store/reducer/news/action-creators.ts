import { AppDispatch } from "../..";
import { AddNewsAction, EnumNewsAction, FetchNewsAction, INews, IsLoadingNewsAction, SetErrorNewsAction } from "./types";
import axios from 'axios';

export const NewsActionsCreators = {
    setNews: (news: INews[]): FetchNewsAction => ({ type: EnumNewsAction.FetchNewsAction, payload: news }),
    setIsLoading: (loading: boolean): IsLoadingNewsAction => ({ type: EnumNewsAction.IsLoadingNewsAction, payload: loading }),
    setError: (error: string): SetErrorNewsAction => ({ type: EnumNewsAction.SetErrorNewsAction, payload: error }),
    addNews: (newi: INews): AddNewsAction => ({ type: EnumNewsAction.AddNewsAction, payload: newi }),
    fetchNews: () => async (dispath: AppDispatch) => {
        try {
            dispath(NewsActionsCreators.setIsLoading(true));

            let resolve = await axios.get<INews[]>('./server/news.json');
            dispath(NewsActionsCreators.setNews(resolve.data));
        } catch (e) {
            dispath(NewsActionsCreators.setError('ощибка загрузки'));
        }
    }
}