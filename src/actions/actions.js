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

export const spitCastPontoSurf = (report) => {
  return {
    type: 'PONTO_SURF',
    report
  }
};

export const surfLineBeaconsSurf = (report) => {
  return {
    type: 'SL_BEACONS_SURF',
    report
  }
};

export const surfLinePontoReport = (report) => {
  return {
    type: 'SL_PONTO_SURF',
    report
  }
};

export const surfLineTamarackReport = (report) => {
  return {
    type: 'SL_TAMARACK_SURF',
    report
  }
};
