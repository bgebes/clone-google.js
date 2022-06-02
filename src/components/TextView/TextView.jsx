import './TextView.scss';

export default function TextView({ text, textColor = "white" }) {
  const cssClass = `textView text-${textColor}`;

  return (
    <div className={cssClass}>
      {text}
    </div>
  );
}