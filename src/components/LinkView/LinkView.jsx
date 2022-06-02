import './LinkView.scss';

export default function LinkView({ to, text, priority }) {
  const cssClass = `linkView link-${priority}`;

  return (
    <a className={cssClass} href={to}>{text}</a>
  );
}