export const saintDiegoTides = (tides) => {
  return {
    type: 'GRAB_TIDES',
    tides
  }
};

export const beaconsSurf = (report) => {
  return {
    type: 'BEACONS_REPORT',
    report
  }
};

