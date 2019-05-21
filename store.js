export default {
    debug: process.env.NODE_ENV !== 'production',
    state: {
        file: {
            data: false,
            required: false
        },
        fileImage: {
            data: false,
            required: false
        }
    },
    setFileRequiredAction (bool) {
        if (this.debug) console.log('setFileRequiredAction triggered with', bool)
        this.state.file.required = bool
    },
    setParamAction (file, type) {
        if (this.debug) console.log('setParamAction triggered with ', type)
        switch (type) {
            case 'file': {
                this.setFileAction(file)
                break
            }
            case 'image': {
                this.setFileImageAction(file)
                break
            }
            default: {}
        }
    },
    removeParamAction (type) {
        if (this.debug) console.log('removeParamAction triggered with ', type)
        switch (type) {
            case 'file': {
                this.removeFileAction()
                break
            }
            case 'image': {
                this.removeFileImageAction()
                break
            }
            default: {}
        }
    },
    setFileAction (file) {
        if (this.debug) console.log('setFileAction triggered.')
        this.state.file.data = file
    },
    removeFileAction () {
        if (this.debug) console.log('removeFileAction triggered.')
        this.state.file.data = false
    },
    setFileImageAction (file) {
        if (this.debug) console.log('setFileImageAction triggered.')
        this.state.fileImage.data = file
    },
    removeFileImageAction () {
        if (this.debug) console.log('removeFileImageAction triggered.')
        this.state.fileImage.data = false
    },
    destroyParamAction () {
        this.removeFileAction()
        this.removeFileImageAction()
    }
}