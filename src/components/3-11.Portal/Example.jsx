import React from 'react'
import { createPortal } from 'react-dom'
import ThankYouDialog from './ThankYouDialog'

const Portal = (props) => {
    return createPortal(props.children, document.getElementById("portal"))
}

export default function Example() {
    return (
        <div onClick={() => console.log("div")}>
            <Portal> {/*z-index 를 무시하고 가장 위에 존재할 수 있음*/}
                <ThankYouDialog />
            </Portal>   
            <div style={{ position : 'absolute'}}>
                <button>하하하</button>
            </div>
        </div>
    )
}
