import React from 'react';
// Api.
import fetcher from '../../../api/fetcherConfig';
// Libs.
import map from 'lodash/map';
import useSWR from 'swr';
// Models.
import { ICallResponse, ILanguage } from '../../../models';
// Constants.
import { LANGUAGES } from '../../../constants/apiEndpoints';
// Components.
import LanguageFilterItem from './LanguageFilterItem';

const LanguageFilter = () => {
  const { data: languageData, error } = useSWR<ICallResponse<ILanguage[]>>(
    LANGUAGES,
    fetcher
  );

  return (
    <ul className="flex flex-col h-full w-full rounded-[12px] border-easternBlue border-[2px] py-[3rem] overflow-y-auto pl-[1.5rem]">
      {map(languageData?.value, (lang, key) => {
        return <LanguageFilterItem key={key} language={lang} />;
      })}
    </ul>
  );
};

export default LanguageFilter;
