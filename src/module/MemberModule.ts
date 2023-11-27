// import { makeAutoObservable } from 'mobx';
import MemberService, { Member, MemberRdo } from "../service/MemberService";

export default class MemberModule {

    static readonly instanceName: string = 'MemberModule';
    static instance: MemberModule;

    private readonly memberService: MemberService;

    member: Member | null = null;
    memberList: Member[] = []

    constructor(
        memberService: MemberService = MemberService.instance,
    ){
        this.memberService = memberService;
        // makeAutoObservable(this);
    }

    initMember(){
        // this.member = null
        // this.memberList = []
    }


    async findMemberByName(memberRdo: MemberRdo){
        //
        this.memberList = await this.memberService.findMemberByName(memberRdo)
        return this.memberList
    }

}

MemberModule.instance = new MemberModule();

