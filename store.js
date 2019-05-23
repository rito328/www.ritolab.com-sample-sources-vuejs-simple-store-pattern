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
    setRequiredAction (bool, type) {
        switch (type) {
            case 'file':  { this._setFileRequiredAction(bool);      break }
            case 'image': { this._setFileImageRequiredAction(bool); break }
            default: { break }
        }
    },
    setParamAction (file, type) {
        switch (type) {
            case 'file':  { this._setFileAction(file);      break }
            case 'image': { this._setFileImageAction(file); break }
            default: { break }
        }
    },
    removeParamAction (type) {
        switch (type) {
            case 'file':  { this._removeFileAction();      break }
            case 'image': { this._removeFileImageAction(); break }
            default: { break }
        }
    },
    _setFileRequiredAction (bool) {
        if (this.debug) console.log('setFileRequiredAction triggered with', bool) // eslint-disable-line no-console
        this.state.file.required      = bool
    },
    _setFileImageRequiredAction (bool) {
        if (this.debug) console.log('setFileImageRequiredAction triggered with', bool) // eslint-disable-line no-console
        this.state.fileImage.required = bool
    },
    _setFileAction (file) {
        if (this.debug) console.log('setFileAction triggered.') // eslint-disable-line no-console
        this.state.file.data      = file
    },
    _setFileImageAction (file) {
        if (this.debug) console.log('setFileImageAction triggered.') // eslint-disable-line no-console
        this.state.fileImage.data = file
    },
    _removeFileAction () {
        if (this.debug) console.log('removeFileAction triggered.') // eslint-disable-line no-console
        this.state.file.data      = false
    },
    _removeFileImageAction () {
        if (this.debug) console.log('removeFileImageAction triggered.') // eslint-disable-line no-console
        this.state.fileImage.data = false
    },
    destroyParamAction () {
        if (this.debug) console.log('destroyParamAction triggered.') // eslint-disable-line no-console
        this._removeFileAction()
        this._removeFileImageAction()
    }
}