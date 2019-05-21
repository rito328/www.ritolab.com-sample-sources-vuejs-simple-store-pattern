/**
 * Mixin
 * アップロードされた画像を生成
 * @type {{data(): *, methods: {createImage(*=): void}}}
 */
export const ImageCreatable = {
    data () {
        return {
            imageData: ''
        }
    },

    methods: {
        createImage (file) {
            let reader = new FileReader()
            reader.onload = (e) => {
                this.imageData = e.target.result
            }
            reader.readAsDataURL(file)
        }
    }
}