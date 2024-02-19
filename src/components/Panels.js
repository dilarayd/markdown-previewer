import { updateMarkdown, updatePreview } from '../redux/markdownSlice'
import { useDispatch, useSelector } from 'react-redux'
import { marked } from 'marked';

function Panels() {
  const dispatch = useDispatch();
  const markdown = useSelector(state => state.markdown.markdownText);
  const preview = useSelector(state => state.markdown.preview);

  const handleMarkdownChange = (e) => {
    const text = e.target.value;
    const htmlPreview = marked(text);
    dispatch(updateMarkdown(text));
    dispatch(updatePreview(htmlPreview));
  }
  return (
    <div>
      <div className='panel'>
        <textarea className='text-area' value={markdown} onChange={handleMarkdownChange} />
      </div>
      <div className='panel preview-panel'>
        <div className='preview-text' dangerouslySetInnerHTML={{ __html: preview }} /> 
      </div>
    </div>
  )
}

export default Panels