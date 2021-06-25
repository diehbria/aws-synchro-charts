/**
 * Shared Selectors
 *
 * A collection of shared 'selectors' for utilization within integration and unit tests.
 *
 * Exported as part of the library, to help stabilize integration tests.
 *
 * Used internally, also to help stabilize integration tests and reduce refactoring work.
 */
import { SECOND_IN_MS } from '../utils/time';
import { constructSearchQuery, SCREEN_SIZE, SearchQueryParams } from './dynamicWidgetUtils/testCaseParameters';
import { DataStreamId } from '../utils/dataTypes';

// NOTE: the values of the selectors will change over time.
export const ERROR_SYMBOL_SELECTOR = '[data-test-tag="error"]';
export const LOADING_SPINNER_SELECTOR = 'sc-loading-spinner';
export const CHART_VIZ_CONTAINER_SELECTOR = 'monitor-webgl-base-chart .data-container';
export const CHART_TOOLTIP_SELECTOR = 'monitor-webgl-base-chart .tooltip-container';
export const CHART_TOOLTIP_ROW_SELECTOR = 'monitor-tooltip-row';
export const LEGEND_SELECTOR = 'monitor-legend';

// corresponds to the 'no data visualization', and the 'data stream name and value' panel directly above it.
export const STATUS_TIMELINE_OVERLAY_SELECTOR = 'monitor-status-timeline-overlay';
export const STATUS_TIMELINE_OVERLAY_ROW_SELECTOR = 'monitor-status-timeline-overlay-row';

// Helps prevent DOM shift issues due to `size-provider`
const SMALL_WAIT = 0.01 * SECOND_IN_MS;

export const waitForChart = (cy: any) =>
  cy
    .get(CHART_VIZ_CONTAINER_SELECTOR)
    .should('be.visible')
    .wait(SMALL_WAIT)
    .click({ multiple: true });

const route = (params: Partial<SearchQueryParams>): string =>
  `localhost:3333/tests/widget-test-route?${constructSearchQuery(params)}`;

export const infoNameTestSelector = (id: DataStreamId): string => `#info-${id}`;

const DEFAULT_PARAMS: Partial<SearchQueryParams> = {
  dataStreams: [],
  dataStreamInfos: [],
};

// Replace with the proper type.
type CypressLike = {
  viewport: Function;
  visit: Function;
};