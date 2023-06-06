import ContentLoader from 'react-content-loader';

export const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={800}
    height={800}
    viewBox="0 0 800 800"
    backgroundColor="#8f8f8f"
    foregroundColor="#f9f0f0"
    {...props}
  >
    <rect x="342" y="22" rx="0" ry="0" width="201" height="278" />
    <rect x="341" y="305" rx="2" ry="2" width="201" height="44" />
  </ContentLoader>
);
