import { calculateElementSize, calculateElementLocation } from '../../lib/dom';
import { percentageDifference } from '../../lib/math';

export default function move (fromElement, { matchSize } = {}) {
  const fromLocation = calculateElementLocation(fromElement, true);
  const fromSize = calculateElementSize(fromElement);

  const to = (toElement) => {
    const toSize = matchSize ? calculateElementSize(toElement) : calculateElementSize(fromElement);
    const toLocation = calculateElementLocation(toElement, true);

    return {
      ...toLocation,
      ...toSize,
      scale3d: matchSize && `${percentageDifference(toSize.width, fromSize.width)}, ${percentageDifference(toSize.height, fromSize.height)}, 1`,
      transformOrigin: '0 0',
    };
  };

  return {
    name: 'move',
    options: {
      cloneElement: true,
      applyScaleTransform: true,
      applyTranslateTransform: true,
      transitions: ['transform'],
      createInBody: true,
      immediatelyApplyFrom: true,
    },
    from: {
      ...fromLocation,
      ...fromSize,
      margin: 0,
      position: 'absolute',
      zIndex: 9999,
    },
    to,
  };
}
