import React from 'react';

type PropsHead = {
    title: string,
}

export const Head = (props: PropsHead) => {
    React.useEffect(() => {
        document.title = props.title + ' | 33 Doctor'
    }, [])
    
    return (
        <></>
    )
}