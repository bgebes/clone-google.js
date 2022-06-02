import './TextFieldView.scss';

export default function TextFieldView({ Icon }) {
  return (
    <div className='textFieldView'>
      <Icon />
      <input type="text" />
    </div>
  )
}