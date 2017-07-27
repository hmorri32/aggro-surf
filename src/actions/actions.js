// FETCH SCRIPPS spit 228 surfline 4246, CARDIFF spit 232 surfline 139590, SWAMIS spit 234 surfline 4789, GRANDVIEW spit 400 surfline 4771, OCEANSIDE spit 238 surfline 4238

export const saintDiegoTides = (tides) => {
  return {
    type: 'GRAB_TIDES',
    tides
  }
};

export const spitCastBeaconsSurf = (report) => {
  return {
    type: 'BEACONS_SURF',
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
    type: 'BLACKS_SURF',
    report
  }
};

export const surfLineBlacksSurf = (report) => {
  return {
    type: 'SL_BLACKS_SURF',
    report
  }
};

export const spitCastCardiffSurf = (report) => {
  return {
    type: 'CARDIFF_SURF',
    report
  }
}

export const surfLineCardiffSurf = (report) => {
  return {
    type: 'SL_CARDIFF_SURF',
    report
  }
}

export const spitCastOceansideSurf = (report) => {
  return {
    type: 'OCEANSIDE_SURF',
    report
  }
}

export const surfLineOceansideSurf = (report) => {
  return {
    type: 'SL_OCEANSIDE_SURF',
    report
  }
}

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

export const spitCastScrippsSurf = (report) => {
  return {
    type: 'SCRIPPS_SURF',
    report
  }
};

export const surfLineScrippsSurf = (report) => {
  return {
    type: 'SL_SCRIPPS_SURF',
    report
  }
};

export const spitCastSwamisSurf = (report) => {
  return {
    type: 'SWAMIS_SURF',
    report
  }
};

export const surfLineSwamisSurf = (report) => {
  return {
    type: 'SL_SWAMIS_SURF',
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

export const spitCastWindanseaSurf = (report) => {
  return {
    type: 'WINDANSEA_SURF',
    report
  }
};

export const surfLineWindanseaSurf = (report) => {
  return {
    type: 'SL_WINDANSEA_SURF',
    report
  }
};

export const magicBeaconsSurf = (report) => {
  return {
    type: 'MSW_BEACONS_SURF',
    report
  }
};

export const logIn = (boolean) => {
  return {
    type: 'LOG_IN',
    boolean
  }
};


