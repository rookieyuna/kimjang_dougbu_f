import axios from 'axios'

export interface History {
    htCode: string,
    memCode: number,
    sdate: number,
    edate: number,
    rdate: number,
    prepaidYn: string,
    prepaidPrice: number,
    debtYn: string,
    dtCode: number,
    cardYn: string,
    total: number
}

export  interface HistoryRdo {
    sdate: number,
    edate: number,
    debtYn: string,
}

export default class HistoryService {

    static instance: HistoryService;

    private readonly historyApi = '/api/history'

    async findBySdateBetween(historyRdo: HistoryRdo): Promise<History[]>{
        
        // TODO: 환경설정 전까지 주석처리
        return axios.post(`${this.historyApi}/work`, historyRdo)
            .then((response) => response && response.data);
            return []
    }
}

HistoryService.instance = new HistoryService();