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
        return axios.post(`${this.memberApi}/getName`, memberRdo)
            .then((response) => response && response.data);
    }
}

MemberService.instance = new MemberService();