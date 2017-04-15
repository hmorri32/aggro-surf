// FETCH : WINDANSEA spit 227 surfline 4248, SCRIPPS spit 228 surflin 4246, CARDIFF spit 232 surfline 139590, SWAMIS spit 234 surfline 4789, GRANDVIEW spit 400 surfline 4771, OCEANSIDE spit 238 surfline 4238




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

export const surfLineBeaconsSurf = (report) => {
  return {
    type: 'SL_BEACONS_SURF',
    report
  }
};

export const surfLineBeaconsTide = (report) => {
  return {
    type: 'SL_BEACONS_TIDE',
    report
  }
};


export const spitCastBlacksSurf = (report) => {
  return {
    type: 'BLACKS_REPORT',
    report
  }
};

export const surfLineBlacksSurf = (report) => {
  return {
    type: 'SL_BLACKS_SURF',
    report
  }
};

export const spitCastPontoSurf = (report) => {
  return {
    type: 'PONTO_SURF',
    report
  }
};

export const surfLinePontoSurf = (report) => {
  return {
    type: 'SL_PONTO_SURF',
    report
  }
};

export const spitCastTamarackSurf = (report) => {
  return {
    type: 'TAMARACK_SURF',
    report
  }
};

export const surfLineTamarackSurf = (report) => {
  return {
    type: 'SL_TAMARACK_SURF',
    report
  }
};

export const spitCastWindAnSeaSurf = (report) => {
  return {
    type: 'WINDANSEA_SURF',
    report
  }
};

export const surfLineWindAnSeaSurf = (report) => {
  return {
    type: 'SL_WINDANSEA_SURF',
    report
  }
};
