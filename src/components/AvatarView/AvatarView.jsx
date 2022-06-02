import './AvatarView.scss';

export default function AvatarView({ src }) {
  return (
    <div className='avatarView'>
      <img src={src} alt="Avatar" />
    </div>
  )
}