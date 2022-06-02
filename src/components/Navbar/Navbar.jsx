import './Navbar.scss';

import AvatarView from '../AvatarView/AvatarView';
import LinkView from '../LinkView/LinkView';
import IconButtonView from '../IconButtonView/IconButtonView';
import IconMore from '../../assets/icons/more.svg?component';
import Avatar from '../../assets/images/avatar.jpg';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-tools'>
        <LinkView to="#" text="Gmail" priority="primary" />
        <LinkView to="#" text="Images" priority="primary" />
        <IconButtonView Icon={IconMore} />
        <AvatarView src={Avatar} />
      </div>
    </div>
  )
}