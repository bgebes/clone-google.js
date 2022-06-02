import './ButtonView.scss';

export default function ButtonView({ text, textColor = "white" }) {
  const cssClass = `buttonView button-${textColor}`;

  return (
    <div className={cssClass}>
      {text}
    </div>
  );
}