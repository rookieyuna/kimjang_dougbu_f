import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs'

import { Member } from '../service/MemberService';
import MemberModule from '../module/MemberModule';

export default function Home() {

    const [example, setExample] = useState('')
    const [member, setMember] = useState<Member>({
        memCode: 0,
        address: '',
        name: '',
        phone: '',
        status: '',
        regidate: Date.now()
    })
    const [memberList, setMemberList] = useState<Member[]>([])

    const memberModule = MemberModule.instance

    useEffect(()=>{
    회원이름찾기()
    },[])

    async function 회원이름찾기() {
        const res = await memberModule.findMemberByName({name: '길동'})
        setMemberList(res)
    }


    return (
        <div>
            <p>이름: {memberList[0]?.name}</p>
            <p>주소: {memberList[0]?.address}</p>
            <p>가입일: {dayjs(memberList[0]?.regidate).format('YYYY-MM-DD')}</p>
        </div>
    )
}

