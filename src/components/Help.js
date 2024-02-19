import React from 'react'
import { help, updatePreview } from '../redux/markdownSlice'
import { useDispatch, useSelector } from 'react-redux'
import { marked } from 'marked';

function Help() {
  const example = useSelector((state) => state.markdown.example)
  const dispatch = useDispatch();

  const handleClick = () => {
    const htmlPreview = marked(example);
    dispatch(help())
    dispatch(updatePreview(htmlPreview));
  }
  return (
    <div>
      <button className='help-btn' onClick={handleClick}>?</button>
    </div>
  )
}

export default Help