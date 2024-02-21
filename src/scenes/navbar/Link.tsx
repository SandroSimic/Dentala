import { SelectedPage } from '../../shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, setSelectedPage }: Props) => {
  const yellowUnderlineHover = `relative hover:cursor-pointer before:transition-all before:duration-300 before:content before:w-0 before:h-0.5 before:bg-secondary-500 before:absolute before:-bottom-1 before:left-0 hover:before:w-full`;
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  return (
    <AnchorLink
      className={yellowUnderlineHover}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
