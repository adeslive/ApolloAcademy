import FileStore  from 'session-file-store';
import path from 'path'

export default {
    path: path.join( __dirname, './../sessions'),
} as FileStore.Options
