export const saintDiegoTides = (tides) => {
  return {
    type: 'GRAB_TIDES',
    tides
  }
};

export const spitCastBeaconsSurf = (report) => {
  return {
    type: 'BEACONS_REPORT',
    report
  }
};

export const spitCastTamarackSurf = (report) => {
  return {
    type: 'TAMARACK_SURF',
    report
  }
};

export const surfLineBeaconsSurf = (report) => {
  return {
    type: 'SL_BEACONS_SURF',
    report
  }
};

