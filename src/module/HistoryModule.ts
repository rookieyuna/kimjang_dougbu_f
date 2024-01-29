// import { makeAutoObservable } from 'mobx';
import HistoryService, { History, HistoryRdo } from "../service/HistoryService";

export default class HistoryModule {

    static readonly instanceName: string = 'HistoryModule';
    static instance: HistoryModule;

    private readonly historyService: HistoryService;

    History: History | null = null;
    historyList: History[] = []

    constructor(
        historyService: HistoryService = HistoryService.instance,
    ){
        this.historyService = historyService;
        // makeAutoObservable(this);
    }

    initMember(){
        // this.History = null
        // this.memberList = []
    }


    async findBySdateBetween(historyRdo: HistoryRdo){
        //
        this.historyList = await this.historyService.findBySdateBetween(historyRdo)
        return this.historyList
    }

}

HistoryModule.instance = new HistoryModule();

