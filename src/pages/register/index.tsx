import Button from "../../utils/Button";

export default function Register () {
    const onNewCustomerRegi = () =>{
        console.log('regi')
    }

    return (
        <div>
            <h1>등록페이지</h1>
            <Button onClick={onNewCustomerRegi} color='basic' size='sm'>
                basic /sm
            </Button>
            <Button onClick={onNewCustomerRegi} color='purple' size='md'>
                purple /md
            </Button>
            <Button onClick={onNewCustomerRegi} color='dark' size='lg'>
                dark /lg
            </Button>
        </div>
    )
}