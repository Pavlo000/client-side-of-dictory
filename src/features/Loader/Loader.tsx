import './Loader.scss';

export const Loader: React.FC = () => {
  return (
    <div className="loader-wrapper is-active">
      <div className="loader is-loading" />
    </div>
  );
};
