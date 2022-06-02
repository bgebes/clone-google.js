import './Content.scss';

import LogoView from '../LogoView/LogoView';
import TextFieldView from '../TextFieldView/TextFieldView';
import ButtonView from '../ButtonView/ButtonView';
import TextView from '../TextView/TextView';
import IconSearch from '../../assets/icons/search.svg?component';

export default function Content() {
  return (
    <div className="content">
      <LogoView />
      <TextFieldView Icon={IconSearch} />
      <div className="contentButtons">
        <ButtonView text="Google Search" />
        <ButtonView text="I'm Feeling Lucky" />
      </div>
      <div className="contentHint">
        <TextView text="Google offered in:" />
        <TextView text="Türkçe" textColor="blue" />
      </div>
    </div>
  );
}