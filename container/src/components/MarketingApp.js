import { mount } from 'marketing/Marketing'
import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'

export default function MarketingApp() {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
       const { onParentNavigate } = mount(ref.current, {
          onNavigate: (location) => {
            if(history.location.pathname !== location.pathname) {
                history.push(location.pathname)
            }
          }
        })

        history.listen(onParentNavigate)
    }, [])

    return <div ref={ref}></div>
}