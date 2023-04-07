import { FunctionComponent } from 'react'
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'

interface PostEditorProps {}

const PostEditor: FunctionComponent<PostEditorProps> = () => {
  const handleOnChange = (e) => {
    console.log(e)
  }
  return (
    <Editor previewStyle="vertical" height="500px" onChange={handleOnChange} />
  )
}

export default PostEditor
