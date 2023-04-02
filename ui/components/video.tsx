import React, { useRef, useEffect } from 'react'

type PropsType = {
    srcObject: MediaStream
}

export default function Video({ srcObject }: PropsType) {
    const video = useRef<HTMLVideoElement>(null)

    const handleVideo = async () => {
        try {
            if (video) {
                if (video?.['current']) {
                    return (video.current.srcObject = srcObject)
                } else {
                    return
                }
            } else {
                return
            }
        } catch (err) {
            console.warn('err', err)
            return
        }
    }

    useEffect(() => {
        if (srcObject) {
            handleVideo()
        }
        return () => {
            true
        }
    }, [video, srcObject])

    return <video ref={video} autoPlay playsInline muted controls />
}
