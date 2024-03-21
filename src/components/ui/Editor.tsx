import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { EventInfo } from "@ckeditor/ckeditor5-utils";
type TEditorProps = {
    handleEditorChange: (
        _event: EventInfo<string, unknown>,
        editor: ClassicEditor
    ) => void;
};
const Editor = ({ handleEditorChange }: TEditorProps) => {
    return (
        <div className="">
            <CKEditor
                editor={ClassicEditor}
                data="<p></p>"
                onChange={(event, editor) => handleEditorChange(event, editor)}
            />
        </div>
    );
};

export default Editor;
