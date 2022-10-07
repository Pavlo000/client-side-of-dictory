import { useAppSelector } from '../../app/hooks';

import './Results.scss';

export const Results: React.FC = () => {
  const trueAnswears = useAppSelector((state) => state.answears.trueAnswears);
  const falseAnswears = useAppSelector((state) => state.answears.falseAnswears);
  const persentOfTrueAnswears = (trueAnswears + falseAnswears) * trueAnswears;

  return (
    <main className="Results">
      {!!trueAnswears && !!falseAnswears && (
        <>
          <div className="Results__block">
            <p className="Results__AnsKey Results__AnsKey--true">
              True Answears
            </p>

            <p className="Results__AnsVal">{trueAnswears}</p>
          </div>

          <div className="Results__block">
            <p className="Results__AnsKey Results__AnsKey--false">
              False Answears
            </p>

            <p className="Results__AnsVal">{falseAnswears}</p>
          </div>

          <div className="Results__block">
            <p className="Results__AnsKey Results__AnsKey--total">
              Total Score
            </p>

            <p className="Results__AnsVal">{`${persentOfTrueAnswears}%`}</p>
          </div>
        </>
      )}
      {!trueAnswears && !falseAnswears && (
        <div className="Results__block">
          <div className="Results__error">Results not exist</div>
        </div>
      )}
    </main>
  );
};
