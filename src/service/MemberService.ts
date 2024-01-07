import axios from 'axios'

export interface Member {
    memCode: number,
    name: string,
    address: string,
    phone: string,
    status: string
    regidate: number
}

export  interface MemberRdo {
    name: string
}

export default class MemberService {

    static instance: MemberService;

    private readonly memberApi = '/api/member'

    async findMemberByName(memberRdo: MemberRdo): Promise<Member[]>{
        //
        // TODO: 환경설정 전까지 주석처리
        // return axios.post(`${this.memberApi}/getName`, memberRdo)
        //     .then((response) => response && response.data);
            return []
    }
}

MemberService.instance = new MemberService();