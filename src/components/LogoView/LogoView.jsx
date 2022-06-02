import './LogoView.scss';
import imgUrl from '../../assets/logo/logo.png';

export default function LogoView() {
  return (
    <div className="logo">
      <img src={imgUrl} alt="Logo" />
    </div>
  );
}