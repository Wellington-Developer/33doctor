import React from 'react';

type PropsHead = {
    title: string,
}

export const Head = (props: PropsHead) => {
    const title = props.title
    React.useEffect(() => {
        document.title = title + ' | 33 Doctor'
    }, [title])
    
    return (
        <></>
    )
}