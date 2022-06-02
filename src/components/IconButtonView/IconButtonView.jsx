import './IconButtonView.scss';

export default function IconButtonView({ Icon, Title }) {
  return (
    <span className='iconButtonView'>
      <Icon />
      {Title}
    </span>
  );
}