import { DEVICE_QUERY_MOBILE } from '@/styles/breakpoints';
import useMediaQuery from './useMediaQuery';

function useIsMobile() {
  const matches = useMediaQuery(DEVICE_QUERY_MOBILE);
  return matches;
}

export default useIsMobile;
