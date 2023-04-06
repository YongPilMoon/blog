import { FunctionComponent } from 'react'
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'

interface PostEditorProps {}

const PostEditor: FunctionComponent<PostEditorProps> = () => {
  return <Editor previewStyle="vertical" height="500" />
}

export default PostEditor
