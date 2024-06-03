import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { contentGuidelines, webappUrl } from '../../lib/constants';
import { withExperiment } from '../withExperiment';
import { feature } from '../../lib/featureManagement';
import { anchorDefaultRel } from '../../lib/strings';

export type FooterLinksProps = {
  className?: string;
};

export const FooterLinks = withExperiment(
  ({ className }: FooterLinksProps): ReactElement => {
    return (
      <ul
        className={classNames(
          className,
          'flex flex-row flex-wrap justify-center gap-3 text-text-tertiary typo-caption1',
        )}
      >
        <li>&copy; {new Date().getFullYear()} Daily Dev Ltd.</li>
        <li>
          <a href={contentGuidelines} target="_blank" rel={anchorDefaultRel}>
            Guidelines
          </a>
        </li>
        <li>
          <a href={`${webappUrl}tags`}>Tags</a>
        </li>
        <li>
          <a href={`${webappUrl}sources`}>Sources</a>
        </li>
        <li>
          <a href={`${webappUrl}squads`}>Squads</a>
        </li>
      </ul>
    );
  },
  {
    feature: feature.onboardingLinks,
    value: true,
  },
);
