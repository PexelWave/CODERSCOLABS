import muxBlurHash from '@mux/blurhash'



const getBlurData = async () => {
    const playbackId = "iHS02I15NGryP00jyf8a1KS2q33J2O7kEjwfN9cJsHfy4"
    const { blurHash, blurHashBase64, sourceWidth, sourceHeight } = await muxBlurHash(playbackId)

    return { blurHash, blurHashBase64, sourceWidth, sourceHeight }
}

export default getBlurData