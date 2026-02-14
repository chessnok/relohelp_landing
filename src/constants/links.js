/**
 * Base URL for the ReloHelp app (signup, signin, etc.).
 * Use REACT_APP_APP_URL in .env for staging/local override.
 */
export const APP_BASE_URL =
  process.env.REACT_APP_APP_URL || "https://app.relohelp.org";

export const LINKS = {
  signup: `${APP_BASE_URL}/signup`,
  signin: `${APP_BASE_URL}/signin`,
  privacy: `${APP_BASE_URL}/privacy`,
};
