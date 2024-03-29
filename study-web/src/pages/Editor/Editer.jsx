import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styles from './editer.module.scss'

function Editer(){
    const [editorData, setEditorData] = useState("");

    const handleEditorChange = (event, editor) => {
      const data = editor.getData();
      setEditorData(data);
    };
    return(
        <div className={styles.main}>
        <h2>Tạo bài viết mới</h2>
        <CKEditor
          editor={ClassicEditor}
          data={editorData}
          onChange={handleEditorChange}
        />
      </div>
    )
}
export default Editer;