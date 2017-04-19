import { tides,
  spitBeaconsReport,
  spitBlacksReport,
  spitTamarackReport,
  surfLineBeaconsReport,
  surfLineBlacksReport,
  surfLineBeaconsTide,
  spitPontoReport,
  surfLinePontoReport,
  surfLineTamarackReport,
  spitWindanseaReport,
  surfLineWindanseaReport,
  spitScrippsReport,
  surfLineScrippsReport,
  currentUser,
  spitCardiffReport,
  surfLineCardiffReport,
  spitOceansideReport,
  surfLineOceansideReport,
  spitSwamisReport,
  surfLineSwamisReport }  from './reducers'



describe('testin all these reducers', () => {

  const mockForecast = [
    {
      date: 'wednesday',
      day: 'whatever',
      gmt: '2017-4-19',
      hour: '12AM',
      latitude: 32,
      live: 1,
      longitude: -118,
      shape: 'f',
      shape_datail: {},
      shape_full: 'fair',
      size: 3,
      size_ft: 3.12,
      spot_id: 229,
      spot_name: 'blacks beach'
    }
  ]

  const mockSurfline = {
    Tide: {},
    Quickspot: {},
    SurflineWeather: {},
    Sort: {},
    Weather: {},
    WaterTemp: {},
    timeZoneString: "America/Los_Angeles",
    _metadata: {},
    timezone: -7,
    id: "4211",
    hourlyWind: {},
    HiresWind: {},
    Surf: {},
    new_hd_cam: "false",
    theWalue: "985 4211",
    hvp: {},
    lat: "33.984",
    Analysis: {},
    Confidence: {},
    Ureport: {},
    lon: "-118.475",
    Wind: {},
    Location: {},
    name: "Venice Beach"
  }

  const mockTide = [
    {
      date: 'wednesday',
      day: 'whatever',
      gmt: '2017-4-19',
      hour: '12AM',
      name: 'san diego',
      tide: 3,
      tide_meters: 1
    }
  ]

  it('test tides reducer, should return an empty array as default', () => {
      expect(tides(undefined, {})).toEqual([])
  })

  it('tides reducer should get tides, man.', () => {
    expect(tides([], {
      type: 'GRAB_TIDES',
      tides: mockTide
    }))
    .toEqual([mockTide])
  })

  it('spitBeaconsReport should return an empty array as default', () => {
    expect(spitBeaconsReport(undefined, [])).toEqual([])
  })

  it('spitBeaconsReport should return an array of objects', () => {
    expect(spitBeaconsReport([], {
      type: 'BEACONS_SURF',
      report: mockForecast
    }))
    .toEqual([mockForecast])
  })

  it('spitBlacksReport should return an empty array as default', () => {
    expect(spitBlacksReport(undefined, [])).toEqual([])
  })

  it('spitBlacksReport should return an array of objects', () => {
    expect(spitBlacksReport([], {
      type: 'BLACKS_SURF',
      report: mockForecast
    }))
    .toEqual([mockForecast])
  })

  it('spitCardiffReport should return an empty array as default', () => {
    expect(spitCardiffReport(undefined, [])).toEqual([])
  })

  it('spitCardiffReport should return an array of objects', () => {
    expect(spitCardiffReport([], {
      type: 'CARDIFF_SURF',
      report: mockForecast
    }))
    .toEqual([mockForecast])
  })

  it('spitTamarackReport should return an empty array as default', () => {
    expect(spitTamarackReport(undefined, [])).toEqual([])
  })

  it('spitTamarackReport should return an array of objects', () => {
    expect(spitTamarackReport([], {
      type: 'TAMARACK_SURF',
      report: mockForecast
    }))
    .toEqual([mockForecast])
  })

  it('spitPontoReport should return an empty array as default', () => {
    expect(spitPontoReport(undefined, [])).toEqual([])
  })

  it('spitPontoReport should return an array of objects', () => {
    expect(spitPontoReport([], {
      type: 'PONTO_SURF',
      report: mockForecast
    }))
    .toEqual([mockForecast])
  })

  it('spitOceansideReport should return an empty array as default', () => {
    expect(spitOceansideReport(undefined, [])).toEqual([])
  })

  it('spitOceansideReport should return an array of objects', () => {
    expect(spitOceansideReport([], {
      type: 'OCEANSIDE_SURF',
      report: mockForecast
    }))
    .toEqual([mockForecast])
  })

  it('spitScrippsReport should return an empty array as default', () => {
    expect(spitScrippsReport(undefined, [])).toEqual([])
  })

  it('spitScrippsReport should return an array of objects', () => {
    expect(spitScrippsReport([], {
      type: 'SCRIPPS_SURF',
      report: mockForecast
    }))
    .toEqual([mockForecast])
  })

  it('spitSwamisReport should return an empty array as default', () => {
    expect(spitSwamisReport(undefined, [])).toEqual([])
  })

  it('spitSwamisReport should return an array of objects', () => {
    expect(spitSwamisReport([], {
      type: 'SWAMIS_SURF',
      report: mockForecast
    }))
    .toEqual([mockForecast])
  })

  it('spitWindanseaReport should return an empty array as default', () => {
    expect(spitWindanseaReport(undefined, [])).toEqual([])
  })

  it('spitWindanseaReport should return an array of objects', () => {
    expect(spitWindanseaReport([], {
      type: 'WINDANSEA_SURF',
      report: mockForecast
    }))
    .toEqual([mockForecast])
  })

  it('surfLineBeaconsReport should return an empty array as default', () => {
    expect(surfLineBeaconsReport(undefined, [])).toEqual([])
  })

  it('surfLineBeaconsReport should return an array of objects', () => {
    expect(surfLineBeaconsReport([], {
      type: 'SL_BEACONS_SURF',
      report: mockSurfline
    }))
    .toEqual(mockSurfline)
  })

  it('surfLineBlacksReport should return an empty object as default', () => {
    expect(surfLineBlacksReport(undefined, [])).toEqual({})
  })

  it('surfLineBlacksReport should return an array of objects', () => {
    expect(surfLineBlacksReport([], {
      type: 'SL_BLACKS_SURF',
      report: mockSurfline
    }))
    .toEqual(mockSurfline)
  })

  it('surfLineCardiffReport should return an empty object as default', () => {
    expect(surfLineCardiffReport(undefined, [])).toEqual({})
  })

  it('surfLineCardiffReport should return an array of objects', () => {
    expect(surfLineCardiffReport([], {
      type: 'SL_CARDIFF_SURF',
      report: mockSurfline
    }))
    .toEqual(mockSurfline)
  })

  it('surfLineBeaconsTide should return an empty object as default', () => {
    expect(surfLineBeaconsTide(undefined, [])).toEqual({})
  })

  it('surfLineBeaconsTide should return an array of objects', () => {
    expect(surfLineBeaconsTide([], {
      type: 'SL_BEACONS_TIDE',
      report: mockSurfline
    }))
    .toEqual(mockSurfline)
  })

  it('surfLinePontoReport should return an empty object as default', () => {
    expect(surfLinePontoReport(undefined, [])).toEqual({})
  })

  it('surfLinePontoReport should return an array of objects', () => {
    expect(surfLinePontoReport([], {
      type: 'SL_PONTO_SURF',
      report: mockSurfline
    }))
    .toEqual(mockSurfline)
  })

  it('surfLineTamarackReport should return an empty object as default', () => {
    expect(surfLineTamarackReport(undefined, [])).toEqual({})
  })

  it('surfLineTamarackReport should return an array of objects', () => {
    expect(surfLineTamarackReport([], {
      type: 'SL_TAMARACK_SURF',
      report: mockSurfline
    }))
    .toEqual(mockSurfline)
  })

  it('surfLineWindanseaReport should return an empty object as default', () => {
    expect(surfLineWindanseaReport(undefined, [])).toEqual({})
  })

  it('surfLineWindanseaReport should return an array of objects', () => {
    expect(surfLineWindanseaReport([], {
      type: 'SL_WINDANSEA_SURF',
      report: mockSurfline
    }))
    .toEqual(mockSurfline)
  })

  it('surfLineScrippsReport should return an empty object as default', () => {
    expect(surfLineScrippsReport(undefined, [])).toEqual({})
  })

  it('surfLineScrippsReport should return an array of objects', () => {
    expect(surfLineScrippsReport([], {
      type: 'SL_SCRIPPS_SURF',
      report: mockSurfline
    }))
    .toEqual(mockSurfline)
  })

  it('surfLineOceansideReport should return an empty object as default', () => {
    expect(surfLineOceansideReport(undefined, [])).toEqual({})
  })

  it('surfLineOceansideReport should return an array of objects', () => {
    expect(surfLineOceansideReport([], {
      type: 'SL_OCEANSIDE_SURF',
      report: mockSurfline
    }))
    .toEqual(mockSurfline)
  })

  it('surfLineSwamisReport should return an empty object as default', () => {
    expect(surfLineSwamisReport(undefined, [])).toEqual({})
  })

  it('surfLineSwamisReport should return an array of objects', () => {
    expect(surfLineSwamisReport([], {
      type: 'SL_SWAMIS_SURF',
      report: mockSurfline
    }))
    .toEqual(mockSurfline)
  })

  it('current user should return false by default', () => {
    expect(currentUser(undefined, '')).toEqual(false)
  })

  it('current user should return true if passed a user', () => {
    expect(currentUser('', {
      type: 'LOG_IN',
      boolean: true
    }))
    .toEqual(true)
  })

})






