import { useRouter } from "next/router";
import { useEffect } from "react";

const Error = () => {
    // const router = useRouter();
    // useEffect(() => {
    //     router.push('/')
    // })

    return(
        <div style = {{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div><h1>Ошибка 404!</h1></div>
            <div>Эта страница не существует или же пока не создана!</div>
        </div>
    )
}

export default Error;